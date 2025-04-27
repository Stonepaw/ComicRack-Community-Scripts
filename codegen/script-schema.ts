import type { JSONSchemaType } from 'ajv';
import type { ComicRackScriptCategory } from '../src/lib';

export type MaybeArray<T> = T | T[];

export interface ComicRackScriptVersionSchema {
	changes?: string | null;
	date?: string | null;
	url: string;
	version: string;
}

export interface ComicRackScriptLinkSchema {
	name: string;
	url: string;
}

export interface ComicRackScriptSchema {
	added: string;
	author: MaybeArray<string>;
	category: MaybeArray<ComicRackScriptCategory>;
	description?: string | null;
	links?: ComicRackScriptLinkSchema[] | null;
	name: string;
	shortDescription: string;
	versions: ComicRackScriptVersionSchema[];
}

export const COMIC_RACK_SCRIPT_SCHEMA: JSONSchemaType<ComicRackScriptSchema> = {
	$schema: 'http://json-schema.org/draft-07/schema#',
	title: 'Script',
	description: 'Represents a script with its metadata and versions',
	type: 'object',
	required: ['added', 'author', 'category', 'name', 'shortDescription', 'versions'],
	properties: {
		added: {
			type: 'string',
			description:
				'A ISO-8601 formatted date time string of when the script was added to the database.',
			format: 'date-time'
		},
		author: {
			description:
				'The author(s) of the script. This may be either a string or an array of strings',
			oneOf: [
				{
					type: 'string'
				},
				{
					type: 'array',
					items: {
						type: 'string'
					},
					uniqueItems: true
				}
			]
		},
		category: {
			description: 'The categories the script belongs to',
			oneOf: [
				{
					type: 'string',
					enum: ['file-management']
				},
				{
					type: 'array',
					items: {
						type: 'string',
						enum: ['file-management'],
						description: 'The categories for this script'
					},
					uniqueItems: true
				}
			]
		},
		description: {
			type: ['string'],
			description:
				'The long description of the script which can be either a simple string or complex markdown.',
			nullable: true
		},
		links: {
			nullable: true,
			type: 'array',
			description:
				'Additional links to display for the script. May be omitted if there are no links.',
			items: {
				type: 'object',
				description: 'A link for the script as additional details.',
				required: ['name', 'url'],
				properties: {
					name: {
						type: 'string',
						description: 'The display name of the link'
					},
					url: {
						type: 'string',
						description: 'The url to link to',
						format: 'uri'
					}
				}
			}
		},
		name: {
			type: 'string',
			description: 'The display name of the script'
		},
		shortDescription: {
			type: 'string',
			description: 'The short description of the script'
		},
		versions: {
			type: 'array',
			description: 'The versions for the scripts. Versions should be sorted from oldest to newest.',
			items: {
				type: 'object',
				required: ['url'],
				properties: {
					changes: {
						type: 'string',
						description:
							'The changes for this version in the change log and version history. This may be formatted markdown or a simple string and can be omitted for no displayed changes.',
						nullable: true
					},
					date: {
						type: ['string'],
						description:
							"The date the script version was released as an ISO-8601 formatted date string. Time may or may not be included. This may be nullable if the date is unknown. If not provided then it won't show up in the recent changes section.",
						format: 'date-time',
						nullable: true
					},
					url: {
						type: 'string',
						description: 'The download link for the script.',
						format: 'uri'
					},
					version: {
						type: ['string'],
						description:
							"The version number of the script. This may be optional if there isn't a named version"
					}
				}
			}
		}
	}
};
