/**
 * Client-side controller and router for Elecciones Generales Espana 2026.
 * Connects static data modules and the affinity engine to the semantic DOM views.
 */

import { BLOCS, PARTIES, getPartyById } from './data/parties.js';
import { TOPICS, getTopicById } from './data/topics.js';
import { PROGRAMS, getPartyProgram, getProposal } from './data/programs.js';
import { QUESTIONS } from './data/questionnaire.js';
import {
  calculateCitizenAffinity,
  filterParties,
  buildTopicComparison
} from './engine/affinityEngine.js';

const state = {
  route: 'partidos',
  profilePartyId: null,
  activeBloc: 'all',
  searchQuery: '',
  comparatorTopicId: TOPICS[0].id,
  comparatorPartyIds: PARTIES.map((p) => p.id),
  answers: {},
  priorities: {},
  lastAffinitySummary: null,
  selectedResultPartyId: null,
  resultsBlocFilter: 'all'
};

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function safeExternalUrl(rawUrl) {
  try {
    const parsed = new URL(rawUrl);
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
      return parsed.href;
    }
  } catch {
    return '#partidos';
  }
  return '#partidos';
}

function safeLocalPdfPath(rawPath) {
  if (typeof rawPath !== 'string') return null;
  return /^\.\/pdfs\/[a-z0-9._-]+\.pdf$/i.test(rawPath) ? rawPath : null;
}

function showView(viewId) {
  const sections = ['view-parties', 'view-profile', 'view-comparator', 'view-questionnaire'];
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el) {
      el.classList.toggle('hidden', id !== viewId);
    }
  }

  const navButtons = document.querySelectorAll('.nav-btn');
  const activeRoute = state.route === 'perfil' ? 'partidos' : state.route;
  navButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.route === activeRoute);
  });
}

function navigateTo(hash) {
  if (window.location.hash !== hash) {
    window.location.hash = hash;
  } else {
    handleRouteChange();
  }
}

function handleRouteChange() {
  const rawHash = window.location.hash.replace(/^#/, '');
  const parts = rawHash.split('/').filter(Boolean);
  const baseRoute = parts[0] || 'partidos';

  if (baseRoute === 'perfil' && parts[1] && getPartyById(parts[1])) {
    state.route = 'perfil';
    state.profilePartyId = parts[1];
    showView('view-profile');
    renderPartyProfile(parts[1]);
    window.scrollTo({ top: 0, behavior: 'auto' });
    return;
  }

  if (baseRoute === 'comparador') {
    if (parts[1] && getTopicById(parts[1])) {
      state.comparatorTopicId = parts[1];
    }
    state.route = 'comparador';
    showView('view-comparator');
    renderComparatorView();
    window.scrollTo({ top: 0, behavior: 'auto' });
    return;
  }

  if (baseRoute === 'cuestionario') {
    state.route = 'cuestionario';
    showView('view-questionnaire');
    renderQuestionnaireView();
    window.scrollTo({ top: 0, behavior: 'auto' });
    return;
  }

  state.route = 'partidos';
  showView('view-parties');
  renderPartiesDirectory();
}

/* =========================================================================
 * VIEW 1: PARTY DIRECTORY
 * ========================================================================= */
function renderBlocFilters() {
  const container = document.getElementById('bloc-filter-bar');
  if (!container) return;

  const counts = PARTIES.reduce((acc, party) => {
    acc[party.bloc] = (acc[party.bloc] || 0) + 1;
    return acc;
  }, {});

  const filterItems = [
    { id: 'all', label: `Todos (${PARTIES.length})` },
    ...BLOCS.map((bloc) => ({ id: bloc, label: `${bloc} (${counts[bloc] || 0})` }))
  ];

  container.innerHTML = filterItems
    .map(
      (item) => `
      <button
        type="button"
        class="filter-pill ${state.activeBloc === item.id ? 'active' : ''}"
        data-bloc="${escapeHtml(item.id)}"
      >
        ${escapeHtml(item.label)}
      </button>
    `
    )
    .join('');

  container.querySelectorAll('.filter-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.activeBloc = btn.dataset.bloc || 'all';
      renderPartiesDirectory();
    });
  });
}

function renderPartiesDirectory() {
  renderBlocFilters();

  const filtered = filterParties(PARTIES, PROGRAMS, {
    bloc: state.activeBloc,
    query: state.searchQuery
  });

  const countEl = document.getElementById('parties-count-label');
  if (countEl) {
    const scopeLabel =
      state.activeBloc === 'all' ? 'todos los bloques' : `el bloque ${state.activeBloc}`;
    countEl.textContent = `Mostrando ${filtered.length} de ${PARTIES.length} formaciones (${scopeLabel})`;
  }

  const grid = document.getElementById('parties-grid');
  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        No se han encontrado partidos o medidas que coincidan con «${escapeHtml(state.searchQuery)}».
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map((party) => {
      const hasLocalPdf = Boolean(safeLocalPdfPath(party.localPdfPath));
      return `
      <article class="party-card" style="--party-accent: ${escapeHtml(party.accentColor)};">
        <div>
          <div class="party-card-top">
            <span class="party-short-name">${escapeHtml(party.shortName)}</span>
            <span class="bloc-badge">${escapeHtml(party.bloc)}</span>
          </div>
          <h2 class="party-full-name">${escapeHtml(party.fullName)}</h2>
          <p class="party-ideology-meta">
            ${escapeHtml(party.ideology)} · ${escapeHtml(party.foundedLabel)}
          </p>
        </div>
        <div class="party-card-footer">
          <a
            href="#perfil/${escapeHtml(party.id)}"
            class="profile-link"
            data-party-id="${escapeHtml(party.id)}"
          >
            Ver perfil &rarr;
          </a>
          ${hasLocalPdf ? '<span class="pdf-local-tag">PDF local</span>' : ''}
        </div>
      </article>
    `;
    })
    .join('');
}

/* =========================================================================
 * VIEW 2: MONOGRAPHIC PARTY PROFILE
 * ========================================================================= */
function renderPartyProfile(partyId) {
  const party = getPartyById(partyId);
  const program = getPartyProgram(partyId);
  const container = document.getElementById('party-profile-container');
  if (!party || !program || !container) return;

  const websiteHref = safeExternalUrl(party.officialWebsite);
  const programHref = safeExternalUrl(party.programUrl);
  const localPdfHref = safeLocalPdfPath(party.localPdfPath);

  const tocHtml = TOPICS.map(
    (topic, idx) => `
      <a href="#perfil-${escapeHtml(party.id)}-${escapeHtml(topic.id)}" class="toc-link" data-jump-topic="${escapeHtml(topic.id)}">
        ${idx + 1}. ${escapeHtml(topic.shortTitle)}
      </a>
    `
  ).join('');

  const topicsHtml = TOPICS.map((topic, idx) => {
    const proposal = getProposal(party.id, topic.id);
    if (!proposal) return '';

    const measuresHtml = proposal.measures
      .map((measure) => `<li>${escapeHtml(measure)}</li>`)
      .join('');

    return `
      <article
        class="program-topic-card"
        id="topic-section-${escapeHtml(topic.id)}"
      >
        <div class="program-topic-header">
          <div>
            <span class="program-topic-kicker">${idx + 1}. ${escapeHtml(topic.title)}</span>
            <h2 class="program-topic-headline">${escapeHtml(proposal.headline)}</h2>
          </div>
          <button
            type="button"
            class="btn btn-subtle btn-sm btn-compare-topic"
            data-topic-id="${escapeHtml(topic.id)}"
          >
            Comparar este tema &rarr;
          </button>
        </div>

        <p class="program-topic-summary">${escapeHtml(proposal.summary)}</p>

        <div class="measures-heading">Medidas programáticas concretas</div>
        <ul class="measures-list">
          ${measuresHtml}
        </ul>

        <div class="source-ref">
          Fuente documental: ${escapeHtml(proposal.sourceRef)}
        </div>
      </article>
    `;
  }).join('');

  container.innerHTML = `
    <div class="profile-nav-bar">
      <button type="button" class="btn btn-subtle btn-sm" id="btn-back-directory">
        &larr; Volver al directorio de partidos
      </button>
      <button type="button" class="btn btn-secondary btn-sm" id="btn-profile-open-comparator">
        Abrir comparador temático &rarr;
      </button>
    </div>

    <header class="profile-header-card" style="--party-accent: ${escapeHtml(party.accentColor)};">
      <div class="profile-meta-row">
        <span class="profile-short-tag">${escapeHtml(party.shortName)}</span>
        <span class="bloc-badge">${escapeHtml(party.bloc)}</span>
        <span class="bloc-badge">${escapeHtml(party.foundedLabel)}</span>
      </div>

      <h1 class="profile-title">${escapeHtml(party.fullName)}</h1>
      <p class="profile-subtitle">${escapeHtml(party.ideology)}</p>

      <div class="profile-facts">
        <div>
          <span class="fact-label">Referente / Liderazgo</span>
          <span class="fact-value">${escapeHtml(party.leader)}</span>
        </div>
        <div>
          <span class="fact-label">Situación en 2026</span>
          <span class="fact-value">${escapeHtml(party.status)}</span>
        </div>
        <div>
          <span class="fact-label">Documento de referencia</span>
          <span class="fact-value">${escapeHtml(party.documentTitle)}</span>
        </div>
      </div>

      <p class="profile-summary">${escapeHtml(party.summary)}</p>

      <div class="pdf-status-note">
        ${escapeHtml(party.localPdfMeta || '')}
      </div>

      <div class="profile-links-row">
        ${
          localPdfHref
            ? `
          <button type="button" class="btn btn-primary btn-sm" id="btn-toggle-pdf-viewer">
            Leer PDF integrado aquí
          </button>
          <a
            href="${escapeHtml(localPdfHref)}"
            target="_blank"
            rel="noopener"
            class="btn btn-secondary btn-sm"
          >
            Abrir PDF local
          </a>
          <a
            href="${escapeHtml(localPdfHref)}"
            download
            class="btn btn-secondary btn-sm"
          >
            Descargar PDF
          </a>
          <a
            href="${escapeHtml(websiteHref)}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-subtle btn-sm"
          >
            Web oficial
          </a>
        `
            : `
          <a
            href="${escapeHtml(programHref)}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary btn-sm"
          >
            Consultar documento oficial (externo)
          </a>
          <a
            href="${escapeHtml(websiteHref)}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-secondary btn-sm"
          >
            Web de la formación
          </a>
        `
        }
      </div>

      ${
        localPdfHref
          ? '<div id="pdf-viewer-panel" class="pdf-viewer-panel hidden"></div>'
          : ''
      }
    </header>

    <nav class="profile-toc" aria-label="Índice temático del programa">
      <div class="profile-toc-title">Índice por áreas temáticas (${TOPICS.length} bloques)</div>
      <div class="profile-toc-links">${tocHtml}</div>
    </nav>

    <div class="profile-topics-list">
      ${topicsHtml}
    </div>
  `;

  document.getElementById('btn-back-directory')?.addEventListener('click', () => {
    navigateTo('#partidos');
  });

  document.getElementById('btn-profile-open-comparator')?.addEventListener('click', () => {
    navigateTo(`#comparador/${TOPICS[0].id}`);
  });

  const togglePdfBtn = document.getElementById('btn-toggle-pdf-viewer');
  const pdfPanel = document.getElementById('pdf-viewer-panel');
  if (togglePdfBtn && pdfPanel && localPdfHref) {
    togglePdfBtn.addEventListener('click', () => {
      const isHidden = pdfPanel.classList.contains('hidden');
      if (isHidden) {
        if (!pdfPanel.querySelector('iframe')) {
          pdfPanel.innerHTML = `
            <iframe
              class="pdf-embed-frame"
              src="${escapeHtml(localPdfHref)}"
              title="Programa electoral en PDF de ${escapeHtml(party.fullName)}"
            ></iframe>
          `;
        }
        pdfPanel.classList.remove('hidden');
        togglePdfBtn.textContent = 'Ocultar visor PDF';
      } else {
        pdfPanel.classList.add('hidden');
        togglePdfBtn.textContent = 'Leer PDF integrado aquí';
      }
    });
  }

  container.querySelectorAll('.toc-link').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = `topic-section-${link.dataset.jumpTopic}`;
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  container.querySelectorAll('.btn-compare-topic').forEach((btn) => {
    btn.addEventListener('click', () => {
      navigateTo(`#comparador/${btn.dataset.topicId}`);
    });
  });
}

/* =========================================================================
 * VIEW 3: SIDE-BY-SIDE TOPIC COMPARATOR
 * ========================================================================= */
function renderComparatorView() {
  const topicsBar = document.getElementById('comparator-topics-bar');
  const quickActions = document.getElementById('comparator-quick-actions');
  const partiesBar = document.getElementById('comparator-parties-bar');
  const banner = document.getElementById('comparator-topic-banner');
  const grid = document.getElementById('comparator-grid');

  if (!topicsBar || !quickActions || !partiesBar || !banner || !grid) return;

  topicsBar.innerHTML = TOPICS.map(
    (topic) => `
      <button
        type="button"
        class="filter-pill ${state.comparatorTopicId === topic.id ? 'active' : ''}"
        data-topic-id="${escapeHtml(topic.id)}"
      >
        ${escapeHtml(topic.shortTitle)}
      </button>
    `
  ).join('');

  topicsBar.querySelectorAll('.filter-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.comparatorTopicId = btn.dataset.topicId || TOPICS[0].id;
      renderComparatorView();
    });
  });

  quickActions.innerHTML = `
    <button type="button" class="btn btn-subtle btn-sm" data-preset="all">Todos (17)</button>
    ${BLOCS.map(
      (bloc) => `
      <button type="button" class="btn btn-subtle btn-sm" data-preset="${escapeHtml(bloc)}">
        ${escapeHtml(bloc)}
      </button>
    `
    ).join('')}
  `;

  quickActions.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const preset = btn.dataset.preset;
      if (preset === 'all') {
        state.comparatorPartyIds = PARTIES.map((p) => p.id);
      } else {
        state.comparatorPartyIds = PARTIES.filter((p) => p.bloc === preset).map((p) => p.id);
      }
      renderComparatorView();
    });
  });

  const selectedSet = new Set(state.comparatorPartyIds);
  partiesBar.innerHTML = PARTIES.map((party) => {
    const isSelected = selectedSet.has(party.id);
    return `
      <button
        type="button"
        class="party-toggle-btn ${isSelected ? 'selected' : ''}"
        data-party-id="${escapeHtml(party.id)}"
        aria-pressed="${isSelected ? 'true' : 'false'}"
      >
        <span class="party-swatch" style="background-color: ${escapeHtml(party.accentColor)};"></span>
        <span>${escapeHtml(party.shortName)}</span>
      </button>
    `;
  }).join('');

  partiesBar.querySelectorAll('.party-toggle-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const partyId = btn.dataset.partyId;
      if (!partyId) return;

      if (selectedSet.has(partyId)) {
        if (state.comparatorPartyIds.length > 1) {
          state.comparatorPartyIds = state.comparatorPartyIds.filter((id) => id !== partyId);
        }
      } else {
        state.comparatorPartyIds = [...state.comparatorPartyIds, partyId];
      }
      renderComparatorView();
    });
  });

  const currentTopic = getTopicById(state.comparatorTopicId) || TOPICS[0];
  banner.innerHTML = `
    <h2 class="topic-banner-title">${escapeHtml(currentTopic.title)}</h2>
    <p class="topic-banner-desc">${escapeHtml(currentTopic.description)}</p>
  `;

  const comparisonItems = buildTopicComparison(
    currentTopic.id,
    state.comparatorPartyIds,
    PARTIES,
    PROGRAMS
  );

  grid.innerHTML = comparisonItems
    .map(({ party, proposal }) => {
      if (!proposal) return '';

      const measuresHtml = proposal.measures
        .map((m) => `<li>${escapeHtml(m)}</li>`)
        .join('');

      return `
        <article class="comparator-card" style="--party-accent: ${escapeHtml(party.accentColor)};">
          <div class="comparator-card-head">
            <div>
              <div class="party-short-name">${escapeHtml(party.shortName)}</div>
              <div class="party-ideology-meta">${escapeHtml(party.fullName)}</div>
            </div>
            <span class="bloc-badge">${escapeHtml(party.bloc)}</span>
          </div>

          <h3 class="comparator-card-headline">${escapeHtml(proposal.headline)}</h3>
          <p class="comparator-card-summary">${escapeHtml(proposal.summary)}</p>

          <ul class="measures-list">
            ${measuresHtml}
          </ul>

          <div class="comparator-card-foot">
            <span class="source-ref" style="border-top: none; padding-top: 0;">
              ${escapeHtml(party.foundedLabel)}
            </span>
            <a href="#perfil/${escapeHtml(party.id)}" class="profile-link">
              Ver perfil &rarr;
            </a>
          </div>
        </article>
      `;
    })
    .join('');
}

/* =========================================================================
 * VIEW 4: CONCRETE POLICY QUESTIONNAIRE
 * ========================================================================= */
function updateQuizCounter() {
  const answeredEl = document.getElementById('quiz-answered-count');
  if (!answeredEl) return;

  const activeAnswered = QUESTIONS.filter(
    (q) => state.answers[q.id] && (state.priorities[q.id] || 'normal') !== 'skip'
  ).length;
  answeredEl.textContent = String(activeAnswered);
}

function renderQuestionnaireView() {
  const listEl = document.getElementById('questionnaire-list');
  if (!listEl) return;

  listEl.innerHTML = QUESTIONS.map((question) => {
    const topic = getTopicById(question.topicId);
    const chosenOptionId = state.answers[question.id] || '';
    const priority = state.priorities[question.id] || 'normal';
    const isAnswered = Boolean(chosenOptionId) && priority !== 'skip';

    const optionsHtml = question.options
      .map((opt) => {
        const isSelected = chosenOptionId === opt.id;
        return `
          <label class="option-label ${isSelected ? 'selected' : ''}">
            <input
              type="radio"
              name="${escapeHtml(question.id)}"
              value="${escapeHtml(opt.id)}"
              ${isSelected ? 'checked' : ''}
            />
            <span>
              <span class="option-title">${escapeHtml(opt.title)}</span>
              <span class="option-desc">${escapeHtml(opt.description)}</span>
            </span>
          </label>
        `;
      })
      .join('');

    return `
      <article class="question-card ${isAnswered ? 'answered' : ''}" data-question-id="${escapeHtml(question.id)}">
        <div class="question-top-row">
          <span class="question-topic-tag">${escapeHtml(topic ? topic.shortTitle : question.topicId)}</span>
          <label class="priority-selector">
            <span>Importancia del tema:</span>
            <select class="priority-select" data-priority-for="${escapeHtml(question.id)}">
              <option value="high" ${priority === 'high' ? 'selected' : ''}>Prioritaria (2x)</option>
              <option value="normal" ${priority === 'normal' ? 'selected' : ''}>Normal (1x)</option>
              <option value="low" ${priority === 'low' ? 'selected' : ''}>Baja (0,5x)</option>
              <option value="skip" ${priority === 'skip' ? 'selected' : ''}>Omitir este tema</option>
            </select>
          </label>
        </div>

        <h2 class="question-title">${escapeHtml(question.title)}</h2>
        <p class="question-context">${escapeHtml(question.questionText)} ${escapeHtml(question.contextNote)}</p>

        <div class="options-list">
          ${optionsHtml}
        </div>
      </article>
    `;
  }).join('');

  listEl.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener('change', () => {
      state.answers[input.name] = input.value;
      if (state.priorities[input.name] === 'skip') {
        state.priorities[input.name] = 'normal';
      }
      renderQuestionnaireView();
      if (state.lastAffinitySummary) {
        computeAndRenderResults(false);
      }
    });
  });

  listEl.querySelectorAll('.priority-select').forEach((select) => {
    select.addEventListener('change', () => {
      const qId = select.dataset.priorityFor;
      if (!qId) return;
      state.priorities[qId] = select.value;
      renderQuestionnaireView();
      if (state.lastAffinitySummary) {
        computeAndRenderResults(false);
      }
    });
  });

  updateQuizCounter();
}

function computeAndRenderResults(shouldScroll = true) {
  const resultsEl = document.getElementById('questionnaire-results');
  if (!resultsEl) return;

  const summary = calculateCitizenAffinity(state.answers, state.priorities, QUESTIONS, PARTIES);
  state.lastAffinitySummary = summary;
  resultsEl.classList.remove('hidden');

  if (summary.answeredCount === 0) {
    resultsEl.innerHTML = `
      <div class="results-summary-card">
        <div class="results-kicker">Sin respuestas activas</div>
        <h2 class="results-heading">Seleccione al menos una medida concreta para calcular su afinidad</h2>
        <p class="page-lead">
          Marque una opción en las cuestiones que le interesen (asegúrese de que no estén marcadas como «Omitir este tema») y pulse «Calcular afinidad».
        </p>
      </div>
    `;
    if (shouldScroll) {
      resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return;
  }

  const topResult = summary.rankedParties[0];
  const topParty = getPartyById(topResult.partyId);

  if (
    !state.selectedResultPartyId ||
    !summary.rankedParties.some((r) => r.partyId === state.selectedResultPartyId)
  ) {
    state.selectedResultPartyId = topResult.partyId;
  }

  const visibleRanking =
    state.resultsBlocFilter === 'all'
      ? summary.rankedParties
      : summary.rankedParties.filter((r) => getPartyById(r.partyId)?.bloc === state.resultsBlocFilter);

  const rankingBlocButtons = [
    { id: 'all', label: 'Todos (17)' },
    ...BLOCS.map((bloc) => ({ id: bloc, label: bloc }))
  ]
    .map(
      (item) => `
      <button
        type="button"
        class="filter-pill ${state.resultsBlocFilter === item.id ? 'active' : ''}"
        data-res-bloc="${escapeHtml(item.id)}"
      >
        ${escapeHtml(item.label)}
      </button>
    `
    )
    .join('');

  const rankingRowsHtml = visibleRanking
    .map((entry) => {
      const party = getPartyById(entry.partyId);
      if (!party) return '';
      const globalRank = summary.rankedParties.findIndex((r) => r.partyId === entry.partyId) + 1;
      const isSelected = state.selectedResultPartyId === party.id;

      return `
        <div
          class="ranking-row ${isSelected ? 'active' : ''}"
          data-inspect-party="${escapeHtml(party.id)}"
          role="button"
          tabindex="0"
        >
          <div class="ranking-row-top">
            <div class="ranking-party-info">
              <span class="ranking-pos">#${globalRank}</span>
              <span class="party-short-name">${escapeHtml(party.shortName)}</span>
              <span class="bloc-badge">${escapeHtml(party.bloc)}</span>
              <span class="party-ideology-meta" style="margin-top: 0;">
                ${escapeHtml(party.fullName)} · ${escapeHtml(party.ideology)}
              </span>
            </div>
            <div class="ranking-score-group">
              <span class="ranking-matches">
                ${entry.exactMatchesCount} de ${summary.answeredCount} coincidencias directas
              </span>
              <span class="ranking-percent">${entry.scorePercentage}%</span>
            </div>
          </div>
          <div class="progress-track">
            <div
              class="progress-fill"
              style="width: ${Math.max(2, entry.scorePercentage)}%; background-color: ${escapeHtml(party.accentColor)};"
            ></div>
          </div>
        </div>
      `;
    })
    .join('');

  const inspectedEntry =
    summary.rankedParties.find((r) => r.partyId === state.selectedResultPartyId) || topResult;
  const inspectedParty = getPartyById(inspectedEntry.partyId);

  const traceRowsHtml = summary.questionBreakdown
    .map((qItem) => {
      const weight = Number(qItem.partyWeights?.[inspectedEntry.partyId] ?? 0);
      const pct = Math.round(weight * 100);
      const proposal = getProposal(inspectedEntry.partyId, qItem.topicId);

      let alignmentClass = 'alignment-low';
      let alignmentLabel = `Baja (${pct}%)`;
      if (weight >= 0.85) {
        alignmentClass = 'alignment-high';
        alignmentLabel = `Coincidencia directa (${pct}%)`;
      } else if (weight >= 0.4) {
        alignmentClass = 'alignment-mid';
        alignmentLabel = `Afín parcial (${pct}%)`;
      }

      return `
        <tr>
          <td>
            <strong>${escapeHtml(qItem.title)}</strong><br />
            <span style="font-size: 0.78rem; color: var(--ink-muted);">
              Peso aplicado: ${escapeHtml(qItem.multiplier)}x
            </span>
          </td>
          <td>${escapeHtml(qItem.selectedOptionTitle)}</td>
          <td>${escapeHtml(proposal ? proposal.headline : 'Ver ficha del partido')}</td>
          <td><span class="alignment-pill ${alignmentClass}">${escapeHtml(alignmentLabel)}</span></td>
        </tr>
      `;
    })
    .join('');

  resultsEl.innerHTML = `
    <div class="results-summary-card" style="border-top-color: ${escapeHtml(topParty?.accentColor || '#1e3a5f')};">
      <div class="results-kicker">Resultado basado en ${summary.answeredCount} medidas concretas</div>
      <h2 class="results-heading">
        Mayor coincidencia programática: ${escapeHtml(topParty?.fullName || '')} (${topResult.scorePercentage}%)
      </h2>
      <p class="page-lead" style="margin-bottom: 1rem;">
        ${escapeHtml(topParty?.ideology || '')} · Bloque ${escapeHtml(topParty?.bloc || '')}. Coincide de forma directa en <strong>${topResult.exactMatchesCount}</strong> de las ${summary.answeredCount} medidas seleccionadas.
      </p>
      <div class="profile-links-row" style="border-top: none; padding-top: 0;">
        <a href="#perfil/${escapeHtml(topResult.partyId)}" class="btn btn-primary btn-sm">
          Leer perfil completo de ${escapeHtml(topParty?.shortName || '')} &rarr;
        </a>
      </div>
    </div>

    <div class="results-ranking-card">
      <div class="ranking-toolbar">
        <div>
          <h3 style="font-size: 1.08rem; font-weight: 700;">Clasificación completa de las 17 formaciones</h3>
          <p style="font-size: 0.84rem; color: var(--ink-muted);">
            Haga clic en cualquier partido del listado para inspeccionar medida por medida por qué coincide o diverge con sus elecciones.
          </p>
        </div>
        <div class="bloc-filters">${rankingBlocButtons}</div>
      </div>

      <div class="ranking-list">
        ${rankingRowsHtml}
      </div>
    </div>

    <div class="party-trace-card">
      <div class="ranking-toolbar" style="margin-bottom: 0.4rem;">
        <div>
          <h3 style="font-size: 1.08rem; font-weight: 700;">
            Desglose comparativo con ${escapeHtml(inspectedParty?.fullName || '')} (${inspectedEntry.scorePercentage}%)
          </h3>
          <p style="font-size: 0.84rem; color: var(--ink-muted);">
            Contraste entre las medidas que usted ha elegido y la posición programática oficial de ${escapeHtml(inspectedParty?.shortName || '')}.
          </p>
        </div>
        <a href="#perfil/${escapeHtml(inspectedEntry.partyId)}" class="profile-link">
          Ver programa completo de ${escapeHtml(inspectedParty?.shortName || '')} &rarr;
        </a>
      </div>

      <table class="trace-table">
        <thead>
          <tr>
            <th>Tema evaluado</th>
            <th>Medida elegida por usted</th>
            <th>Propuesta de ${escapeHtml(inspectedParty?.shortName || '')}</th>
            <th>Grado de afinidad</th>
          </tr>
        </thead>
        <tbody>
          ${traceRowsHtml}
        </tbody>
      </table>
    </div>
  `;

  resultsEl.querySelectorAll('[data-res-bloc]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.resultsBlocFilter = btn.dataset.resBloc || 'all';
      computeAndRenderResults(false);
    });
  });

  resultsEl.querySelectorAll('[data-inspect-party]').forEach((row) => {
    const activateRow = () => {
      state.selectedResultPartyId = row.dataset.inspectParty || null;
      computeAndRenderResults(false);
    };
    row.addEventListener('click', activateRow);
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateRow();
      }
    });
  });

  if (shouldScroll) {
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* =========================================================================
 * INITIALIZATION & EVENT BINDINGS
 * ========================================================================= */
function initApp() {
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.route || 'partidos';
      navigateTo(`#${target}`);
    });
  });

  const searchInput = document.getElementById('party-search-input');
  searchInput?.addEventListener('input', () => {
    state.searchQuery = searchInput.value;
    renderPartiesDirectory();
  });

  document.getElementById('btn-calculate-affinity')?.addEventListener('click', () => {
    computeAndRenderResults(true);
  });

  document.getElementById('btn-calculate-affinity-bottom')?.addEventListener('click', () => {
    computeAndRenderResults(true);
  });

  document.getElementById('btn-reset-quiz')?.addEventListener('click', () => {
    state.answers = {};
    state.priorities = {};
    state.lastAffinitySummary = null;
    state.selectedResultPartyId = null;
    state.resultsBlocFilter = 'all';
    document.getElementById('questionnaire-results')?.classList.add('hidden');
    renderQuestionnaireView();
  });

  window.addEventListener('hashchange', handleRouteChange);
  handleRouteChange();
}

initApp();
