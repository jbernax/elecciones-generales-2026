/**
 * Verified macroeconomic and public-finance reference indicators for Spain (2026)
 * used to frame party proposals on taxation, spending, and debt management.
 */

export const SPAIN_FISCAL_STATUS = {
  title: 'Situación financiera y deuda pública de España (Referencia 2026)',
  subtitle:
    'Contexto presupuestario de partida para contrastar la viabilidad de las propuestas de gasto, rebajas fiscales y gestión de la deuda.',
  updatedLabel: 'Datos y previsiones a noviembre de 2026 (Banco de España y AIReF)',
  metrics: [
    {
      id: 'debt',
      label: 'Deuda pública',
      value: '100,3% del PIB (1,767 billones €)',
      detail:
        'Dato de septiembre de 2026 (Banco de España). La AIReF estima un cierre de año en el 99,9% y una senda moderada hacia el 95,4% en 2031.'
    },
    {
      id: 'deficit',
      label: 'Déficit público',
      value: '2,8% del PIB (prev. cierre 2026)',
      detail:
        'Estimación de la AIReF, que advierte de desvíos respecto a la senda de gasto neto primario pactada con la Unión Europea.'
    },
    {
      id: 'interest',
      label: 'Carga de intereses',
      value: 'Presión creciente en refinanciaciones',
      detail:
        'Los vencimientos renovados a tipos actuales y los bonos indexados a la inflación elevan progresivamente el gasto financiero anual.'
    },
    {
      id: 'rules',
      label: 'Reglas fiscales UE',
      value: 'Límite déficit < 3% y senda de gasto neto',
      detail:
        'El marco fiscal europeo obliga a planes plurianuales de ajuste del gasto primario para reconducir la deuda a la baja.'
    }
  ],
  sourcesNote:
    'Fuentes: Banco de España (avance mensual de deuda AAPP, septiembre 2026) y AIReF (previsiones fiscales y análisis de sostenibilidad, 2026).'
};
