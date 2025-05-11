import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';
import type { ComicRackScript, ComicRackScriptVersion } from '../src/lib';
import type { ComicRackScriptSchema, ComicRackScriptVersionSchema } from './script-schema';

/**
 * Ensures that a value is an array if it is not already.
 */
function ensureArray<T>(value: T | T[]): T[] {
	return Array.isArray(value) ? value : [value];
}

/**
 * Ò Transforms a version object by ensuring specific properties are set to `undefined` if not
 * present.
 *
 * @param {ComicRackScriptVersionSchema} version - The version object to transform, which may
 *   contain optional properties.
 *
 * @returns {ComicRackScriptVersion} A new version object with adjusted properties, ensuring
 *   `changes` and `date` are explicitly set to `undefined` if they are absent.
 */
function transformVersion(version: ComicRackScriptVersionSchema): ComicRackScriptVersion {
	return {
		...version,
		changes: version.changes != null ? convertMarkDown(version.changes) : undefined,
		date: version.date ?? undefined
	};
}

function convertMarkDown(value: string): string {
	return DOMPurify.sanitize(marked.parse(value, { async: false }));
}

/**
 * Normalizes the given schema script data by transforming and ensuring specific fields.
 *
 * @param {ComicRackScriptSchema} data - The script schema data to normalize.
 * @param {string} fileName - The file name associated with the script, used as its ID.
 *
 * @returns {ComicRackScript} The normalized script object containing validated and transformed
 *   fields.
 */
export function normalizeSchemaScript(
	data: ComicRackScriptSchema,
	fileName: string
): ComicRackScript {
	return {
		added: data.added,
		author: ensureArray(data.author),
		category: ensureArray(data.category),
		description: data.description != null ? convertMarkDown(data.description) : undefined,
		id: fileName,
		links: data.links ?? [],
		name: data.name,
		shortDescription: data.shortDescription,
		recommended: data.recommended ?? false,
		// In the YAML we store the versions in order from oldest to newest, but we display newest
		// to oldest on the page, so we reverse the order here.
		versions: data.versions.map(transformVersion).reverse()
	};
}
