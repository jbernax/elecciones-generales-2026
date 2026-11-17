/**
 * Elecciones Generales España 2026 — Unified Flagship & Interactive Workbench Controller
 */

import { BLOCS, PARTIES, getPartyById } from './data/parties.js';
import { TOPICS, getTopicById } from './data/topics.js';
import { PROGRAMS, getPartyProgram } from './data/programs.js';
import { QUESTIONS } from './data/questionnaire.js';
import { SPAIN_FISCAL_STATUS } from './data/macroContext.js';
import {
  filterParties,
  buildTopicComparison,
  calculateCitizenAffinity
} from './engine/affinityEngine.js';

const PRESET_PARTIES = {
  principales: ['psoe', 'pp', 'vox', 'sumar', 'podemos'],
  'izquierda-centro': ['sumar', 'podemos', 'iu', 'pce', 'psoe', 'cs', 'upyd'],
  'derecha-otros': ['pp', 'ucd', 'vox', 'salf', 'nn', 'fe_jons', 'pacma', 'd21', 'iustitia', 'fo'],
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
  answers: {},
  priorities: {},
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
 * STAGE 1: HERO FISCAL TELEMETRY
 * ========================================================================= */
function renderHeroMacroTelemetry() {
  const kickerEl = document.getElementById('hero-fiscal-kicker');
  const headingEl = document.getElementById('hero-fiscal-heading');
  const metaEl = document.getElementById('hero-macro-meta');
  const noteEl = document.getElementById('hero-macro-note');

  if (kickerEl) {
    kickerEl.textContent = SPAIN_FISCAL_STATUS.updatedLabel;
  }
  if (headingEl) {
    headingEl.textContent = SPAIN_FISCAL_STATUS.title;
  }
  if (metaEl) {
    metaEl.innerHTML = SPAIN_FISCAL_STATUS.metrics
      .map(
        (metric) => `
          <section class="telemetry-metric-item">
            <dt>${escapeHtml(metric.label)}</dt>
            <dd>
              ${escapeHtml(metric.value)}
              <span class="telemetry-detail">${escapeHtml(metric.detail)}</span>
            </dd>
          </section>
        `
      )
      .join('');
  }
  if (noteEl) {
    noteEl.textContent = SPAIN_FISCAL_STATUS.sourcesNote;
  }
}

/* =========================================================================
 * STAGE 2: ASYMMETRIC BENTO DIRECTORY
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
    counterEl.textContent = `${filtered.length} de ${PARTIES.length} formaciones`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <article class="empty-state-panel">
        <h3>Sin coincidencias exactas</h3>
        <p>Pruebe otro término de búsqueda o restablezca el filtro de bloque ideológico.</p>
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
            <h3 class="party-official-name">${escapeHtml(party.shortName)} — ${escapeHtml(party.fullName)}</h3>
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
function renderFiscalBreakout() {
  const breakout = document.getElementById('workbench-fiscal-breakout');
  if (!breakout) return;

  const showFiscal =
    state.comparatorTopicId === 'economia' || state.comparatorTopicId === 'pensiones';
  if (!showFiscal) {
    breakout.innerHTML = '';
    return;
  }

  breakout.innerHTML = `
    <figcaption class="kicker">${escapeHtml(SPAIN_FISCAL_STATUS.title)} · ${escapeHtml(SPAIN_FISCAL_STATUS.updatedLabel)}</figcaption>
    <dl class="breakout-grid">
      ${SPAIN_FISCAL_STATUS.metrics
        .map(
          (m) => `
            <section class="breakout-item">
              <dt>${escapeHtml(m.label)}</dt>
              <dd>${escapeHtml(m.value)}</dd>
            </section>
          `
        )
        .join('')}
    </dl>
    <p class="breakout-caption">${escapeHtml(SPAIN_FISCAL_STATUS.subtitle)}</p>
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
    <span class="kicker">Área activa · ${selectedSet.size} formaciones comparadas</span>
    <h3>${escapeHtml(activeTopic.title)}</h3>
    <p>${escapeHtml(activeTopic.description)}</p>
  `;

  renderFiscalBreakout();

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
            <th>Formación</th>
            <th>Bloque</th>
            <th>Eje programático</th>
            <th>Medidas principales</th>
            <th>Dosier</th>
          </tr>
        </thead>
        <tbody>
          ${items
            .map(({ party, proposal }) => {
              if (!proposal) return '';
              return `
                <tr>
                  <td data-label="Formación"><strong>${escapeHtml(party.shortName)}</strong></td>
                  <td data-label="Bloque">${escapeHtml(party.bloc)}</td>
                  <td data-label="Eje programático">${escapeHtml(proposal.headline)}</td>
                  <td data-label="Medidas principales">${escapeHtml((proposal.measures || []).slice(0, 2).join(' · '))}</td>
                  <td data-label="Dosier">
                    <button
                      type="button"
                      class="inline-action-btn"
                      data-open-party="${escapeHtml(party.id)}"
                    >
                      Perfil &rarr;
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
 * STAGE 4: SCROLLYTELLING LIVE QUESTIONNAIRE (#cuestionario)
 * ========================================================================= */
function renderQuestionnaireQuestions() {
  const listEl = document.getElementById('scrolly-questions-list');
  if (!listEl) return;

  listEl.innerHTML = QUESTIONS.map((question, index) => {
    const topic = getTopicById(question.topicId);
    const activePriority = state.priorities[question.id] || 'normal';
    const selectedOptionId = state.answers[question.id] || null;
    const isAnswered = Boolean(selectedOptionId) && activePriority !== 'skip';

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

    return `
      <li>
        <article class="quiz-question-card ${isAnswered ? 'is-answered' : ''}" data-q-card="${escapeHtml(question.id)}">
          <header class="quiz-q-head">
            <span class="quiz-q-num">
              ${String(index + 1).padStart(2, '0')} / ${QUESTIONS.length} · ${escapeHtml(topic?.shortLabel || topic?.title || '')}
            </span>
            <section class="priority-selector" aria-label="Importancia de la cuestión ${index + 1}">
              ${priorityHtml}
            </section>
          </header>

          <h3 class="quiz-q-title">${escapeHtml(question.questionText)}</h3>
          <p class="quiz-q-context">${escapeHtml(question.contextNote)}</p>

          <fieldset class="quiz-options-fieldset">
            <legend class="sr-only">${escapeHtml(question.title)}</legend>
            ${optionsHtml}
          </fieldset>
        </article>
      </li>
    `;
  }).join('');

  listEl.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener('change', () => {
      const qId = input.dataset.questionId;
      if (!qId) return;
      state.answers[qId] = input.value;
      if (state.priorities[qId] === 'skip') {
        state.priorities[qId] = 'normal';
      }
      renderQuestionnaireQuestions();
      renderLiveScoreboard();
    });
  });

  listEl.querySelectorAll('.priority-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qId = btn.dataset.questionId;
      const priority = btn.dataset.priority || 'normal';
      if (!qId) return;
      state.priorities[qId] = priority;
      renderQuestionnaireQuestions();
      renderLiveScoreboard();
    });
  });
}

function getAlignmentLabel(weight) {
  if (weight >= 0.85) return 'Alineación directa';
  if (weight >= 0.5) return 'Cercanía parcial';
  if (weight > 0) return 'Coincidencia mínima';
  return 'Discrepancia';
}

function renderLiveScoreboard() {
  const answeredCountEl = document.getElementById('quiz-answered-count');
  const headlineEl = document.getElementById('scoreboard-headline');
  const filtersEl = document.getElementById('scoreboard-bloc-filters');
  const rankingEl = document.getElementById('affinity-ranking-list');
  const traceHeadingEl = document.getElementById('trace-party-heading');
  const traceTbodyEl = document.getElementById('affinity-trace-tbody');
  const openTraceBtn = document.getElementById('btn-open-trace-party');

  if (!rankingEl || !traceTbodyEl) return;

  const activeAnswered = QUESTIONS.filter(
    (q) => state.answers[q.id] && (state.priorities[q.id] || 'normal') !== 'skip'
  ).length;

  if (answeredCountEl) {
    answeredCountEl.textContent = `${activeAnswered} / ${QUESTIONS.length}`;
  }

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
        renderLiveScoreboard();
      });
    });
  }

  const affinitySummary = calculateCitizenAffinity(
    state.answers,
    state.priorities,
    QUESTIONS,
    PARTIES
  );

  const visibleRanking = affinitySummary.rankedParties.filter((entry) => {
    if (state.resultsBlocFilter === 'all') return true;
    const party = getPartyById(entry.partyId);
    return party?.bloc === state.resultsBlocFilter;
  });

  if (affinitySummary.answeredCount === 0) {
    if (headlineEl) {
      headlineEl.textContent = 'Seleccione respuestas para calcular';
    }
    rankingEl.innerHTML = visibleRanking
      .slice(0, 8)
      .map((entry, idx) => {
        const party = getPartyById(entry.partyId);
        if (!party) return '';
        return `
          <li>
            <button
              type="button"
              class="ranking-row-btn"
              data-open-party="${escapeHtml(party.id)}"
            >
              <span class="rank-pos">${String(idx + 1).padStart(2, '0')}</span>
              <span class="rank-party-label">${escapeHtml(party.shortName)} · ${escapeHtml(party.bloc)}</span>
              <span class="rank-score-num">--%</span>
              <span class="rank-bar-track"><span class="rank-bar-fill" style="width: 0%;"></span></span>
            </button>
          </li>
        `;
      })
      .join('');

    rankingEl.querySelectorAll('[data-open-party]').forEach((btn) => {
      btn.addEventListener('click', () => openPartyDrawer(btn.dataset.openParty, btn));
    });

    if (traceHeadingEl) {
      traceHeadingEl.textContent = 'Contraste punto por punto';
    }
    if (openTraceBtn) {
      openTraceBtn.hidden = true;
    }
    traceTbodyEl.innerHTML = `
      <tr>
        <td colspan="4">Marque al menos una medida en las 15 cuestiones para obtener el desglose programático detallado.</td>
      </tr>
    `;
    return;
  }

  const validSelected = visibleRanking.some((e) => e.partyId === state.selectedResultPartyId);
  if (!validSelected) {
    state.selectedResultPartyId = visibleRanking[0]?.partyId || null;
  }

  const topEntry = visibleRanking[0];
  const topParty = topEntry ? getPartyById(topEntry.partyId) : null;
  if (headlineEl) {
    headlineEl.textContent = topParty
      ? `Mayor afinidad actual: ${topParty.shortName} (${topEntry.scorePercentage}%)`
      : 'Clasificación programática';
  }

  rankingEl.innerHTML = visibleRanking
    .map((entry, index) => {
      const party = getPartyById(entry.partyId);
      if (!party) return '';
      const isSelected = entry.partyId === state.selectedResultPartyId;
      return `
        <li>
          <button
            type="button"
            class="ranking-row-btn ${isSelected ? 'is-selected' : ''}"
            data-inspect-party="${escapeHtml(party.id)}"
            aria-pressed="${isSelected ? 'true' : 'false'}"
            style="--party-accent: ${escapeHtml(party.accentColor)};"
          >
            <span class="rank-pos">${String(index + 1).padStart(2, '0')}</span>
            <span class="rank-party-label">${escapeHtml(party.shortName)} · ${escapeHtml(party.bloc)}</span>
            <span class="rank-score-num">${entry.scorePercentage}%</span>
            <span class="rank-bar-track">
              <span class="rank-bar-fill" style="width: ${entry.scorePercentage}%;"></span>
            </span>
          </button>
        </li>
      `;
    })
    .join('');

  rankingEl.querySelectorAll('[data-inspect-party]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.selectedResultPartyId = btn.dataset.inspectParty || null;
      renderLiveScoreboard();
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
          <td data-label="Tema"><strong>${escapeHtml(topic?.shortLabel || topic?.title || row.topicId)}</strong></td>
          <td data-label="Su elección">${escapeHtml(row.selectedOptionTitle)}</td>
          <td data-label="Posición del partido">${escapeHtml(partyProposal?.headline || '--')}</td>
          <td data-label="Afinidad" class="num">${escapeHtml(alignment)} (${Math.round(weight * 100)}%)</td>
        </tr>
      `;
    })
    .join('');
}

function initQuestionnaireControls() {
  document.getElementById('btn-reset-quiz')?.addEventListener('click', () => {
    state.answers = {};
    state.priorities = {};
    state.selectedResultPartyId = null;
    state.resultsBlocFilter = 'all';
    renderQuestionnaireQuestions();
    renderLiveScoreboard();
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
                ${state.drawerShowPdf ? 'Ocultar visor PDF integrado' : 'Abrir PDF local integrado'}
              </button>
              <a href="${escapeHtml(safePdfPath)}" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-compact">
                Abrir PDF en pestaña
              </a>
            `
            : ''
        }
        ${
          safeProgramUrl
            ? `<a href="${escapeHtml(safeProgramUrl)}" target="_blank" rel="noopener noreferrer" class="btn-ghost btn-compact">Fuente web oficial</a>`
            : ''
        }
        ${
          safeSiteUrl
            ? `<a href="${escapeHtml(safeSiteUrl)}" target="_blank" rel="noopener noreferrer" class="btn-ghost btn-compact">Web de la formación</a>`
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
            Comparar en matriz &rarr;
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
    window.history.replaceState(null, '', '#formaciones');
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
  if (parts[0] === 'perfil' && parts[1] && getPartyById(parts[1])) {
    openPartyDrawer(parts[1]);
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
  renderHeroMacroTelemetry();
  renderBlocFilters();
  renderPartiesDirectory();
  initComparatorControls();
  renderComparatorWorkbench();
  initQuestionnaireControls();
  renderQuestionnaireQuestions();
  renderLiveScoreboard();
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
