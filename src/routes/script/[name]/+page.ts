import type { ComicRackScript } from '$lib/comic-rack-script.type';
import { SCRIPT_SLUGS } from '$lib/generated/script-slugs';
import type { EntryGenerator, PageLoad } from './$types';

/**
 * Generates a static but dynamically generated list of script slugs. This allows for a simple
 * configuration of scripts in yaml that are generated into a static site.
 */
export const entries: EntryGenerator = () => {
	return SCRIPT_SLUGS.map((slug) => ({ name: slug }));
};

export const prerender = true;

/**
 * Loads the generated details JSON as a pre page fetch. This allows a dynamic number of generated
 * scripts to be statically generated.
 */
export const load: PageLoad = async ({ params }) => {
	return await import(`$lib/generated/${params.name}.json`).then(
		(m) => m.default as ComicRackScript
	);
};
