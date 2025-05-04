import yaml from 'js-yaml';
import fs from 'node:fs';
import path from 'node:path';
import { SCRIPTS_DIR } from './paths';

const FILTERED_SCRIPTS = ['template.yaml', 'script-schema.yaml'];

/**
 * Synchronously loads and parses YAML files from the "scripts" directory. This generator function
 * reads all files with extensions `.yaml` or `.yml`, parses their content, and yields each of the
 * parsed data.
 */
export function* loadScripts(): Generator<{ fileName: string; data: unknown }, void, unknown> {
	const files = fs.readdirSync(SCRIPTS_DIR, {
		encoding: 'utf8',
		recursive: true
	});
	const yamlFiles = files
		.filter((file) => file.endsWith('.yaml') || file.endsWith('.yml'))
		.filter((file) => !FILTERED_SCRIPTS.includes(file));

	for (const file of yamlFiles) {
		const content = fs.readFileSync(path.join(SCRIPTS_DIR, file), 'utf8');
		const data = yaml.load(content, { schema: yaml.CORE_SCHEMA });
		yield { fileName: path.basename(file), data };
	}
}
