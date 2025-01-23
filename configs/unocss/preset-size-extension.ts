import type { Preset } from '@unocss/core';

/**
 * Add min and max versions of size class
 * @example
 * <div class="min-size-40" />
 * <div class="max-size-full" />
 * // Equal
 * <div class="min-h-40 min-w-40" />
 * <div class="max-h-full max-w-full" />
 */
export default function presetSizeExtension(): Preset {
  return {
    name: 'preset-size-extension',
    shortcuts: [
      [/(min|max)-size-(.+)/, ([,type, unit]) => {
        return `${type}-w-${unit} ${type}-h-${unit}`;
      }],
    ],
  };
}
