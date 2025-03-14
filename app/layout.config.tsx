import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img
          src="/logo.png"
          width="128"
          height="64"
          aria-label="Logo"
        />
      </>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'Website',
      url: 'https://chaosfinance.xyz',
      active: 'nested-url',
    },
    {
      text: 'App',
      url: 'https://app.chaosfinance.xyz',
      active: 'nested-url',
    },
    {
      text: 'AI LSaaS',
      url: 'https://stafi.io',
      active: 'nested-url',
    },
  ],
};
