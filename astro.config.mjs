import { defineConfig } from 'astro/config';

// 部署时把 site 改成实际域名（如 https://yizigezi.github.io/blog）
export default defineConfig({
  site: 'https://blog.example.com',
  base: '/',
  trailingSlash: 'ignore'
});
