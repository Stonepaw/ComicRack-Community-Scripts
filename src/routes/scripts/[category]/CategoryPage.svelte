<script lang="ts">
	import ScriptCardList from './ScriptCardList.svelte';
	import ScriptCategoryFilter from './ScriptCategoryFilter.svelte';
	import type { ComicRackScriptListItem } from '$lib/type/comic-rack-script.type';

	interface Props {
		page: string;
		comicRackScripts: ComicRackScriptListItem[];
	}

	let { page, comicRackScripts }: Props = $props();
</script>

<div class="mx-auto max-w-screen-lg">
	<div class="grid grid-cols-1 gap-y-4 sm:grid-cols-4">
		<div>
			<ScriptCategoryFilter {page} />
		</div>
		<div class="sm:col-span-3">
			<ScriptCardList {comicRackScripts} />
		</div>
	</div>
</div>
