/**
 * Elecciones Generales España 2026 — Unified Flagship & Interactive Workbench Controller
 */

import { BLOCS, PARTIES, getPartyById, resolvePartyId } from './data/parties.js?v=20261120b';
import { TOPICS, getTopicById } from './data/topics.js?v=20261120b';
import { PROGRAMS, getPartyProgram } from './data/programs.js?v=20261120b';
import { QUESTIONS } from './data/questionnaire.js?v=20261120b';
import { getTopicOfficialContext } from './data/macroContext.js?v=20261120b';
import {
  filterParties,
  buildTopicComparison,
  calculateCitizenAffinity,
  createRandomizedQuiz,
  getQuizProgressStats,
  buildPolicySimilarityReport,
  getQuestionStepStates,
  getNextQuestionStep,
  getPrevQuestionStep
} from './engine/affinityEngine.js?v=20261120b';

const PRESET_PARTIES = {
  principales: ['psoe', 'pp', 'vox', 'frente_amplio', 'podemos'],
  'izquierda-centro': ['frente_amplio', 'podemos', 'psoe', 'd21'],
  'derecha-otros': ['pp', 'vox', 'salf', 'fe_jons', 'pacma', 'iustitia', 'fo'],
  todas: PARTIES.map((party) => party.id)
};

const PRIORITY_OPTIONS = [
  { key: 'skip', label: 'Omitir' },
  { key: 'low', label: 'Baja (x0,5)' },
  { key: 'normal', label: 'Normal (x1)' },
  { key: 'high', label: 'Alta (x2)' }
];

const PALETTE_STORAGE_KEY = 'esp2026-palette';

const state = {
  blocFilter: 'all',
  searchQuery: '',
  comparatorTopicId: 'economia',
  comparatorPartyIds: [...PRESET_PARTIES.principales],
  comparatorMode: 'cards',
  quizQuestions: createRandomizedQuiz(QUESTIONS),
  answers: {},
  priorities: {},
  quizCurrentIndex: 0,
  quizViewMode: 'question',
  resultsBlocFilter: 'all',
  selectedResultPartyId: null,
  drawerPartyId: null,
  drawerShowPdf: false,
  lastFocusedTrigger: null
};

/* =========================================================================
 * SECURITY & TEXT UTILITIES
 * ========================================================================= */
function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function sanitizeHttpUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return null;
  try {
    const parsed = new URL(rawUrl, window.location.origin);
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
      return parsed.href;
    }
  } catch {
    return null;
  }
  return null;
}

function sanitizeLocalPdfPath(rawPath) {
  if (!rawPath || typeof rawPath !== 'string') return null;
  if (/^\.\/pdfs\/[a-zA-Z0-9._-]+\.pdf$/.test(rawPath)) {
    return rawPath;
  }
  return null;
}

function formatPartyCardTitle(party) {
  if (party.shortName.toLowerCase() === party.fullName.toLowerCase()) {
    return party.fullName;
  }
  return `${party.shortName} — ${party.fullName}`;
}

/**
 * Partition arbitrary party count into complete 12-column Bento rows
 * so desktop layouts stay asymmetric yet completely flush without gaps.
 */
function computeBentoSpans(count) {
  if (count <= 0) return [];
  if (count === 1) return ['span-12'];

  const pairs = [
    ['span-7', 'span-5'],
    ['span-5', 'span-7'],
    ['span-8', 'span-4']
  ];
  const triplet = ['span-4', 'span-4', 'span-4'];
  const spans = [];
  let remaining = count;
  let pairIndex = 0;
  let step = 0;

  while (remaining > 0) {
    if (remaining === 3) {
      spans.push(...triplet);
      remaining -= 3;
    } else if (remaining === 2 || remaining === 4 || remaining === 5) {
      spans.push(...pairs[pairIndex % pairs.length]);
      pairIndex += 1;
      remaining -= 2;
    } else if (step % 2 === 0) {
      spans.push(...pairs[pairIndex % pairs.length]);
      pairIndex += 1;
      remaining -= 2;
    } else {
      spans.push(...triplet);
      remaining -= 3;
    }
    step += 1;
  }

  return spans;
}

/* =========================================================================
 * PALETTE & READING PROGRESS
 * ========================================================================= */
function applyPalette(paletteName) {
  const toggleBtn = document.getElementById('palette-toggle');
  const isDaylight = paletteName === 'daylight-editorial';

  if (isDaylight) {
    document.documentElement.dataset.palette = 'daylight-editorial';
  } else {
    delete document.documentElement.dataset.palette;
  }

  if (toggleBtn) {
    toggleBtn.textContent = isDaylight ? 'Modo oscuro' : 'Modo claro';
    toggleBtn.setAttribute('aria-pressed', isDaylight ? 'true' : 'false');
  }

  try {
    window.localStorage.setItem(PALETTE_STORAGE_KEY, isDaylight ? 'daylight-editorial' : 'obsidian-carbon');
  } catch {
    // Storage disabled cleanly ignored
  }
}

function initPaletteControls() {
  let savedPalette = 'obsidian-carbon';
  try {
    const stored = window.localStorage.getItem(PALETTE_STORAGE_KEY);
    if (stored === 'daylight-editorial') {
      savedPalette = 'daylight-editorial';
    }
  } catch {
    savedPalette = 'obsidian-carbon';
  }

  applyPalette(savedPalette);

  document.getElementById('palette-toggle')?.addEventListener('click', () => {
    const next =
      document.documentElement.dataset.palette === 'daylight-editorial'
        ? 'obsidian-carbon'
        : 'daylight-editorial';
    applyPalette(next);
  });
}

function initScrollProgress() {
  const fill = document.getElementById('reading-progress-fill');
  const navLinks = Array.from(document.querySelectorAll('.topbar-nav a[href^="#"]'));
  const observedSections = navLinks
    .map((link) => {
      const targetId = link.getAttribute('href')?.slice(1);
      return targetId ? document.getElementById(targetId) : null;
    })
    .filter(Boolean);

  const updateProgress = () => {
    const doc = document.documentElement;
    const scrollMax = Math.max(1, doc.scrollHeight - window.innerHeight);
    const ratio = Math.min(1, Math.max(0, window.scrollY / scrollMax));
    if (fill) {
      fill.style.width = `${Math.round(ratio * 100)}%`;
    }

    let activeId = observedSections[0]?.id || 'panorama';
    for (const section of observedSections) {
      if (section.getBoundingClientRect().top <= 240) {
        activeId = section.id;
      }
    }

    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${activeId}`);
    });
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

/* =========================================================================
 * STAGE 1: ASYMMETRIC BENTO DIRECTORY
 * ========================================================================= */
function renderBlocFilters() {
  const bar = document.getElementById('bloc-filter-bar');
  if (!bar) return;

  const chips = [
    { key: 'all', label: `Todos (${PARTIES.length})` },
    ...BLOCS.map((bloc) => {
      const count = PARTIES.filter((party) => party.bloc === bloc).length;
      return { key: bloc, label: `${bloc} (${count})` };
    })
  ];

  bar.innerHTML = chips
    .map(
      ({ key, label }) => `
        <li>
          <button
            type="button"
            class="bloc-chip-btn ${state.blocFilter === key ? 'is-active' : ''}"
            data-bloc="${escapeHtml(key)}"
            aria-pressed="${state.blocFilter === key ? 'true' : 'false'}"
          >
            ${escapeHtml(label)}
          </button>
        </li>
      `
    )
    .join('');

  bar.querySelectorAll('.bloc-chip-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.blocFilter = btn.dataset.bloc || 'all';
      renderBlocFilters();
      renderPartiesDirectory();
    });
  });
}

function renderPartiesDirectory() {
  const grid = document.getElementById('parties-bento-grid');
  const counterEl = document.getElementById('parties-counter');
  if (!grid) return;

  const filtered = filterParties(PARTIES, PROGRAMS, {
    bloc: state.blocFilter,
    query: state.searchQuery
  });

  if (counterEl) {
    counterEl.textContent = `${filtered.length} de ${PARTIES.length} candidaturas`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <article class="empty-state-panel">
        <h3>Sin coincidencias</h3>
        <p>Prueba con otro término de búsqueda o quita el filtro de bloque ideológico.</p>
      </article>
    `;
    return;
  }

  const spans = computeBentoSpans(filtered.length);

  grid.innerHTML = filtered
    .map((party, index) => {
      const safePdf = sanitizeLocalPdfPath(party.localPdfPath);
      const docStatus = safePdf
        ? `PDF local${party.localPdfMeta?.pages ? ` · ${party.localPdfMeta.pages} pág.` : ''}`
        : party.status;

      return `
        <article
          class="bento-card party-bento-card ${spans[index]}"
          style="--party-accent: ${escapeHtml(party.accentColor)};"
        >
          <header>
            <p class="party-eyebrow">
              <span class="swatch-dot" aria-hidden="true"></span>
              <span>${escapeHtml(party.bloc)} · ${escapeHtml(party.foundedLabel)}</span>
            </p>
            <h3 class="party-official-name">${escapeHtml(formatPartyCardTitle(party))}</h3>
            <p class="party-summary-copy">${escapeHtml(party.ideology)}. ${escapeHtml(party.summary)}</p>
          </header>

          <footer class="party-card-foot">
            <span class="doc-badge ${safePdf ? 'is-local' : ''}">${escapeHtml(docStatus)}</span>
            <button
              type="button"
              class="inline-action-btn"
              data-open-party="${escapeHtml(party.id)}"
            >
              Ver programa &rarr;
            </button>
          </footer>
        </article>
      `;
    })
    .join('');

  grid.querySelectorAll('[data-open-party]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openPartyDrawer(btn.dataset.openParty, btn);
    });
  });
}

/* =========================================================================
 * STAGE 3: UNIFIED SPLIT-STAGE WORKBENCH (#comparador)
 * ========================================================================= */
function renderTopicOfficialWrapper() {
  const container = document.getElementById('workbench-official-wrapper');
  if (!container) return;

  const context = getTopicOfficialContext(state.comparatorTopicId);
  if (!context) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
    <details class="topic-official-wrapper carbon-breakout">
      <summary class="topic-official-summary">
        <div class="topic-official-heading">
          <span class="kicker">Contexto oficial · ${escapeHtml(context.updatedLabel)}</span>
          <strong class="topic-official-title">${escapeHtml(context.title)}</strong>
          <span class="topic-official-subtitle">${escapeHtml(context.subtitle)}</span>
        </div>
        <span class="topic-official-toggle">
          <span class="toggle-text-closed">Desplegar datos oficiales</span>
          <span class="toggle-text-open">Ocultar datos oficiales</span>
        </span>
      </summary>
      <div class="topic-official-body">
        <dl class="breakout-grid">
          ${context.metrics
            .map(
              (m) => `
                <section class="breakout-item">
                  <dt>${escapeHtml(m.label)}</dt>
                  <dd>
                    ${escapeHtml(m.value)}
                    <span class="breakout-detail">${escapeHtml(m.detail)}</span>
                  </dd>
                </section>
              `
            )
            .join('')}
        </dl>
        <p class="breakout-caption">${escapeHtml(context.sourcesNote)}</p>
      </div>
    </details>
  `;
}

function renderComparatorWorkbench() {
  const topicsList = document.getElementById('workbench-topics-list');
  const partiesToggleList = document.getElementById('workbench-parties-toggle-list');
  const partiesCount = document.getElementById('workbench-parties-count');
  const topicHeader = document.getElementById('workbench-topic-header');
  const matrixEl = document.getElementById('comparator-matrix');

  if (!topicsList || !partiesToggleList || !topicHeader || !matrixEl) return;

  topicsList.innerHTML = TOPICS.map((topic) => {
    const active = topic.id === state.comparatorTopicId;
    return `
      <li>
        <button
          type="button"
          class="filter-btn ${active ? 'is-active' : ''}"
          data-topic-id="${escapeHtml(topic.id)}"
          aria-pressed="${active ? 'true' : 'false'}"
        >
          <span>${escapeHtml(topic.shortLabel || topic.title)}</span>
        </button>
      </li>
    `;
  }).join('');

  topicsList.querySelectorAll('[data-topic-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.comparatorTopicId = btn.dataset.topicId || TOPICS[0].id;
      renderComparatorWorkbench();
    });
  });

  const selectedSet = new Set(state.comparatorPartyIds);
  if (partiesCount) {
    partiesCount.textContent = `${selectedSet.size} / ${PARTIES.length}`;
  }

  partiesToggleList.innerHTML = PARTIES.map((party) => {
    const isSelected = selectedSet.has(party.id);

    return `
      <li>
        <button
          type="button"
          class="party-toggle-pill ${isSelected ? 'is-selected' : ''}"
          style="--party-accent: ${escapeHtml(party.accentColor)};"
          data-toggle-party="${escapeHtml(party.id)}"
          aria-pressed="${isSelected ? 'true' : 'false'}"
        >
          <span class="swatch-dot" aria-hidden="true"></span>
          <span>${escapeHtml(party.shortName)}</span>
        </button>
      </li>
    `;
  }).join('');

  partiesToggleList.querySelectorAll('[data-toggle-party]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const partyId = btn.dataset.toggleParty;
      if (!partyId) return;

      if (selectedSet.has(partyId)) {
        if (state.comparatorPartyIds.length > 1) {
          state.comparatorPartyIds = state.comparatorPartyIds.filter((id) => id !== partyId);
        }
      } else {
        state.comparatorPartyIds = [...state.comparatorPartyIds, partyId];
      }
      renderComparatorWorkbench();
    });
  });

  const activeTopic = getTopicById(state.comparatorTopicId) || TOPICS[0];
  topicHeader.innerHTML = `
    <span class="kicker">Tema activo · ${selectedSet.size} candidaturas comparadas</span>
    <h3>${escapeHtml(activeTopic.title)}</h3>
    <p>${escapeHtml(activeTopic.description)}</p>
  `;

  renderTopicOfficialWrapper();

  const cardsBtn = document.getElementById('comparador-mode-cards');
  const tableBtn = document.getElementById('comparador-mode-table');
  const isTableMode = state.comparatorMode === 'table';

  cardsBtn?.classList.toggle('is-active', !isTableMode);
  cardsBtn?.setAttribute('aria-pressed', !isTableMode ? 'true' : 'false');
  tableBtn?.classList.toggle('is-active', isTableMode);
  tableBtn?.setAttribute('aria-pressed', isTableMode ? 'true' : 'false');
  matrixEl.classList.toggle('is-table-mode', isTableMode);

  const items = buildTopicComparison(
    activeTopic.id,
    state.comparatorPartyIds,
    PARTIES,
    PROGRAMS
  );

  if (isTableMode) {
    matrixEl.innerHTML = `
      <table class="spec-table">
        <thead>
          <tr>
            <th>Partido</th>
            <th>Bloque</th>
            <th>Línea principal</th>
            <th>Medidas clave</th>
            <th>Ficha</th>
          </tr>
        </thead>
        <tbody>
          ${items
            .map(({ party, proposal }) => {
              if (!proposal) return '';
              return `
                <tr>
                  <td data-label="Partido"><strong>${escapeHtml(party.shortName)}</strong></td>
                  <td data-label="Bloque">${escapeHtml(party.bloc)}</td>
                  <td data-label="Línea principal">${escapeHtml(proposal.headline)}</td>
                  <td data-label="Medidas clave">${escapeHtml((proposal.measures || []).slice(0, 2).join(' · '))}</td>
                  <td data-label="Ficha">
                    <button
                      type="button"
                      class="inline-action-btn"
                      data-open-party="${escapeHtml(party.id)}"
                    >
                      Ver ficha &rarr;
                    </button>
                  </td>
                </tr>
              `;
            })
            .join('')}
        </tbody>
      </table>
    `;
  } else {
    matrixEl.innerHTML = items
      .map(({ party, proposal }) => {
        if (!proposal) return '';
        const measuresHtml = (proposal.measures || [])
          .map((measure) => `<li>${escapeHtml(measure)}</li>`)
          .join('');

        return `
          <article
            class="comparator-card"
            style="--party-accent: ${escapeHtml(party.accentColor)};"
          >
            <header class="comparator-card-head">
              <span class="party-eyebrow">
                <span class="swatch-dot" aria-hidden="true"></span>
                <strong class="party-abbr">${escapeHtml(party.shortName)}</strong>
              </span>
              <span class="doc-badge">${escapeHtml(party.bloc)}</span>
            </header>

            <h4 class="comparator-card-headline">${escapeHtml(proposal.headline)}</h4>
            <p class="comparator-card-summary">${escapeHtml(proposal.summary)}</p>

            <ul class="measures-list">
              ${measuresHtml}
            </ul>

            <footer class="comparator-card-foot">
              <span class="doc-badge">${escapeHtml(party.fullName)}</span>
              <button
                type="button"
                class="inline-action-btn"
                data-open-party="${escapeHtml(party.id)}"
              >
                Ver programa completo &rarr;
              </button>
            </footer>
          </article>
        `;
      })
      .join('');
  }

  matrixEl.querySelectorAll('[data-open-party]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openPartyDrawer(btn.dataset.openParty, btn);
    });
  });
}

function initComparatorControls() {
  document.querySelectorAll('.preset-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.preset;
      if (key && PRESET_PARTIES[key]) {
        state.comparatorPartyIds = [...PRESET_PARTIES[key]];
        renderComparatorWorkbench();
      }
    });
  });

  document.getElementById('comparador-mode-cards')?.addEventListener('click', () => {
    state.comparatorMode = 'cards';
    renderComparatorWorkbench();
  });

  document.getElementById('comparador-mode-table')?.addEventListener('click', () => {
    state.comparatorMode = 'table';
    renderComparatorWorkbench();
  });
}

/* =========================================================================
 * STAGE 4: SINGLE-SCREEN BLIND STEPPER QUESTIONNAIRE & POLICY REPORT (#cuestionario)
 * ========================================================================= */
let autoAdvanceTimer = null;

function clearAutoAdvanceTimer() {
  if (autoAdvanceTimer !== null) {
    window.clearTimeout(autoAdvanceTimer);
    autoAdvanceTimer = null;
  }
}

function stripLeadingQuestionNumber(title) {
  return String(title || '').replace(/^\d+\.\s*/, '').trim();
}

function advanceQuizStep() {
  clearAutoAdvanceTimer();
  const next = getNextQuestionStep(state.quizCurrentIndex, state.quizQuestions.length);
  state.quizCurrentIndex = next.quizCurrentIndex;
  state.quizViewMode = next.quizViewMode;
  renderQuestionnaireQuestions();
  renderQuizProgressAside();
  if (state.quizViewMode === 'results') {
    renderQuizResults();
  }
}

function goToPrevQuizStep() {
  clearAutoAdvanceTimer();
  const prev = getPrevQuestionStep(state.quizCurrentIndex);
  state.quizCurrentIndex = prev.quizCurrentIndex;
  state.quizViewMode = prev.quizViewMode;
  clearQuizResultsDom();
  renderQuestionnaireQuestions();
  renderQuizProgressAside();
}

function renderQuizStepperNav(answeredCount) {
  const stepperEl = document.getElementById('quiz-stepper-nav');
  if (!stepperEl) return;

  const steps = getQuestionStepStates(
    state.quizQuestions,
    state.answers,
    state.priorities,
    state.quizCurrentIndex
  );

  const stepButtonsHtml = steps
    .map((step, idx) => {
      const question = state.quizQuestions[idx];
      const topic = getTopicById(question.topicId);
      const topicLabel = topic?.shortTitle || topic?.title || stripLeadingQuestionNumber(question.title);
      const isCurrent = state.quizViewMode === 'question' && step.isCurrent;
      const statusClass =
        step.status === 'answered'
          ? 'is-answered'
          : step.status === 'skipped'
            ? 'is-skipped'
            : '';

      return `
        <button
          type="button"
          class="step-pill-btn ${statusClass} ${isCurrent ? 'is-current' : ''}"
          data-step-index="${idx}"
          aria-current="${isCurrent ? 'step' : 'false'}"
          aria-label="Pregunta ${idx + 1}: ${escapeHtml(topicLabel)}"
          title="${escapeHtml(topicLabel)}"
        >
          ${String(idx + 1).padStart(2, '0')}
        </button>
      `;
    })
    .join('');

  const isResults = state.quizViewMode === 'results';
  stepperEl.innerHTML = `
    ${stepButtonsHtml}
    <button
      type="button"
      class="step-pill-btn step-pill-results ${isResults ? 'is-current' : ''}"
      data-step-results="true"
      aria-current="${isResults ? 'step' : 'false'}"
      ${answeredCount === 0 ? 'disabled' : ''}
    >
      Informe
    </button>
  `;

  stepperEl.querySelectorAll('[data-step-index]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.stepIndex);
      if (!Number.isInteger(idx)) return;
      clearAutoAdvanceTimer();
      state.quizCurrentIndex = Math.max(0, Math.min(idx, state.quizQuestions.length - 1));
      state.quizViewMode = 'question';
      clearQuizResultsDom();
      renderQuestionnaireQuestions();
      renderQuizProgressAside();
    });
  });

  stepperEl.querySelector('[data-step-results]')?.addEventListener('click', () => {
    clearAutoAdvanceTimer();
    state.quizViewMode = 'results';
    renderQuestionnaireQuestions();
    renderQuizProgressAside();
    renderQuizResults();
  });
}

function renderQuestionnaireQuestions() {
  const workbenchEl = document.getElementById('quiz-workbench');
  const questionStageEl = document.getElementById('quiz-question-stage');
  const resultsStageEl = document.getElementById('quiz-results-stage');
  const slotEl = document.getElementById('quiz-active-card-slot');

  if (!workbenchEl || !questionStageEl || !resultsStageEl || !slotEl) return;

  const isResultsMode = state.quizViewMode === 'results';
  workbenchEl.dataset.view = state.quizViewMode;
  questionStageEl.hidden = isResultsMode;
  resultsStageEl.hidden = !isResultsMode;

  const progress = getQuizProgressStats(
    state.quizQuestions,
    state.answers,
    state.priorities
  );
  renderQuizStepperNav(progress.answered);

  if (isResultsMode || state.quizQuestions.length === 0) {
    return;
  }

  const index = Math.max(0, Math.min(state.quizCurrentIndex, state.quizQuestions.length - 1));
  state.quizCurrentIndex = index;
  const question = state.quizQuestions[index];
  const topic = getTopicById(question.topicId);
  const topicLabel = topic?.shortTitle || topic?.title || '';
  const activePriority = state.priorities[question.id] || 'normal';
  const selectedOptionId = state.answers[question.id] || null;
  const isAnswered = Boolean(selectedOptionId) && activePriority !== 'skip';
  const isLast = index === state.quizQuestions.length - 1;

  const priorityHtml = PRIORITY_OPTIONS.map(({ key, label }) => {
    const active = activePriority === key;
    return `
      <button
        type="button"
        class="priority-btn ${active ? 'is-active' : ''}"
        data-question-id="${escapeHtml(question.id)}"
        data-priority="${escapeHtml(key)}"
        aria-pressed="${active ? 'true' : 'false'}"
      >
        ${escapeHtml(label)}
      </button>
    `;
  }).join('');

  const optionsHtml = question.options
    .map((option) => {
      const checked = selectedOptionId === option.id;
      return `
        <label class="quiz-option-label ${checked ? 'is-selected' : ''}">
          <input
            type="radio"
            name="quiz-${escapeHtml(question.id)}"
            value="${escapeHtml(option.id)}"
            data-question-id="${escapeHtml(question.id)}"
            ${checked ? 'checked' : ''}
          />
          <span class="quiz-option-title">${escapeHtml(option.title)}</span>
          <span class="quiz-option-desc">${escapeHtml(option.description)}</span>
        </label>
      `;
    })
    .join('');

  const hasOddOptions = question.options.length % 2 === 1;

  slotEl.innerHTML = `
    <article class="quiz-question-card ${isAnswered ? 'is-answered' : ''}" data-q-card="${escapeHtml(question.id)}">
      <header class="quiz-q-head">
        <span class="quiz-q-num">
          ${String(index + 1).padStart(2, '0')} / ${state.quizQuestions.length} · ${escapeHtml(topicLabel)}
        </span>
        <section class="priority-selector" aria-label="Importancia de la cuestión ${index + 1}">
          ${priorityHtml}
        </section>
      </header>

      <h3 class="quiz-q-title">${escapeHtml(question.questionText)}</h3>
      <p class="quiz-q-context">${escapeHtml(question.contextNote)}</p>

      <fieldset class="quiz-options-fieldset ${hasOddOptions ? 'has-odd-count' : ''}">
        <legend class="sr-only">${escapeHtml(stripLeadingQuestionNumber(question.title))}</legend>
        ${optionsHtml}
      </fieldset>

      <footer class="quiz-nav-dock">
        <div class="quiz-nav-group">
          <button
            id="btn-quiz-prev"
            type="button"
            class="btn-secondary btn-compact"
            ${index === 0 ? 'disabled' : ''}
          >
            Anterior
          </button>
          <button
            id="btn-quiz-skip"
            type="button"
            class="btn-ghost btn-compact"
          >
            Omitir tema
          </button>
        </div>

        <span class="quiz-auto-hint">Al elegir una medida avanza automáticamente</span>

        <button
          id="btn-quiz-next"
          type="button"
          class="btn-primary btn-compact"
        >
          ${isLast ? 'Ver informe final' : 'Siguiente'}
        </button>
      </footer>
    </article>
  `;

  slotEl.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener('change', () => {
      const qId = input.dataset.questionId;
      if (!qId) return;
      state.answers[qId] = input.value;
      if (state.priorities[qId] === 'skip') {
        state.priorities[qId] = 'normal';
      }
      renderQuestionnaireQuestions();
      renderQuizProgressAside();

      clearAutoAdvanceTimer();
      autoAdvanceTimer = window.setTimeout(() => {
        advanceQuizStep();
      }, 280);
    });
  });

  slotEl.querySelectorAll('.priority-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qId = btn.dataset.questionId;
      const priority = btn.dataset.priority || 'normal';
      if (!qId) return;
      clearAutoAdvanceTimer();
      state.priorities[qId] = priority;
      renderQuestionnaireQuestions();
      renderQuizProgressAside();
    });
  });

  slotEl.querySelector('#btn-quiz-prev')?.addEventListener('click', goToPrevQuizStep);

  slotEl.querySelector('#btn-quiz-skip')?.addEventListener('click', () => {
    state.priorities[question.id] = 'skip';
    advanceQuizStep();
  });

  slotEl.querySelector('#btn-quiz-next')?.addEventListener('click', advanceQuizStep);
}

function getAlignmentLabel(weight) {
  if (weight >= 0.85) return 'Alineación directa';
  if (weight >= 0.5) return 'Cercanía parcial';
  if (weight > 0) return 'Coincidencia mínima';
  return 'Discrepancia';
}

function buildRankingRowsHtml(entries, { hasAnswers, selectedPartyId, actionAttr }) {
  return entries
    .map((entry, idx) => {
      const party = getPartyById(entry.partyId);
      if (!party) return '';
      const isSelected = hasAnswers && actionAttr === 'data-inspect-party' && entry.partyId === selectedPartyId;
      const pctLabel = hasAnswers ? `${entry.scorePercentage}%` : '--%';
      const barWidth = hasAnswers ? entry.scorePercentage : 0;

      return `
        <li>
          <button
            type="button"
            class="ranking-row-btn ${isSelected ? 'is-selected' : ''}"
            ${actionAttr}="${escapeHtml(party.id)}"
            aria-pressed="${isSelected ? 'true' : 'false'}"
            style="--party-accent: ${escapeHtml(party.accentColor)};"
          >
            <span class="rank-pos">${String(idx + 1).padStart(2, '0')}</span>
            <span class="rank-party-label">${escapeHtml(party.shortName)} · ${escapeHtml(party.bloc)}</span>
            <span class="rank-score-num">${pctLabel}</span>
            <span class="rank-bar-track">
              <span class="rank-bar-fill" style="width: ${barWidth}%;"></span>
            </span>
          </button>
        </li>
      `;
    })
    .join('');
}

function renderQuizProgressAside() {
  const answeredCountEl = document.getElementById('quiz-answered-count');
  const headlineEl = document.getElementById('quiz-progress-headline');
  const progressBarEl = document.getElementById('quiz-progress-bar');
  const progressFillEl = document.getElementById('quiz-progress-bar-fill');
  const statAnsweredEl = document.getElementById('quiz-stat-answered');
  const statSkippedEl = document.getElementById('quiz-stat-skipped');
  const statPendingEl = document.getElementById('quiz-stat-pending');
  const showResultsBtn = document.getElementById('btn-show-results');

  const stats = getQuizProgressStats(
    state.quizQuestions,
    state.answers,
    state.priorities
  );

  if (answeredCountEl) {
    answeredCountEl.textContent = `${stats.answered} / ${stats.total}`;
  }
  if (progressBarEl) {
    progressBarEl.setAttribute('aria-valuemax', String(stats.total));
    progressBarEl.setAttribute('aria-valuenow', String(stats.resolved));
  }
  if (progressFillEl) {
    progressFillEl.style.width = `${stats.completionPercent}%`;
  }
  if (statAnsweredEl) {
    statAnsweredEl.textContent = String(stats.answered);
  }
  if (statSkippedEl) {
    statSkippedEl.textContent = String(stats.skipped);
  }
  if (statPendingEl) {
    statPendingEl.textContent = String(stats.pending);
  }

  if (headlineEl) {
    if (stats.resolved === stats.total && stats.answered > 0) {
      headlineEl.textContent = 'Cuestionario completado';
    } else if (stats.answered > 0) {
      headlineEl.textContent = 'Respuestas registradas en modo ciego';
    } else {
      headlineEl.textContent = 'Progreso del cuestionario';
    }
  }

  if (showResultsBtn) {
    showResultsBtn.disabled = stats.answered === 0;
    showResultsBtn.textContent =
      stats.pending > 0 && stats.answered > 0
        ? `Finalizar ahora (${stats.answered}/${stats.total})`
        : 'Finalizar y ver informe';
  }
}

function clearQuizResultsDom() {
  const resultsHeadlineEl = document.getElementById('results-headline');
  const resultsProgressEl = document.getElementById('results-progress-caption');
  const metricsEl = document.getElementById('policy-report-metrics');
  const partyGridEl = document.getElementById('policy-report-party-grid');
  const topicsTbodyEl = document.getElementById('policy-report-topics-tbody');
  const rankingEl = document.getElementById('affinity-ranking-list');
  const traceHeadingEl = document.getElementById('trace-party-heading');
  const traceTbodyEl = document.getElementById('affinity-trace-tbody');
  const openTraceBtn = document.getElementById('btn-open-trace-party');

  if (resultsHeadlineEl) resultsHeadlineEl.textContent = 'Ranking de coincidencia';
  if (resultsProgressEl) resultsProgressEl.innerHTML = '';
  if (metricsEl) metricsEl.innerHTML = '';
  if (partyGridEl) partyGridEl.innerHTML = '';
  if (topicsTbodyEl) topicsTbodyEl.innerHTML = '';
  if (rankingEl) rankingEl.innerHTML = '';
  if (traceHeadingEl) traceHeadingEl.textContent = 'Desglose pregunta a pregunta';
  if (traceTbodyEl) traceTbodyEl.innerHTML = '';
  if (openTraceBtn) openTraceBtn.hidden = true;
}

function formatTopicMetaLabel(topicRow) {
  const parts = [];
  if (topicRow.highestPriority === 'high') {
    parts.push('Prioridad alta · x2');
  } else if (topicRow.highestPriority === 'low') {
    parts.push('Prioridad baja · x0,5');
  }
  if (topicRow.questionCount > 1) {
    parts.push(`${topicRow.questionCount} cuestiones`);
  }
  return parts.join(' · ');
}

function renderPolicySimilarityReport(report, selectedPartyId) {
  const reportEl = document.getElementById('quiz-policy-report');
  const metricsEl = document.getElementById('policy-report-metrics');
  const partyGridEl = document.getElementById('policy-report-party-grid');
  const topicsTbodyEl = document.getElementById('policy-report-topics-tbody');
  if (!reportEl || !metricsEl || !partyGridEl || !topicsTbodyEl) return;

  if (!report || report.byTopic.length === 0) {
    reportEl.hidden = true;
    metricsEl.innerHTML = '';
    partyGridEl.innerHTML = '';
    topicsTbodyEl.innerHTML = '';
    return;
  }

  reportEl.hidden = false;

  const highTopicsText =
    report.summaryMetrics.highPriorityTopics.length > 0
      ? report.summaryMetrics.highPriorityTopics.map((t) => t.topicShortTitle).join(', ')
      : 'Ninguno marcado';

  metricsEl.innerHTML = `
    <section>
      <dt>Áreas valoradas</dt>
      <dd class="tabular">${report.summaryMetrics.answeredTopicsCount} / ${TOPICS.length}</dd>
    </section>
    <section>
      <dt>Partidos líderes en algún área</dt>
      <dd class="tabular">${report.summaryMetrics.distinctLeadingPartiesCount}</dd>
    </section>
    <section>
      <dt>Temas de prioridad alta (x2)</dt>
      <dd>${escapeHtml(highTopicsText)}</dd>
    </section>
  `;

  if (report.byParty.length === 0) {
    partyGridEl.innerHTML = `
      <p class="report-empty-note">
        Ningún partido de este bloque presenta coincidencia positiva con tus elecciones actuales.
      </p>
    `;
  } else {
    partyGridEl.innerHTML = report.byParty
      .map((party) => {
        const isSelected = party.partyId === selectedPartyId;
        const strongText =
          party.strongTopics.length > 0
            ? party.strongTopics
                .map((t) => `${t.topicShortTitle} (${t.score}%)`)
                .join(', ')
            : 'Sin coincidencias destacadas';
        const weakText =
          party.weakTopics.length > 0
            ? party.weakTopics
                .map((t) => `${t.topicShortTitle} (${t.score}%)`)
                .join(', ')
            : 'Sin discrepancias marcadas (<50%)';

        return `
          <article
            class="report-party-item ${isSelected ? 'is-selected' : ''}"
            style="--party-accent: ${escapeHtml(party.accentColor)};"
          >
            <header class="report-party-item-head">
              <button
                type="button"
                class="report-party-select-btn"
                data-report-party="${escapeHtml(party.partyId)}"
                aria-pressed="${isSelected ? 'true' : 'false'}"
              >
                <span class="report-party-id">
                  <span class="swatch-dot" aria-hidden="true"></span>
                  <strong>${escapeHtml(party.shortName)}</strong>
                  <span class="report-party-bloc">${escapeHtml(party.bloc)}</span>
                </span>
                <span class="report-party-score-wrap">
                  <strong class="report-party-score tabular">${party.scorePercentage}%</strong>
                  <span class="report-party-direct tabular">${party.exactMatchesCount}/${party.answeredCount} directas</span>
                </span>
              </button>
            </header>
            <p class="report-party-line">
              <strong>Mayor coincidencia:</strong> ${escapeHtml(strongText)}
            </p>
            <p class="report-party-line">
              <strong>Menor coincidencia:</strong> ${escapeHtml(weakText)}
            </p>
          </article>
        `;
      })
      .join('');
  }

  topicsTbodyEl.innerHTML = report.byTopic
    .map((topicRow) => {
      const metaLabel = formatTopicMetaLabel(topicRow);
      const chosenText = topicRow.chosenOptions
        .map((opt) => escapeHtml(opt.selectedOptionTitle))
        .join(' · ');

      const matchesHtml =
        topicRow.topMatches.length === 0
          ? '<span class="report-no-match">Sin coincidencias relevantes en este bloque</span>'
          : `
            <ul class="report-party-matches" role="list">
              ${topicRow.topMatches
                .map(
                  (match) => `
                    <li>
                      <button
                        type="button"
                        class="report-party-link ${match.partyId === selectedPartyId ? 'is-selected' : ''}"
                        data-report-party="${escapeHtml(match.partyId)}"
                        aria-pressed="${match.partyId === selectedPartyId ? 'true' : 'false'}"
                        style="--party-accent: ${escapeHtml(match.accentColor)};"
                      >
                        <span class="swatch-dot" aria-hidden="true"></span>
                        <span>${escapeHtml(match.shortName)}</span>
                        <span class="tabular">${match.topicScore}%</span>
                      </button>
                    </li>
                  `
                )
                .join('')}
              ${
                topicRow.additionalTiedCount > 0
                  ? `<li class="report-tied-more">+${topicRow.additionalTiedCount} más</li>`
                  : ''
              }
            </ul>
          `;

      return `
        <tr>
          <td data-label="Área política">
            <strong>${escapeHtml(topicRow.topicShortTitle)}</strong>
            ${metaLabel ? `<span class="report-topic-meta">${escapeHtml(metaLabel)}</span>` : ''}
          </td>
          <td data-label="Tu elección">${chosenText}</td>
          <td data-label="Partidos más similares">${matchesHtml}</td>
        </tr>
      `;
    })
    .join('');

  reportEl.querySelectorAll('[data-report-party]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.selectedResultPartyId = btn.dataset.reportParty || null;
      renderQuizResults();
      document
        .getElementById('affinity-trace-section')
        ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
}

function renderQuizResults() {
  if (state.quizViewMode !== 'results') return;

  const resultsHeadlineEl = document.getElementById('results-headline');
  const resultsProgressEl = document.getElementById('results-progress-caption');
  const filtersEl = document.getElementById('scoreboard-bloc-filters');
  const rankingEl = document.getElementById('affinity-ranking-list');
  const traceHeadingEl = document.getElementById('trace-party-heading');
  const traceTbodyEl = document.getElementById('affinity-trace-tbody');
  const openTraceBtn = document.getElementById('btn-open-trace-party');

  if (!rankingEl || !traceTbodyEl) return;

  const affinitySummary = calculateCitizenAffinity(
    state.answers,
    state.priorities,
    QUESTIONS,
    PARTIES
  );
  const hasAnswers = affinitySummary.answeredCount > 0;
  const activeAnswered = affinitySummary.answeredCount;

  if (filtersEl) {
    const chips = [
      { key: 'all', label: 'Todos' },
      ...BLOCS.map((bloc) => ({ key: bloc, label: bloc }))
    ];
    filtersEl.innerHTML = chips
      .map(
        ({ key, label }) => `
          <li>
            <button
              type="button"
              class="mini-filter-btn ${state.resultsBlocFilter === key ? 'is-active' : ''}"
              data-res-bloc="${escapeHtml(key)}"
              aria-pressed="${state.resultsBlocFilter === key ? 'true' : 'false'}"
            >
              ${escapeHtml(label)}
            </button>
          </li>
        `
      )
      .join('');

    filtersEl.querySelectorAll('[data-res-bloc]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.resultsBlocFilter = btn.dataset.resBloc || 'all';
        renderQuizResults();
      });
    });
  }

  const visibleRanking = affinitySummary.rankedParties.filter((entry) => {
    if (state.resultsBlocFilter === 'all') return true;
    const party = getPartyById(entry.partyId);
    return party?.bloc === state.resultsBlocFilter;
  });

  if (resultsProgressEl) {
    resultsProgressEl.innerHTML = `
      <strong class="tabular">${activeAnswered} / ${QUESTIONS.length}</strong>
      <span>preguntas valoradas</span>
    `;
  }

  if (!hasAnswers) {
    renderPolicySimilarityReport(null, null);
    if (resultsHeadlineEl) {
      resultsHeadlineEl.textContent = 'Responde al menos una pregunta para calcular tu afinidad';
    }
    rankingEl.innerHTML = buildRankingRowsHtml(visibleRanking.slice(0, 8), {
      hasAnswers: false,
      selectedPartyId: null,
      actionAttr: 'data-open-party'
    });
    rankingEl.querySelectorAll('[data-open-party]').forEach((btn) => {
      btn.addEventListener('click', () => openPartyDrawer(btn.dataset.openParty, btn));
    });

    if (traceHeadingEl) {
      traceHeadingEl.textContent = 'Desglose pregunta a pregunta';
    }
    if (openTraceBtn) {
      openTraceBtn.hidden = true;
    }
    traceTbodyEl.innerHTML = `
      <tr>
        <td colspan="4">Marca al menos una opción en las 15 preguntas para ver el desglose de coincidencia.</td>
      </tr>
    `;
    return;
  }

  const validSelected = visibleRanking.some((e) => e.partyId === state.selectedResultPartyId);
  if (!validSelected) {
    state.selectedResultPartyId = visibleRanking[0]?.partyId || null;
  }

  const report = buildPolicySimilarityReport(affinitySummary, TOPICS, PARTIES, {
    blocFilter: state.resultsBlocFilter
  });
  renderPolicySimilarityReport(report, state.selectedResultPartyId);

  const topEntry = visibleRanking[0];
  const topParty = topEntry ? getPartyById(topEntry.partyId) : null;
  if (resultsHeadlineEl) {
    resultsHeadlineEl.textContent = topParty
      ? `Mayor afinidad: ${topParty.shortName} (${topEntry.scorePercentage}%)`
      : 'Ranking de coincidencia';
  }

  rankingEl.innerHTML = buildRankingRowsHtml(visibleRanking, {
    hasAnswers: true,
    selectedPartyId: state.selectedResultPartyId,
    actionAttr: 'data-inspect-party'
  });

  rankingEl.querySelectorAll('[data-inspect-party]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.selectedResultPartyId = btn.dataset.inspectParty || null;
      renderQuizResults();
    });
  });

  const inspectedParty = getPartyById(state.selectedResultPartyId);
  const inspectedEntry = visibleRanking.find((e) => e.partyId === state.selectedResultPartyId);

  if (traceHeadingEl && inspectedParty && inspectedEntry) {
    traceHeadingEl.textContent = `Contraste con ${inspectedParty.shortName} (${inspectedEntry.scorePercentage}%)`;
  }

  if (openTraceBtn && inspectedParty) {
    openTraceBtn.hidden = false;
    openTraceBtn.textContent = `Abrir programa de ${inspectedParty.shortName} ->`;
    openTraceBtn.onclick = () => openPartyDrawer(inspectedParty.id, openTraceBtn);
  }

  traceTbodyEl.innerHTML = affinitySummary.questionBreakdown
    .map((row) => {
      const topic = getTopicById(row.topicId);
      const weight = Number(row.partyWeights?.[state.selectedResultPartyId] ?? 0);
      const partyProposal = getPartyProgram(state.selectedResultPartyId)?.[row.topicId];
      const alignment = getAlignmentLabel(weight);
      return `
        <tr>
          <td data-label="Tema"><strong>${escapeHtml(topic?.shortTitle || topic?.title || row.topicId)}</strong></td>
          <td data-label="Tu elección">${escapeHtml(row.selectedOptionTitle)}</td>
          <td data-label="Qué propone">${escapeHtml(partyProposal?.headline || '--')}</td>
          <td data-label="Afinidad" class="num">${escapeHtml(alignment)} (${Math.round(weight * 100)}%)</td>
        </tr>
      `;
    })
    .join('');
}

function resetQuizState() {
  clearAutoAdvanceTimer();
  state.quizQuestions = createRandomizedQuiz(QUESTIONS);
  state.answers = {};
  state.priorities = {};
  state.quizCurrentIndex = 0;
  state.quizViewMode = 'question';
  state.selectedResultPartyId = null;
  state.resultsBlocFilter = 'all';
  clearQuizResultsDom();
  renderQuestionnaireQuestions();
  renderQuizProgressAside();
}

function initQuestionnaireControls() {
  document.getElementById('btn-reset-quiz')?.addEventListener('click', resetQuizState);
  document.getElementById('btn-reset-quiz-results')?.addEventListener('click', resetQuizState);

  document.getElementById('btn-show-results')?.addEventListener('click', () => {
    clearAutoAdvanceTimer();
    state.quizViewMode = 'results';
    renderQuestionnaireQuestions();
    renderQuizProgressAside();
    renderQuizResults();
  });

  document.getElementById('btn-back-to-questions')?.addEventListener('click', () => {
    clearAutoAdvanceTimer();
    state.quizViewMode = 'question';
    clearQuizResultsDom();
    renderQuestionnaireQuestions();
    renderQuizProgressAside();
  });

  document.getElementById('quiz-workbench')?.addEventListener('keydown', (event) => {
    if (state.quizViewMode !== 'question') return;
    if (event.target instanceof HTMLElement && event.target.tagName === 'INPUT') {
      return;
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      advanceQuizStep();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToPrevQuizStep();
    }
  });
}

/* =========================================================================
 * SLIDE-OVER PARTY PROFILE & LOCAL PDF DRAWER
 * ========================================================================= */
function renderPartyDrawer() {
  const backdrop = document.getElementById('drawer-backdrop');
  const content = document.getElementById('drawer-content');
  const kicker = document.getElementById('drawer-kicker');
  if (!backdrop || !content) return;

  const party = getPartyById(state.drawerPartyId);
  if (!party) {
    backdrop.classList.remove('is-open');
    return;
  }

  if (kicker) {
    kicker.textContent = `${party.bloc} · ${party.foundedLabel}`;
  }

  const program = getPartyProgram(party.id) || {};
  const safeSiteUrl = sanitizeHttpUrl(party.officialWebsite);
  const safeProgramUrl = sanitizeHttpUrl(party.programUrl);
  const safePdfPath = sanitizeLocalPdfPath(party.localPdfPath);

  const topicChipsHtml = TOPICS.map(
    (topic) => `
      <a class="drawer-topic-chip" href="#drawer-topic-${escapeHtml(topic.id)}">
        ${escapeHtml(topic.shortLabel || topic.title)}
      </a>
    `
  ).join('');

  const docPanelHtml = `
    <section class="drawer-doc-panel" aria-label="Documentación oficial y PDF">
      <span class="kicker">Fuentes oficiales y acceso al documento</span>
      <p><strong>${escapeHtml(party.documentTitle || party.fullName)}</strong> — ${escapeHtml(party.status)}</p>
      <section class="drawer-doc-actions">
        ${
          safePdfPath
            ? `
              <button id="btn-toggle-pdf-viewer" type="button" class="btn-primary btn-compact">
                ${state.drawerShowPdf ? 'Cerrar visor PDF' : 'Leer PDF aquí'}
              </button>
              <a href="${escapeHtml(safePdfPath)}" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-compact">
                Abrir PDF en pestaña
              </a>
            `
            : ''
        }
        ${
          safeProgramUrl
            ? `<a href="${escapeHtml(safeProgramUrl)}" target="_blank" rel="noopener noreferrer" class="btn-ghost btn-compact">Fuente oficial</a>`
            : ''
        }
        ${
          safeSiteUrl
            ? `<a href="${escapeHtml(safeSiteUrl)}" target="_blank" rel="noopener noreferrer" class="btn-ghost btn-compact">Web oficial</a>`
            : ''
        }
      </section>
      ${
        party.localPdfMeta?.note
          ? `<p class="telemetry-detail">${escapeHtml(party.localPdfMeta.note)}</p>`
          : ''
      }
      ${
        safePdfPath && state.drawerShowPdf
          ? `<iframe class="pdf-embed-frame" src="${escapeHtml(safePdfPath)}" title="Documento oficial de ${escapeHtml(party.fullName)}"></iframe>`
          : ''
      }
    </section>
  `;

  const proposalsHtml = TOPICS.map((topic) => {
    const proposal = program[topic.id];
    if (!proposal) return '';

    const measuresHtml = (proposal.measures || [])
      .map((measure) => `<li>${escapeHtml(measure)}</li>`)
      .join('');

    return `
      <article id="drawer-topic-${escapeHtml(topic.id)}" class="drawer-proposal-card">
        <header class="drawer-proposal-head">
          <span class="kicker">${escapeHtml(topic.title)}</span>
          <button
            type="button"
            class="inline-action-btn"
            data-jump-comparator="${escapeHtml(topic.id)}"
            data-party-id="${escapeHtml(party.id)}"
          >
            Llevar al comparador &rarr;
          </button>
        </header>
        <h3>${escapeHtml(proposal.headline)}</h3>
        <p class="comparator-card-summary">${escapeHtml(proposal.summary)}</p>
        <ul class="measures-list">${measuresHtml}</ul>
        ${
          proposal.sourceReference
            ? `<p class="telemetry-detail">Referencia: ${escapeHtml(proposal.sourceReference)}</p>`
            : ''
        }
      </article>
    `;
  }).join('');

  content.innerHTML = `
    <article class="drawer-hero-card" style="--party-accent: ${escapeHtml(party.accentColor)};">
      <header class="party-card-top">
        <strong class="party-abbr">${escapeHtml(party.shortName)}</strong>
        <span class="party-bloc-label">${escapeHtml(party.bloc)}</span>
      </header>
      <h2 id="drawer-party-title">${escapeHtml(party.fullName)}</h2>
      <p class="party-summary-copy">${escapeHtml(party.summary)}</p>
      <dl class="drawer-facts-grid">
        <section>
          <dt>Ideología</dt>
          <dd>${escapeHtml(party.ideology)}</dd>
        </section>
        <section>
          <dt>Fundación</dt>
          <dd>${escapeHtml(party.foundedLabel)}</dd>
        </section>
        <section>
          <dt>Liderazgo / referencia</dt>
          <dd>${escapeHtml(party.leader)}</dd>
        </section>
      </dl>
    </article>

    ${docPanelHtml}

    <nav class="drawer-topic-nav" aria-label="Índice por áreas dentro del programa">
      ${topicChipsHtml}
    </nav>

    <section class="drawer-proposals-list">
      ${proposalsHtml}
    </section>
  `;

  backdrop.classList.add('is-open');

  content.querySelector('#btn-toggle-pdf-viewer')?.addEventListener('click', () => {
    state.drawerShowPdf = !state.drawerShowPdf;
    renderPartyDrawer();
  });

  content.querySelectorAll('[data-jump-comparator]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const topicId = btn.dataset.jumpComparator;
      const pId = btn.dataset.partyId;
      if (topicId && getTopicById(topicId)) {
        state.comparatorTopicId = topicId;
      }
      if (pId && !state.comparatorPartyIds.includes(pId)) {
        state.comparatorPartyIds = [...state.comparatorPartyIds, pId];
      }
      closePartyDrawer();
      renderComparatorWorkbench();
      document.getElementById('comparador')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function openPartyDrawer(partyId, triggerEl = null) {
  if (!getPartyById(partyId)) return;
  state.lastFocusedTrigger = triggerEl || document.activeElement;
  state.drawerPartyId = partyId;
  state.drawerShowPdf = false;
  renderPartyDrawer();

  const drawer = document.getElementById('party-drawer');
  if (drawer) {
    drawer.scrollTop = 0;
    drawer.focus();
  }
}

function closePartyDrawer() {
  state.drawerPartyId = null;
  state.drawerShowPdf = false;
  const backdrop = document.getElementById('drawer-backdrop');
  const content = document.getElementById('drawer-content');
  backdrop?.classList.remove('is-open');
  if (content) {
    // Unmount active DOM nodes (including any PDF iframe) so compositor layers clear on close.
    content.innerHTML = '';
  }

  if (window.location.hash.startsWith('#perfil/')) {
    window.history.replaceState(null, '', '#partidos');
  }

  if (state.lastFocusedTrigger && typeof state.lastFocusedTrigger.focus === 'function') {
    state.lastFocusedTrigger.focus();
  }
  state.lastFocusedTrigger = null;
}

function initDrawerControls() {
  const backdrop = document.getElementById('drawer-backdrop');
  const closeBtn = document.getElementById('btn-close-drawer');

  closeBtn?.addEventListener('click', closePartyDrawer);
  backdrop?.addEventListener('click', (event) => {
    if (event.target === backdrop) {
      closePartyDrawer();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && state.drawerPartyId) {
      closePartyDrawer();
    }
  });
}

/* =========================================================================
 * DEEP LINK HASH SUPPORT & INITIALIZATION
 * ========================================================================= */
function handleDeepLinkHash() {
  const rawHash = window.location.hash.replace(/^#/, '');
  if (!rawHash) return;

  const parts = rawHash.split('/').filter(Boolean);
  if (parts[0] === 'perfil' && parts[1]) {
    const resolvedId = resolvePartyId(parts[1]);
    if (getPartyById(resolvedId)) {
      openPartyDrawer(resolvedId);
    }
    return;
  }

  if (parts[0] === 'comparador' && parts[1] && getTopicById(parts[1])) {
    state.comparatorTopicId = parts[1];
    renderComparatorWorkbench();
    document.getElementById('comparador')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function initApp() {
  initPaletteControls();
  renderBlocFilters();
  renderPartiesDirectory();
  initComparatorControls();
  renderComparatorWorkbench();
  initQuestionnaireControls();
  renderQuestionnaireQuestions();
  renderQuizProgressAside();
  initDrawerControls();
  initScrollProgress();

  const searchInput = document.getElementById('party-search-input');
  searchInput?.addEventListener('input', () => {
    state.searchQuery = searchInput.value;
    renderPartiesDirectory();
  });

  window.addEventListener('hashchange', handleDeepLinkHash);
  handleDeepLinkHash();
}

initApp();
