import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetWind,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';
import presetIcons from './configs/unocss/preset-icons';

export default defineConfig({
  theme: {},
  presets: [
    presetWind(),
    presetUno(),
    presetRemToPx(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Lato',
      },
    }),
    presetIcons(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
});
