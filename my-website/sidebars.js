/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Описание проекта',
      items: [
        'product/concept-and-boundaries',
      ],
    },
    {
      type: 'category',
      label: 'Требования',
      items: [
        'requirements/requirements',
        'requirements/requirements-elicitation',
      ],
    },
    {
      type: 'category',
      label: 'Бизнес-процессы',
      items: [
        'processes/bpmn',
      ],
    },
    {
      type: 'category',
      label: 'UML-диаграммы',
      items: [
        'uml/uml-diagrams',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/api-by-wireframes',
      ],
    },
    {
      type: 'category',
      label: 'Асинхронное взаимодействие',
      items: [
        'async/async-interaction',
      ],
    },
    {
      type: 'category',
      label: 'Хранение данных',
      items: [
        'data-storage/storage-technologies',
      ],
    },
    {
      type: 'category',
      label: 'Модель данных',
      items: [
        'data-model/erd',
      ],
    },
    {
      type: 'category',
      label: 'Платформизация',
      items: [
        'platformization/platformization',
      ],
    },
    {
      type: 'category',
      label: 'Шаблоны артефактов',
      items: [
        'templates/missing-artifacts',
      ],
    },
    {
      type: 'category',
      label: 'Style Guide',
      items: [
        'style-guide/style-guide',
      ],
    },
  ],
};

export default sidebars;