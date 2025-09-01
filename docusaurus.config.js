// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tài liệu hướng dẫn HiTechCloud',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.hitechcloud.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // // Remove this to remove the "edit this page" links.
          // editUrl: null, // Disabled edit links
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        debug: true,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-3LHTW2JSHF',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'install',
        path: 'docs-install',
        routeBasePath: 'install',
        sidebarPath: require.resolve('./sidebars-install.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'vps',
        path: 'docs-vps',
        routeBasePath: 'vps',
        sidebarPath: require.resolve('./sidebars-vps.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tools',
        path: 'docs-tools',
        routeBasePath: 'tools',
        sidebarPath: require.resolve('./sidebars-tools.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'brandname',
        path: 'docs-brandname',
        routeBasePath: 'brandname',
        sidebarPath: require.resolve('./sidebars-brandname.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'HiTechCloud Logo',
          src: 'img/hitechcloudvn1.png',
          href: '/',
        },
        items: [
          // {to: '/', label: 'Home', position: 'right'},
          {to: '/docs/intro', label: 'HiTechCloud API', position: 'right'},
          { to: '/install/intro', label: 'AI & LLM', position: 'right' },
          { to: '/vps/intro', label: 'Cloud Instance', position: 'right' },
          { to: '/brandname/intro', label: 'Domains BrandName', position: 'right' },
          { to: '/tools/intro', label: 'Tool - Chia sẻ', position: 'right' },
          {
            label: 'Hỗ trợ',
            position: 'right',
            items: [
              {href: 'https://my.photuesoftware.vn/', label: 'Trung Tâm Khách Hàng'},
              {to: '/docs/error-reporting', label: 'Hỗ trợ báo lỗi'},
              {href: 'https://my.photuesoftware.vn/tickets/new', label: 'Gửi yêu cầu hỗ trợ'},
              {
                href: 'https://web.facebook.com/photuesoftwarevietnam?_rdc=1&_rdr#',
                label: 'Fanpage FaceBook',
                className: 'header-facebook-link',
              },
              {
                href: 'https://github.com/Pho-Tue-SoftWare-Solutions-JSC',
                label: 'GitHub',
                className: '"navbar__item navbar__link header-github-link"',
              },
            ],
          },
        ],
      },
      footer: undefined,
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        {property: 'og:site_name', content: 'HI-TECH CLOUD'},
        {property: 'fb:admins', content: 'https://www.facebook.com/Anthanh78'},
        {property: 'og:image', content: 'https://assets.datamation.com/uploads/2023/12/dm_20231220-cloud-service-providers.png'},
        {property: 'og:image:secure_url', content: 'https://assets.datamation.com/uploads/2023/12/dm_20231220-cloud-service-providers.png'},
        {property: 'og:image:width', content: '600'},
        {property: 'og:image:height', content: '400'},
        {property: 'og:image:alt', content: 'hosting'},
        {property: 'og:image:type', content: 'image/jpeg'},
        {property: 'article:published_time', content: '2023-03-25T14:11:47+07:00'},
        {property: 'article:modified_time', content: '2024-11-18T10:46:42+07:00'},
        {name: 'keywords', content: 'Pho Tue SoftWare Solutions JSC,'},
        {name: 'description', content: 'Nhà Cung cấp dịch Trung Tâm Dữ Liệu, Điện Toán Đám Mây Và Phát Triển Phần Mềm Hàng Đầu Việt Nam. Hệ Thống Data Center Đáp Ứng Mọi Nhu Cầu Với Kết Nối Internet Nhanh, Băng Thông Lớn, Uptime Lên Đến 99,99% Theo Tiêu Chua TIER III-TIA 942.'},
        {name: 'apple-mobile-web-app-capable', content: 'yes'},
        {name: 'apple-touch-fullscreen', content: 'yes'},
        {name: 'apple-mobile-web-app-status-bar-style', content: 'default'},
        {name: 'robots', content: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large'},
        {property: 'og:type', content: 'website'},
      ],
      algolia: {
        appId: 'QWYNZJ6QKL',
        apiKey: '8dcf757824b3acf875794bd2a181e653',
        indexName: 'Docs',
        contextualSearch: true,
      },
    }),
};

export default config;
