import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'VIF 1.0',
  tagline: 'Vigía Incubation Framework — National public–private incubation architecture',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://vif.doulab.net',
  baseUrl: '/',

  organizationName: 'doulabglobal',
  projectName: 'vigia-incubanet-framework',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/doulabglobal/vigia-incubanet-framework/tree/main/classic/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    image: 'img/social-card.jpg',
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'VIF 1.0',
      logo: {
        alt: 'VIF logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'coreSidebar',
          position: 'left',
          label: 'Core Docs',
        },
        {
          href: 'https://github.com/doulabglobal/vigia-incubanet-framework',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'VIF Core',
              to: '/docs/core/vif/00-executive-summary',
            },
          ],
        },
        {
          title: 'Doulab',
          items: [
            {
              label: 'Doulab Website',
              href: 'https://www.doulab.net',
            },
            {
              label: 'MicroCanvas Framework',
              href: 'https://themicrocanvas.com',
            },
            {
              label: 'Vigia Futura Observatory',
              href: 'https://doulab.net/vigia-futura',
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'VIF Repository',
              href: 'https://github.com/doulabglobal/vigia-incubanet-framework',
            },
          ],
        },
      ],
      copyright:
        'MicroCanvas, IMM-P and Vigia Incubation Framework (VIF) are proprietary methodologies of Doulab. All rights reserved.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
