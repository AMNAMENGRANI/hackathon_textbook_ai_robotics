import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI-Native Textbook Physical AI & Humanoid Robotics',
  tagline: 'A comprehensive textbook covering ROS 2, Gazebo, NVIDIA Isaac, and Vision-Language-Action systems',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://amnamengrani.github.io', // lowercase is better for consistency
  baseUrl: '/hackathon_textbook_ai_robotics/',

  organizationName: 'AMNAMENGRANI',
  projectName: 'hackathon_textbook_ai_robotics',
  deploymentBranch: 'gh-pages', // explicitly set deployment branch

  onBrokenLinks: 'warn',
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
          editUrl: 'https://github.com/AMNAMENGRANI/hackathon_textbook_ai_robotics/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/AMNAMENGRANI/hackathon_textbook_ai_robotics/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    metadata: [
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
      {name: 'theme-color', content: '#12affa'},
      {name: 'description', content: 'AI-Native Textbook for Physical AI & Humanoid Robotics covering ROS 2, Gazebo, NVIDIA Isaac, and Vision-Language-Action systems'},
      {name: 'keywords', content: 'robotics, AI, textbook, ROS 2, Gazebo, NVIDIA Isaac, humanoid robotics, physical AI, education'},
    ],
    navbar: {
      title: 'AI-Native Textbook',
      logo: {
        alt: 'AI-Native Textbook Logo',
        src: 'img/logo.svg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'textbookSidebar', position: 'left', label: 'Textbook' },
        { href: 'https://github.com/AMNAMENGRANI/hackathon_textbook_ai_robotics', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Textbook', items: [{ label: 'Introduction', to: '/docs/quickstart' }] },
        { title: 'Resources', items: [
            { label: 'ROS 2 Documentation', href: 'https://docs.ros.org/en/humble/' },
            { label: 'NVIDIA Isaac', href: 'https://developer.nvidia.com/isaac' },
            { label: 'Gazebo Simulation', href: 'https://gazebosim.org/' },
          ] },
        { title: 'More', items: [
            { label: 'GitHub', href: 'https://github.com/AMNAMENGRANI/hackathon_textbook_ai_robotics' },
          ] },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI-Native Textbook — Physical AI & Humanoid Robotics. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    trailingSlash: false, // recommended for GitHub Pages
  } satisfies Preset.ThemeConfig,
};

export default config;
