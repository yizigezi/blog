import { defineConfig } from 'astro/config';

// 部署：GitHub Pages 项目站 yizigezi.github.io/blog
export default defineConfig({
  site: 'https://yizigezi.github.io',
  base: '/blog',
  trailingSlash: 'ignore'
});
