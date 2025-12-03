import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Sentient Machines',
  tagline: 'Engineering Physical AI',
  favicon: 'img/logo.png',

  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',

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
          editUrl:
            'https://github.com/your-repo/your-book/tree/main/', // Placeholder
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    {
      image: 'img/logo.png',
      navbar: {
        title: 'Sentient Machines',
        logo: {
          alt: 'Sentient Machines Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Handbook',
          },
          {
            href: 'https://github.com/your-repo/your-book', // Placeholder
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Sentient Machines. Built with Docusaurus.`,
      },
    } satisfies Preset.ThemeConfig,
};

export default config;