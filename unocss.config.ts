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
import presetSizeExtension from './configs/unocss/preset-size-extension';
import presetShadcn from './configs/unocss/preset-shadcn';

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
    presetSizeExtension(),
    presetShadcn(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
});
