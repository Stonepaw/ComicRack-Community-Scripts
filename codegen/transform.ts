import type { ScriptSchema, ScriptVersionSchema } from './script-schema';
import type { Script, ScriptVersion } from '../src/lib';

function ensureArray<T>(value: T | T[]): T[] {
	return Array.isArray(value) ? value : [value];
}

/**Ò
 * Transforms a version object by ensuring specific properties are set to `undefined` if not present.
 *
 * @param {ScriptVersionSchema} version - The version object to transform, which may contain optional properties.
 * @return {ScriptVersion} A new version object with adjusted properties, ensuring `changes` and `date` are explicitly set to `undefined` if they are absent.
 */
function transformVersion(version: ScriptVersionSchema): ScriptVersion {
	return {
		...version,
		changes: version.changes ?? undefined,
		date: version.date ?? undefined
	};
}

/**
 * Normalizes the given schema script data by transforming and ensuring specific fields.
 *
 * @param {ScriptSchema} data - The script schema data to normalize.
 * @param {string} fileName - The file name associated with the script, used as its ID.
 * @return {Script} The normalized script object containing validated and transformed fields.
 */
export function normalizeSchemaScript(data: ScriptSchema, fileName: string): Script {
	return {
		...data,
		id: fileName,
		author: ensureArray(data.author),
		category: ensureArray(data.category),
		links: data.links ?? [],
		description: data.description ?? undefined,
		versions: data.versions.map(transformVersion)
	};
}
