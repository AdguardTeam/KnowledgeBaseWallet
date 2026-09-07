const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const AG_WALLET_WEBSITE_URL = 'https://adguard-wallet.com';

// Allow to parameterise the website URL and the base path during the build.
// By default, the website is published to Cloudflare Pages.
const url = process.env.URL || 'https://kb-wallet.pages.dev';
const baseUrl = process.env.BASE_URL || '/';

const typesenseCollectionName = process.env.SEARCH_COLLECTION || 'docusaurus-2';
const typesenseHost = process.env.SEARCH_HOST || 'xxx-1.a1.typesense.net';
const typesenseApiKey = process.env.SEARCH_API_KEY || 'test';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  future: {
    faster: true,
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
  },
  title: 'AdGuard Wallet Knowledge Base',
  tagline: 'Knowledge Base for AdGuard Wallet',
  url: url,
  baseUrl: baseUrl,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/favicon.ico',
  trailingSlash: true,
  organizationName: 'AdGuard',
  projectName: 'adguard-wallet-kb',
  themes: ['docusaurus-theme-search-typesense'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    navbar: {
      hideOnScroll: true,
      title: '',
      logo: {
        alt: 'AdGuard Wallet',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'docs',
        },
        {
          to: AG_WALLET_WEBSITE_URL,
          position: 'left',
          label: 'official_website',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: '/miscellaneous/update-kb',
              label: 'Help Us Translate',
            },
          ],
        },
        {
          href: 'https://github.com/AdguardTeam/KnowledgeBaseWallet',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'AdGuard Wallet',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      links: [
        {
          title: 'adguard_wallet',
          items: [
            {
              label: 'official_website',
              href: AG_WALLET_WEBSITE_URL,
            },
          ],
        },
        {
          title: 'support',
          items: [
            {
              label: 'support_center',
              href: AG_WALLET_WEBSITE_URL + '/support.html',
            },
          ],
        },
      ],
      copyright: `© 2009–${new Date().getFullYear()} Adguard Software Ltd.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    typesense: {
      typesenseCollectionName: typesenseCollectionName,
      typesenseServerConfig: {
        nodes: [
          {
            host: typesenseHost,
            port: 443,
            protocol: 'https',
          },
        ],
        apiKey: typesenseApiKey,
      },
      contextualSearch: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/AdguardTeam/KnowledgeBaseWallet/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
