import { mkdirSync, writeFileSync } from 'fs';
import path from 'node:path';
import { ComicRackScriptCategory } from '../src/lib';
import type {
	ComicRackScript,
	ComicRackScriptListItem
} from '../src/lib/type/comic-rack-script.type';
import { CATEGORIES_OUTPUT_DIR } from './paths';

function createScriptListItem(script: ComicRackScript): ComicRackScriptListItem {
	return {
		added: script.added,
		author: script.author,
		category: script.category,
		id: script.id,
		name: script.name,
		recommended: script.recommended,
		shortDescription: script.shortDescription,
		version: {
			date: script.versions[0]?.date,
			version: script.versions[0]?.version
		}
	};
}

type CategoriesWithAdditionalLists = ComicRackScriptCategory | 'all' | 'recommended';

/**
 * Groups scripts by category and returns a record of the scripts grouped by category.
 */
function groupScriptsByCategory(
	scripts: ComicRackScript[]
): Record<CategoriesWithAdditionalLists, ComicRackScriptListItem[]> {
	const categories: Record<CategoriesWithAdditionalLists, ComicRackScriptListItem[]> = {
		[ComicRackScriptCategory.fileManagement]: [],
		[ComicRackScriptCategory.metadata]: [],
		[ComicRackScriptCategory.other]: [],
		[ComicRackScriptCategory.scrapers]: [],
		[ComicRackScriptCategory.smartLists]: [],
		all: [],
		recommended: []
	};

	for (const script of scripts) {
		const listItem: ComicRackScriptListItem = createScriptListItem(script);

		for (const category of script.category) {
			categories[category].push(listItem);
		}
		categories.all.push(listItem);

		if (script.recommended) {
			categories.recommended.push(listItem);
		}
	}

	// Sort scripts by name within each category
	for (const key of Object.keys(categories)) {
		categories[key as CategoriesWithAdditionalLists].sort((a, b) => a.name.localeCompare(b.name));
	}

	return categories;
}

/**
 * Writes categorized scripts data to JSON files in the specified output directory.
 */
function writeCategories(
	categories: Record<CategoriesWithAdditionalLists, ComicRackScriptListItem[]>
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
