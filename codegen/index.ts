import fs from 'node:fs';
import { generateCategoryLists } from './generate-category-lists';
import { generateDetails } from './generate-details';
import { generateScriptPages } from './generate-script-pages';
import { loadScripts } from './load-scripts';
import { OUTPUT_DIR } from './paths';
import type { ComicRackScriptSchema } from './script-schema';
import { isValidScript } from './script-validator';
import { normalizeSchemaScript } from './transform';

function clean() {
	fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
	fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function main() {
	const scripts: { fileName: string; data: ComicRackScriptSchema }[] = [];

	for await (const { data, fileName } of loadScripts()) {
		if (isValidScript(data)) {
			scripts.push({ data, fileName: fileName.replace(/\.ya?ml/, '') });
		} else {
			throw new Error(`Invalid script: ${fileName}\n${JSON.stringify(isValidScript.errors)}`);
		}
	}

	clean();

	await generateScriptPages(scripts.map((value) => value.fileName).sort());

	const normalizedScripts = scripts.map(({ data, fileName }) =>
		normalizeSchemaScript(data, fileName)
	);

	generateDetails(normalizedScripts);
	generateCategoryLists(normalizedScripts);
}

await main();
