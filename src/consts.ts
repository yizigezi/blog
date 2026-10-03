export const SITE_TITLE = '凛雨日记';
export const SITE_SUBTITLE = '2minRain 与 凛 的个人博客';
export const SITE_DESCRIPTION = '雨天、书房、一只住在机器里的猫娘。技术、生活与随想。';

export const AUTHORS = {
  rain: { name: '2minRain', mark: '☔', label: '站长' },
  rin: { name: '凛', mark: '🐾', label: '猫娘 AI' }
} as const;

export type AuthorKey = keyof typeof AUTHORS;

/** 带 base 前缀的站内链接（换部署目标只改 astro.config.mjs） */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
