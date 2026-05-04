import {createRequire} from 'node:module';
import {themes as prismThemes} from 'prism-react-renderer';

const require = createRequire(import.meta.url);
const simplePlantUML = require('@akebifiky/remark-simple-plantuml');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Платформа городской сети камер хранения с возможностью доставки вещей между локациями',
  tagline: 'Техническая документация ',
  favicon: 'img/favicon.ico',

  url: 'https://olejjjka.github.io',
  baseUrl: '/locker-network-docs/',
  organizationName: 'Olejjjka',
  projectName: 'locker-network-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  plugins: [
    ['drawio', {}],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/Olejjjka/locker-network-docs/edit/main/my-website/',
          remarkPlugins: [simplePlantUML],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'locker-network-api',
            spec: 'static/openapi/openapi.yaml',
            route: '/api/openapi',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Камеры хранения',
      logo: {
        alt: 'Логотип документации',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Документация',
        },
        {
          to: '/api/openapi',
          label: 'OpenAPI',
          position: 'left',
        },
        {
          href: 'https://github.com/Olejjjka/locker-network-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Разделы',
          items: [
            {
              label: 'Введение',
              to: '/docs/intro',
            },
            {
              label: 'OpenAPI',
              to: '/api/openapi',
            },
          ],
        },
        {
          title: 'Репозиторий',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Olejjjka/locker-network-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Olejjjka. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;