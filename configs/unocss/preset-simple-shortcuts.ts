import type { Preset } from '@unocss/core';

/**
 * List of simple shortcuts
 *
 * @example
 * <div class="hocus:opacity-80" />
 * // Same as
 * <div class="hover:opacity-80 focus:opacity-80" />
 */
export default function presetSimpleShortcuts(): Preset {
  return {
    name: 'preset-simple-shortcuts',
    shortcuts: [
      [/hocus:(.+)/, ([, it]) => {
        return `hover:${it} focus:${it}`;
      }],
    ],
  };
}
