import type { ComicRackScriptSchema, ComicRackScriptVersionSchema } from './script-schema';
import type { ComicRackScript, ComicRackScriptVersion } from '../src/lib';

/**
 * Ensures that a value is an array if it is not already.
 */
function ensureArray<T>(value: T | T[]): T[] {
	return Array.isArray(value) ? value : [value];
}

/**Ò
 * Transforms a version object by ensuring specific properties are set to `undefined` if not present.
 *
 * @param {ComicRackScriptVersionSchema} version - The version object to transform, which may contain optional properties.
 * @return {ComicRackScriptVersion} A new version object with adjusted properties, ensuring `changes` and `date` are explicitly set to `undefined` if they are absent.
 */
function transformVersion(version: ComicRackScriptVersionSchema): ComicRackScriptVersion {
	return {
		...version,
		changes: version.changes ?? undefined,
		date: version.date ?? undefined
	};
}

/**
 * Normalizes the given schema script data by transforming and ensuring specific fields.
 *
 * @param {ComicRackScriptSchema} data - The script schema data to normalize.
 * @param {string} fileName - The file name associated with the script, used as its ID.
 * @return {ComicRackScript} The normalized script object containing validated and transformed fields.
 */
export function normalizeSchemaScript(
	data: ComicRackScriptSchema,
	fileName: string
): ComicRackScript {
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
