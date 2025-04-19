import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => {
	return [
		{
			name: 'library-organizer'
		}
	];
};

export const prerender = true;

export const load: PageLoad = async ({
	params
}): Promise<{
	name: string;
}> => {
	// const data = await import(`$lib/generated/${params.name}.json`);

	return {
		name: params.name
		// script: data as ScriptDetails
		// post: {
		// 	title: `Title for ${params.name} goes here`,
		// 	content: data.name
		// }
	};
};
