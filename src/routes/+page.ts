import type { ComicRackScriptListItem } from '$lib/type/comic-rack-script.type';
import type { PageLoad } from '../../.svelte-kit/types/src/routes/scripts/[category]/$types';

export const prerender = true;
export const csr = true;

export const load: PageLoad = async (): Promise<{
	comicRackScripts: ComicRackScriptListItem[];
}> => {
	const comicRackScripts = await import(`$lib/generated/categories/all.json`).then(
		(m) => m.default as ComicRackScriptListItem[]
	);

	return {
		comicRackScripts
	};
};
