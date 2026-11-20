/**
 * Pure calculation, filtering, and comparison engine for the 2026 Elections app.
 * Zero DOM dependencies so all functions can run identically in browser and Node tests.
 */

export const PRIORITY_WEIGHTS = {
  skip: 0,
  low: 0.5,
  normal: 1.0,
  high: 2.0
};

const EXACT_MATCH_THRESHOLD = 0.85;

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

/**
 * Filter political parties by ideological bloc and optional free-text search
 * across party metadata and their programmatic measures.
 *
 * @param {Array<object>} parties
 * @param {Record<string, Record<string, object>>} programs
 * @param {{ bloc?: string, query?: string }} options
 * @returns {Array<object>}
 */
export function filterParties(parties, programs, { bloc = 'all', query = '' } = {}) {
  const normalizedQuery = normalizeText(query);

  return parties.filter((party) => {
    if (bloc && bloc !== 'all' && party.bloc !== bloc) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const metadataFields = [
      party.shortName,
      party.fullName,
      party.bloc,
      party.ideology,
      party.leader,
      party.summary,
      party.foundedLabel,
      ...(party.searchAliases || [])
    ];

    if (metadataFields.some((field) => normalizeText(field).includes(normalizedQuery))) {
      return true;
    }

    const partyProgram = programs?.[party.id];
    if (!partyProgram) {
      return false;
    }

    return Object.values(partyProgram).some((proposal) => {
      if (
        normalizeText(proposal.headline).includes(normalizedQuery) ||
        normalizeText(proposal.summary).includes(normalizedQuery)
      ) {
        return true;
      }
      return (proposal.measures || []).some((m) =>
        normalizeText(m).includes(normalizedQuery)
      );
    });
  });
}

/**
 * Build structured side-by-side comparison entries for a topic across selected parties.
 *
 * @param {string} topicId
 * @param {Array<string>} selectedPartyIds
 * @param {Array<object>} parties
 * @param {Record<string, Record<string, object>>} programs
 * @returns {Array<{ party: object, proposal: object|null }>}
 */
export function buildTopicComparison(topicId, selectedPartyIds, parties, programs) {
  const selectedSet = new Set(selectedPartyIds);

  return parties
    .filter((party) => selectedSet.has(party.id))
    .map((party) => ({
      party,
      proposal: programs?.[party.id]?.[topicId] ?? null
    }));
}

/**
 * Compute citizen affinity across all parties based on concrete policy option
 * selections and per-question importance weights.
 *
 * @param {Record<string, string>} answers - Map of questionId -> chosen optionId
 * @param {Record<string, string>} priorities - Map of questionId -> 'skip' | 'low' | 'normal' | 'high'
 * @param {Array<object>} questions
 * @param {Array<object>} parties
 * @returns {{
 *   answeredCount: number,
 *   totalWeight: number,
 *   rankedParties: Array<object>,
 *   questionBreakdown: Array<object>
 * }}
 */
export function calculateCitizenAffinity(
  answers = {},
  priorities = {},
  questions = [],
  parties = []
) {
  const activeQuestions = [];

  for (const question of questions) {
    const selectedOptionId = answers[question.id];
    if (!selectedOptionId) continue;

    const priorityKey = priorities[question.id] || 'normal';
    const multiplier =
      PRIORITY_WEIGHTS[priorityKey] !== undefined
        ? PRIORITY_WEIGHTS[priorityKey]
        : PRIORITY_WEIGHTS.normal;

    if (multiplier <= 0) continue;

    const selectedOption = (question.options || []).find(
      (opt) => opt.id === selectedOptionId
    );
    if (!selectedOption) continue;

    activeQuestions.push({
      question,
      selectedOption,
      priorityKey,
      multiplier
    });
  }

  const totalWeight = activeQuestions.reduce((acc, item) => acc + item.multiplier, 0);

  if (activeQuestions.length === 0 || totalWeight === 0) {
    return {
      answeredCount: 0,
      totalWeight: 0,
      rankedParties: parties.map((party) => ({
        partyId: party.id,
        scorePercentage: 0,
        rawRatio: 0,
        exactMatchesCount: 0,
        topicScores: {},
        matchedOptions: []
      })),
      questionBreakdown: []
    };
  }

  const rankedParties = parties.map((party) => {
    let weightedSum = 0;
    let exactMatchesCount = 0;
    const topicAccumulators = {};
    const matchedOptions = [];

    for (const item of activeQuestions) {
      const { question, selectedOption, multiplier } = item;
      const weight = Number(selectedOption.partyWeights?.[party.id] ?? 0);
      const clampedWeight = Math.max(0, Math.min(1, weight));

      weightedSum += clampedWeight * multiplier;

      const isExactMatch = clampedWeight >= EXACT_MATCH_THRESHOLD;
      if (isExactMatch) {
        exactMatchesCount += 1;
      }

      if (!topicAccumulators[question.topicId]) {
        topicAccumulators[question.topicId] = { sum: 0, weight: 0 };
      }
      topicAccumulators[question.topicId].sum += clampedWeight * multiplier;
      topicAccumulators[question.topicId].weight += multiplier;

      matchedOptions.push({
        questionId: question.id,
        topicId: question.topicId,
        title: question.title,
        optionId: selectedOption.id,
        optionTitle: selectedOption.title,
        weight: clampedWeight,
        isExactMatch
      });
    }

    const rawRatio = weightedSum / totalWeight;
    const scorePercentage = Math.round(rawRatio * 100);

    const topicScores = {};
    for (const [topicId, acc] of Object.entries(topicAccumulators)) {
      topicScores[topicId] = acc.weight > 0 ? Math.round((acc.sum / acc.weight) * 100) : 0;
    }

    return {
      partyId: party.id,
      scorePercentage,
      rawRatio,
      exactMatchesCount,
      topicScores,
      matchedOptions
    };
  });

  rankedParties.sort((a, b) => {
    if (b.scorePercentage !== a.scorePercentage) {
      return b.scorePercentage - a.scorePercentage;
    }
    if (b.exactMatchesCount !== a.exactMatchesCount) {
      return b.exactMatchesCount - a.exactMatchesCount;
    }
    return b.rawRatio - a.rawRatio;
  });

  const questionBreakdown = activeQuestions.map(
    ({ question, selectedOption, priorityKey, multiplier }) => ({
      questionId: question.id,
      topicId: question.topicId,
      title: question.title,
      questionText: question.questionText,
      selectedOptionId: selectedOption.id,
      selectedOptionTitle: selectedOption.title,
      selectedOptionDescription: selectedOption.description,
      priorityKey,
      multiplier,
      representativeParties: selectedOption.representativeParties || [],
      partyWeights: selectedOption.partyWeights || {}
    })
  );

  return {
    answeredCount: activeQuestions.length,
    totalWeight,
    rankedParties,
    questionBreakdown
  };
}

/**
 * Compute per-question completion status for the stepper navigation bar.
 *
 * @param {Array<object>} questions
 * @param {Record<string, string>} answers
 * @param {Record<string, string>} priorities
 * @param {number} currentIndex
 * @returns {Array<{ index: number, questionId: string, topicId: string, status: 'answered'|'skipped'|'pending', isCurrent: boolean }>}
 */
export function getQuestionStepStates(
  questions = [],
  answers = {},
  priorities = {},
  currentIndex = 0
) {
  const safeIndex = questions.length > 0
    ? Math.max(0, Math.min(currentIndex, questions.length - 1))
    : 0;

  return questions.map((question, index) => {
    const priority = priorities[question.id] || 'normal';
    const hasAnswer = Boolean(answers[question.id]);

    let status = 'pending';
    if (priority === 'skip') {
      status = 'skipped';
    } else if (hasAnswer) {
      status = 'answered';
    }

    return {
      index,
      questionId: question.id,
      topicId: question.topicId,
      status,
      isCurrent: index === safeIndex
    };
  });
}

/**
 * Resolve the next stepper state after answering or advancing from `currentIndex`.
 * Moves to the next question or transitions to `'results'` after the final question.
 *
 * @param {number} currentIndex
 * @param {number} totalQuestions
 * @returns {{ quizCurrentIndex: number, quizViewMode: 'question'|'results' }}
 */
export function getNextQuestionStep(currentIndex, totalQuestions) {
  if (totalQuestions <= 0) {
    return { quizCurrentIndex: 0, quizViewMode: 'results' };
  }
  const clamped = Math.max(0, Math.min(currentIndex, totalQuestions - 1));
  if (clamped >= totalQuestions - 1) {
    return { quizCurrentIndex: clamped, quizViewMode: 'results' };
  }
  return { quizCurrentIndex: clamped + 1, quizViewMode: 'question' };
}

/**
 * Resolve the previous stepper state from `currentIndex`.
 *
 * @param {number} currentIndex
 * @returns {{ quizCurrentIndex: number, quizViewMode: 'question' }}
 */
export function getPrevQuestionStep(currentIndex) {
  return {
    quizCurrentIndex: Math.max(0, currentIndex - 1),
    quizViewMode: 'question'
  };
}

function shuffleArray(items = [], rng = Math.random) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Create a randomized session copy of the questionnaire without mutating
 * the canonical `QUESTIONS` dataset or its nested `options` arrays.
 *
 * @param {Array<object>} questions
 * @param {{ shuffleOptions?: boolean, rng?: () => number }} [options]
 * @returns {Array<object>}
 */
export function createRandomizedQuiz(
  questions = [],
  { shuffleOptions = true, rng = Math.random } = {}
) {
  if (!Array.isArray(questions) || questions.length === 0) {
    return [];
  }

  return shuffleArray(questions, rng).map((question) => ({
    ...question,
    options: shuffleOptions
      ? shuffleArray(question.options || [], rng)
      : [...(question.options || [])]
  }));
}

/**
 * Summarize blind-evaluation progress counts consistently with the stepper and
 * scoring engine (`answered`, `skipped`, `pending`, `resolved`, `completionPercent`).
 *
 * @param {Array<object>} questions
 * @param {Record<string, string>} answers
 * @param {Record<string, string>} priorities
 * @returns {{
 *   total: number,
 *   answered: number,
 *   skipped: number,
 *   pending: number,
 *   resolved: number,
 *   completionPercent: number
 * }}
 */
export function getQuizProgressStats(questions = [], answers = {}, priorities = {}) {
  const total = Array.isArray(questions) ? questions.length : 0;
  if (total === 0) {
    return {
      total: 0,
      answered: 0,
      skipped: 0,
      pending: 0,
      resolved: 0,
      completionPercent: 0
    };
  }

  const steps = getQuestionStepStates(questions, answers, priorities, 0);
  let answered = 0;
  let skipped = 0;
  let pending = 0;

  for (const step of steps) {
    if (step.status === 'answered') {
      answered += 1;
    } else if (step.status === 'skipped') {
      skipped += 1;
    } else {
      pending += 1;
    }
  }

  const resolved = answered + skipped;
  const completionPercent = Math.round((resolved / total) * 100);

  return {
    total,
    answered,
    skipped,
    pending,
    resolved,
    completionPercent
  };
}

const PRIORITY_ORDER = {
  high: 3,
  normal: 2,
  low: 1
};

function selectTopicSummaryFields(topic) {
  return {
    topicId: topic.topicId,
    topicTitle: topic.topicTitle,
    topicShortTitle: topic.topicShortTitle,
    score: topic.score,
    highestPriority: topic.highestPriority
  };
}

/**
 * Build an end-of-test policy similarity report mapping answered policy areas
 * to their closest matching parties and summarizing strongest/weakest areas for
 * top overall aligned parties.
 *
 * @param {object} affinitySummary - Output of `calculateCitizenAffinity`
 * @param {Array<object>} topics
 * @param {Array<object>} parties
 * @param {{ blocFilter?: string, maxPartiesPerTopic?: number, topPartiesLimit?: number }} [options]
 * @returns {{
 *   byTopic: Array<object>,
 *   byParty: Array<object>,
 *   summaryMetrics: {
 *     answeredTopicsCount: number,
 *     distinctLeadingPartiesCount: number,
 *     highPriorityTopics: Array<object>
 *   }
 * }}
 */
export function buildPolicySimilarityReport(
  affinitySummary,
  topics = [],
  parties = [],
  { blocFilter = 'all', maxPartiesPerTopic = 4, topPartiesLimit = 3 } = {}
) {
  if (
    !affinitySummary ||
    affinitySummary.answeredCount <= 0 ||
    !Array.isArray(affinitySummary.questionBreakdown) ||
    affinitySummary.questionBreakdown.length === 0
  ) {
    return {
      byTopic: [],
      byParty: [],
      summaryMetrics: {
        answeredTopicsCount: 0,
        distinctLeadingPartiesCount: 0,
        highPriorityTopics: []
      }
    };
  }

  const partyById = new Map();
  const partyOrderIndex = new Map();
  parties.forEach((party, idx) => {
    partyById.set(party.id, party);
    partyOrderIndex.set(party.id, idx);
  });

  const visibleRankedParties = (affinitySummary.rankedParties || []).filter((entry) => {
    const party = partyById.get(entry.partyId);
    if (!party) return false;
    return !blocFilter || blocFilter === 'all' || party.bloc === blocFilter;
  });

  const breakdownByTopic = new Map();
  for (const row of affinitySummary.questionBreakdown) {
    if (!breakdownByTopic.has(row.topicId)) {
      breakdownByTopic.set(row.topicId, []);
    }
    breakdownByTopic.get(row.topicId).push(row);
  }

  const leadingPartyIds = new Set();
  const rawTopics = [];

  topics.forEach((topic, canonicalIndex) => {
    const rows = breakdownByTopic.get(topic.id);
    if (!rows || rows.length === 0) return;

    let totalTopicWeight = 0;
    let highestPriority = 'low';
    let highestRank = 0;

    const chosenOptions = rows.map((row) => {
      totalTopicWeight += Number(row.multiplier) || 0;
      const rank = PRIORITY_ORDER[row.priorityKey] ?? PRIORITY_ORDER.normal;
      if (rank > highestRank) {
        highestRank = rank;
        highestPriority = row.priorityKey || 'normal';
      }
      return {
        questionId: row.questionId,
        title: row.title,
        selectedOptionTitle: row.selectedOptionTitle,
        priorityKey: row.priorityKey
      };
    });

    const scored = [];
    for (const entry of visibleRankedParties) {
      const topicScore = entry.topicScores?.[topic.id];
      if (topicScore === undefined) continue;
      const party = partyById.get(entry.partyId);
      if (!party) continue;

      scored.push({
        partyId: party.id,
        shortName: party.shortName,
        bloc: party.bloc,
        accentColor: party.accentColor,
        topicScore,
        overallScore: entry.scorePercentage,
        exactMatchesCount: entry.exactMatchesCount,
        canonicalIndex: partyOrderIndex.get(party.id) ?? Number.MAX_SAFE_INTEGER
      });
    }

    scored.sort((a, b) => {
      if (b.topicScore !== a.topicScore) {
        return b.topicScore - a.topicScore;
      }
      if (b.overallScore !== a.overallScore) {
        return b.overallScore - a.overallScore;
      }
      if (b.exactMatchesCount !== a.exactMatchesCount) {
        return b.exactMatchesCount - a.exactMatchesCount;
      }
      return a.canonicalIndex - b.canonicalIndex;
    });

    const topScore = scored[0]?.topicScore ?? 0;
    const threshold =
      topScore >= 50 ? Math.max(50, topScore - 10) : Math.max(1, topScore - 10);

    const qualifying =
      topScore > 0 ? scored.filter((item) => item.topicScore >= threshold) : [];

    if (topScore > 0) {
      for (const item of scored) {
        if (item.topicScore === topScore) {
          leadingPartyIds.add(item.partyId);
        } else {
          break;
        }
      }
    }

    const topMatches = qualifying.slice(0, maxPartiesPerTopic).map((item) => ({
      partyId: item.partyId,
      shortName: item.shortName,
      bloc: item.bloc,
      accentColor: item.accentColor,
      topicScore: item.topicScore,
      overallScore: item.overallScore
    }));

    const additionalTiedCount = Math.max(0, qualifying.length - topMatches.length);

    rawTopics.push({
      topicId: topic.id,
      topicTitle: topic.title,
      topicShortTitle: topic.shortTitle || topic.title,
      questionCount: rows.length,
      totalTopicWeight,
      highestPriority,
      chosenOptions,
      topScore,
      topMatches,
      additionalTiedCount,
      canonicalIndex
    });
  });

  rawTopics.sort((a, b) => {
    const aHigh = a.highestPriority === 'high' ? 1 : 0;
    const bHigh = b.highestPriority === 'high' ? 1 : 0;
    if (bHigh !== aHigh) {
      return bHigh - aHigh;
    }
    return a.canonicalIndex - b.canonicalIndex;
  });

  const byTopic = rawTopics.map(({ canonicalIndex, ...rest }) => rest);

  const byParty = [];
  for (const entry of visibleRankedParties) {
    if (byParty.length >= topPartiesLimit) break;
    if (entry.scorePercentage <= 0) continue;

    const party = partyById.get(entry.partyId);
    if (!party) continue;

    const evaluatedTopics = byTopic.map((topicItem, orderIdx) => ({
      topicId: topicItem.topicId,
      topicTitle: topicItem.topicTitle,
      topicShortTitle: topicItem.topicShortTitle,
      score: entry.topicScores?.[topicItem.topicId] ?? 0,
      totalTopicWeight: topicItem.totalTopicWeight,
      highestPriority: topicItem.highestPriority,
      orderIdx
    }));

    let strongTopics = evaluatedTopics
      .filter((t) => t.score >= 75)
      .sort(
        (a, b) =>
          b.score - a.score ||
          b.totalTopicWeight - a.totalTopicWeight ||
          a.orderIdx - b.orderIdx
      );

    if (strongTopics.length === 0) {
      strongTopics = evaluatedTopics
        .filter((t) => t.score >= 50)
        .sort(
          (a, b) =>
            b.score - a.score ||
            b.totalTopicWeight - a.totalTopicWeight ||
            a.orderIdx - b.orderIdx
        )
        .slice(0, 2);
    }

    const weakTopics = evaluatedTopics
      .filter((t) => t.score < 50)
      .sort(
        (a, b) =>
          a.score - b.score ||
          b.totalTopicWeight - a.totalTopicWeight ||
          a.orderIdx - b.orderIdx
      )
      .slice(0, 3);

    byParty.push({
      partyId: party.id,
      shortName: party.shortName,
      fullName: party.fullName,
      bloc: party.bloc,
      accentColor: party.accentColor,
      scorePercentage: entry.scorePercentage,
      exactMatchesCount: entry.exactMatchesCount,
      answeredCount: affinitySummary.answeredCount,
      strongTopics: strongTopics.map(selectTopicSummaryFields),
      weakTopics: weakTopics.map(selectTopicSummaryFields)
    });
  }

  const highPriorityTopics = byTopic
    .filter((topicItem) => topicItem.highestPriority === 'high')
    .map((topicItem) => ({
      topicId: topicItem.topicId,
      topicShortTitle: topicItem.topicShortTitle,
      topScore: topicItem.topScore,
      topPartyShortNames: topicItem.topMatches.slice(0, 3).map((m) => m.shortName)
    }));

  return {
    byTopic,
    byParty,
    summaryMetrics: {
      answeredTopicsCount: byTopic.length,
      distinctLeadingPartiesCount: leadingPartyIds.size,
      highPriorityTopics
    }
  };
}
