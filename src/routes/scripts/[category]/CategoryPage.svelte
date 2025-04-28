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

<div class="mx-auto max-w-screen-lg pt-16">
	<div class="grid grid-cols-4">
		<div>
			<ScriptCategoryFilter {page} />
		</div>
		<div class="col-span-3">
			<ScriptCardList {comicRackScripts} />
		</div>
	</div>
</div>
