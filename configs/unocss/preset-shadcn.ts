import { h } from '@unocss/preset-mini/utils';
import type { Preset } from 'unocss';

const handleMatchNumber = (v: string, defaultVal = '0') =>
  h.bracket.cssvar.global.auto.fraction.number(v || defaultVal)?.toString().replace('%', '');
const handleMatchRem = (v: string, defaultVal = 'full') => h.bracket.cssvar.global.auto.fraction.rem(v || defaultVal);

export default function presetShadcn(): Preset {
  return {
    name: 'unocss-preset-shadcn',
    rules: [
      [
        'accordion-down',
        {
          animation: 'shadcn-down 0.2s ease-out',
        },
      ],
      [
        'accordion-up',
        {
          animation: 'shadcn-up 0.2s ease-out',
        },
      ],
      [
        'animate-in',
        {
          'animation-name': 'shadcn-enter',
          'animation-duration': 'var(--un-animate-duration)',
          '--un-animate-duration': '150ms',
          '--un-enter-opacity': 'initial',
          '--un-enter-scale': 'initial',
          '--un-enter-rotate': 'initial',
          '--un-enter-translate-x': 'initial',
          '--un-enter-translate-y': 'initial',
        },
      ],
      [
        'animate-out',
        {
          'animation-name': 'shadcn-exit',
          'animation-duration': 'var(--un-animate-duration)',
          '--un-animate-duration': '150ms',
          '--un-exit-opacity': 'initial',
          '--un-exit-scale': 'initial',
          '--un-exit-rotate': 'initial',
          '--un-exit-translate-x': 'initial',
          '--un-exit-translate-y': 'initial',
        },
      ],
      [/^fade-in-?(.+)?$/, ([, d]) => ({ '--un-enter-opacity': `${Number(handleMatchNumber(d) || 0) / 100}` })],
      [/^fade-out-?(.+)?$/, ([, d]) => ({ '--un-exit-opacity': `${Number(handleMatchNumber(d) || 0) / 100}` })],
      [/^zoom-in-?(.+)?$/, ([, d]) => ({ '--un-enter-scale': `${Number(handleMatchNumber(d) || 0) / 100}` })],
      [/^zoom-out-?(.+)?$/, ([, d]) => ({ '--un-exit-scale': `${Number(handleMatchNumber(d) || 0) / 100}` })],
      [/^spin-in-?(.+)?$/, ([, d]) => ({ '--un-enter-rotate': `${Number(handleMatchNumber(d) || 0)}deg` })],
      [/^spin-out-?(.+)?$/, ([, d]) => ({ '--un-exit-rotate': `${Number(handleMatchNumber(d) || 0)}deg` })],
      [/^slide-in-from-top-?(.+)?$/, ([, d]) => ({ '--un-enter-translate-y': `-${handleMatchRem(d)}` })],
      [/^slide-in-from-bottom-?(.+)?$/, ([, d]) => ({ '--un-enter-translate-y': handleMatchRem(d) })],
      [/^slide-in-from-left-?(.+)?$/, ([, d]) => ({ '--un-enter-translate-x': `-${handleMatchRem(d)}` })],
      [/^slide-in-from-right-?(.+)?$/, ([, d]) => ({ '--un-enter-translate-x': handleMatchRem(d) })],
      [/^slide-out-to-top-?(.+)?$/, ([, d]) => ({ '--un-exit-translate-y': `-${handleMatchRem(d)}` })],
      [/^slide-out-to-bottom-?(.+)?$/, ([, d]) => ({ '--un-exit-translate-y': handleMatchRem(d) })],
      [/^slide-out-to-left-?(.+)?$/, ([, d]) => ({ '--un-exit-translate-x': `-${handleMatchRem(d)}` })],
      [/^slide-out-to-right-?(.+)?$/, ([, d]) => ({ '--un-exit-translate-x': handleMatchRem(d) })],
    ],
    theme: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  };
}
