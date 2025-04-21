import { type JSONSchemaType, Ajv } from 'ajv';
import ajvFormats from 'ajv-formats';
import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import type { ScriptCategory } from '../src/lib';

interface ScriptMetadata {
	added: string;
	name: string;
	author: string[] | string;
	category: ScriptCategory | ScriptCategory[];
	shortDescription: string;
	description?: string;
	links?: { name: string; url: string }[];
	versions: { version?: string; date?: string; changes?: string[]; url: string }[];
}

const schema = load(
	readFileSync('./codegen/script-schema.yaml', 'utf8')
) as JSONSchemaType<ScriptMetadata>;

const ajv = new Ajv();
ajvFormats(ajv);

export const isValidScript = ajv.compile(schema);
