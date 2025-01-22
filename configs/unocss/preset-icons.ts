import type { Preset } from '@unocss/core';
import { presetIcons } from 'unocss';

/**
 * Use any icon with Pure CSS for UnoCSS.
 *
 * @example
 *
 * ```html
 * <div class="i-mdi-alarm"></div>
 * <div class="before:(c_ i-logos-vue) text-3xl"></div>
 * <button class="i-carbon-sun dark:i-carbon-moon"></div>
 * ```
 *
 * @see https://unocss.dev/presets/icons
 */
export default function presetAppIcons(): Preset {
  return {
    name: 'app-icons-preset',
    rules: [
      ['c_', { content: '"\xA0"' }],
    ],
    presets: [
      presetIcons({
        extraProperties: {
          'display': 'inline-block',
          'height': 'auto',
          'min-height': '1em',
          'white-space': 'nowrap',
        },
      }),
    ],
  };
}
