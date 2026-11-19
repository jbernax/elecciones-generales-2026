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
      party.foundedLabel
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
