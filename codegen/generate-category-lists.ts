import { mkdirSync, writeFileSync } from 'fs';
import path from 'node:path';
import { ComicRackScriptCategory } from '../src/lib';
import {
	type ComicRackScript,
	type ComicRackScriptListItem
} from '../src/lib/type/comic-rack-script.type';
import { CATEGORIES_OUTPUT_DIR } from './paths';

function groupScriptsByCategory(
	scripts: ComicRackScript[]
): Record<ComicRackScriptCategory | 'all', ComicRackScriptListItem[]> {
	const categories: Record<ComicRackScriptCategory, ComicRackScriptListItem[]> = Object.fromEntries(
		Object.values(ComicRackScriptCategory).map(
			(category): [ComicRackScriptCategory, ComicRackScriptListItem[]] => {
				return [category, []];
			}
		)
	) as Record<ComicRackScriptCategory, ComicRackScriptListItem[]>;

	const all: ComicRackScriptListItem[] = [];

	for (const script of scripts) {
		const listItem: ComicRackScriptListItem = {
			added: script.added,
			author: script.author,
			shortDescription: script.shortDescription,
			name: script.name,
			id: script.id,
			category: script.category,
			version: {
				date: script.versions[0]?.date,
				version: script.versions[0]?.version
			}
		};

		for (const category of script.category) {
			categories[category].push(listItem);
		}
		all.push(listItem);
	}

	// Sort scripts by name within each category
	for (const category of Object.values(ComicRackScriptCategory)) {
		categories[category].sort((a, b) => a.name.localeCompare(b.name));
	}
	all.sort((a, b) => a.name.localeCompare(b.name));

	return { ...categories, all };
}

function writeCategories(
	categories: Record<ComicRackScriptCategory | 'all', ComicRackScriptListItem[]>
): void {
	mkdirSync(path.join(CATEGORIES_OUTPUT_DIR), { recursive: true });

	for (const [category, scripts] of Object.entries(categories)) {
		console.log(`Writing ${scripts.length} scripts to ${category}.json`);
		const outputPath = path.join(CATEGORIES_OUTPUT_DIR, `${category}.json`);
		writeFileSync(outputPath, JSON.stringify(scripts, null, 2));
	}
}

/**
 * Generates a named category for each script category and writes them to the "generated" directory.
 */
export function generateCategoryLists(scripts: ComicRackScript[]): void {
	const categories = groupScriptsByCategory(scripts);
	writeCategories(categories);
}
