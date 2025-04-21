import fs from 'node:fs';
import yaml from 'js-yaml';
import path from 'node:path';

/**
 * Synchronously loads and parses YAML files from the "scripts" directory.
 * This generator function reads all files with extensions `.yaml` or `.yml`,
 * parses their content, and yields the parsed data.
 *
 * @return {Generator<Object, void, unknown>} A generator that yields
 * parsed YAML content from each applicable file in the "scripts" directory.
 */
export function* loadScripts(): Generator<{ fileName: string; data: unknown }, void, unknown> {
	const scriptsDir = './scripts';
	const files = fs.readdirSync(scriptsDir);
	const yamlFiles = files.filter((file) => file.endsWith('.yaml') || file.endsWith('.yml'));

	for (const file of yamlFiles) {
		const content = fs.readFileSync(path.join(scriptsDir, file), 'utf8');
		const data = yaml.load(content, { schema: yaml.CORE_SCHEMA });
		yield { fileName: file, data };
	}
}
