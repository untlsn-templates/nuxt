type ImportMetaEnvKeys =
	| 'LAUNCH_EDITOR'
	| 'PORT'

interface ImportMetaEnv extends Readonly<Record<ImportMetaEnvKeys, string>> {}
