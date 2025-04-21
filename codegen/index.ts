import { ScriptSchema } from './script-schema';
import { loadScripts } from './load-scripts';
import { isValidScript } from './script-validator';
import { generateScriptPages } from './generate-script-pages';
import { normalizeSchemaScript } from './transform';
import { generateDetails } from './generate-details';

async function main() {
	const scripts: { fileName: string; data: ScriptSchema }[] = [];

	for await (const { data, fileName } of loadScripts()) {
		if (isValidScript(data)) {
			scripts.push({ data, fileName: fileName.replace(/\.ya?ml/, '') });
		} else {
			throw new Error(`Invalid script: ${fileName}`);
		}
	}

	await generateScriptPages(scripts.map((value) => value.fileName).sort());

	const normalizedScripts = scripts.map(({ data, fileName }) =>
		normalizeSchemaScript(data, fileName)
	);

	await generateDetails(normalizedScripts);
}

await main();
