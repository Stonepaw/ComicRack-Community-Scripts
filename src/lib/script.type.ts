/**
 * The possible script categories
 */
export type ComicRackScriptCategory = 'file management';

/**
 * A link for the script as additional details.
 */
export interface ComicRackScriptLink {
	/**
	 * The display name of the link
	 */
	name: string;

	/**
	 * The url to link to
	 */
	url: string;
}

export interface ComicRackScriptVersion {
	/**
	 * The changes to render in the change log.
	 *
	 * This is formatted into sanitized html from the markdown yaml and can be omitted if no changes
	 * should be listed
	 */
	changes?: string;

	/**
	 * The date the script version was released as an ISO-8601 formatted date string. Time may or
	 * may not be included.
	 *
	 * This may be nullable if the date is unknown. If not provided then it won't show up in the
	 * recent changes section.
	 */
	date?: string;

	/**
	 * The download link for the script.
	 *
	 * This may be either an absolute link or a relative link for hosted scripts.
	 */
	url: string;

	/**
	 * The version number of the script.
	 *
	 * This may be optional if there isn't a named version
	 */
	version?: string;
}

export interface ComicRackScript {
	/**
	 * A ISO-8601 formatted date time string of when the script was added to the database.
	 */
	added: string;

	/**
	 * The author(s) of the script.
	 */
	author: string[];

	/**
	 * The categories the the script belongs to
	 */
	category: ComicRackScriptCategory[];

	/**
	 * The long description of the script which is formatted html rendered from markdown.
	 *
	 * This may be null if the script doesn't have a long description.
	 */
	description?: string;

	/**
	 * The simple string id of the script parsed from the script name
	 */
	id: string;

	/**
	 * Additional links to display for the script.
	 *
	 * This may simply be an empty array if there are no links.
	 */
	links: ComicRackScriptLink[];

	/**
	 * The display name of the script
	 */
	name: string;

	/**
	 * The short description of the script to display in the list view.
	 */
	shortDescription: string;

	/**
	 * The versions for the scripts. Versions should be sorted from oldest to newest.
	 */
	versions: ComicRackScriptVersion[];
}
