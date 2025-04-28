import { ComicRackScriptCategory } from '$lib';
import type { ComicRackScriptListItem } from '$lib/type/comic-rack-script.type';
import type { EntryGenerator, PageLoad } from './$types';

/**
 * Generates a static but dynamically generated list of script categories.
 */
export const entries: EntryGenerator = () => {
	return Object.values(ComicRackScriptCategory).map((slug) => ({ category: slug }));
};

export const prerender = true;
export const csr = true;

export const load: PageLoad = async ({
	params: { category }
}): Promise<{
	comicRackScripts: ComicRackScriptListItem[];
	category: string;
}> => {
	const comicRackScripts = await import(`$lib/generated/categories/${category}.json`).then(
		(m) => m.default as ComicRackScriptListItem[]
	);

	return {
		comicRackScripts,
		category
	};
};
