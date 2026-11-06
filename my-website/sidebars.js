/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  "tutorialSidebar": [
    "intro",
    "artifact-map",
    {
      "type": "category",
      "label": "Контекст и цели",
      "items": [
        "product/concept-and-boundaries",
        {
          "type": "link",
          "label": "Бизнес-модель и развитие",
          "href": "/docs/platformization#%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B5%D0%B3%D0%B8%D1%8F-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F"
        }
      ]
    },
    {
      "type": "category",
      "label": "Требования и сценарии",
      "items": [
        "requirements/requirements-elicitation",
        "requirements/requirements",
        {
          "type": "doc",
          "id": "uml/uml-diagrams",
          "label": "Роли и сценарии (UML)"
        }
      ]
    },
    {
      "type": "category",
      "label": "Процессы и правила",
      "items": [
        {
          "type": "doc",
          "id": "processes/bpmn",
          "label": "Перемещение вещей (BPMN / DMN)"
        }
      ]
    },
    {
      "type": "category",
      "label": "Данные и хранение",
      "items": [
        {
          "type": "doc",
          "id": "data-model/erd",
          "label": "Модели данных (ERD)"
        },
        "data-storage/storage-technologies"
      ]
    },
    {
      "type": "category",
      "label": "Интерфейсы и интеграции",
      "items": [
        {
          "type": "doc",
          "id": "api/api-by-wireframes",
          "label": "Экраны и REST API"
        },
        {
          "type": "link",
          "label": "Контракт OpenAPI",
          "href": "/api/openapi"
        },
        {
          "type": "doc",
          "id": "async/async-interaction",
          "label": "События и WebSocket (AsyncAPI)"
        },
        {
          "type": "doc",
          "id": "platformization/platformization",
          "label": "Платёжное решение и платформизация"
        }
      ]
    },
    {
      "type": "category",
      "label": "Сопровождение документации",
      "items": [
        {
          "type": "doc",
          "id": "templates/missing-artifacts",
          "label": "Шаблоны будущих документов"
        },
        {
          "type": "doc",
          "id": "style-guide/style-guide",
          "label": "Правила оформления"
        }
      ]
    }
  ]
};

export default sidebars;
