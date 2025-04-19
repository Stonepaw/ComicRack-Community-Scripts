export interface Plugin {
	name: string;
	author: string;
	description: string;
	version: string;
	category: string;
	lastUpdated: string;
}

export interface VersionEntry {
	version: string;
	date: string;
	isLatest?: boolean;
	changes: string[];
}
