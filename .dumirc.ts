import { defineConfig } from 'dumi';

const isDev = process.env.NODE_ENV === 'development';
export const basePath = isDev ? '/' : '/XForm/';
const logoPath = `${basePath}logo.png`;

export default defineConfig({
  base: basePath,
  publicPath: basePath,
  outputPath: 'docs-dist',
  favicons: [logoPath],
  themeConfig: {
    title: 'XForm',
    name: 'XForm',
    logo: logoPath,
    socialLinks: {
      github: 'https://github.com/totalizer-team/XForm',
    },
    footer: 'Open-source MIT Licensed | Copyright © 2024-present',
    rtl: false,
    localesEnhance: [
      {
        id: 'zh-CN',
        switchPrefix: '中',
      },
      {
        id: 'en-US',
        switchPrefix: 'En',
      },
    ],
  },
  mfsu: false,
  locales: [
    { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '中文', suffix: '-cn' },
  ],
});
