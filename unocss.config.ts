import {
	defineConfig,
	presetWind,
	presetMini,
	presetTypography,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
	transformerCompileClass,
} from 'unocss'
import { presetAio } from 'untcss';

export default defineConfig({
	presets: [
		presetWind(),
		presetMini(),
		presetTypography(),
		presetWebFonts(),
		presetAio(),
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
		transformerCompileClass(),
	],
})
