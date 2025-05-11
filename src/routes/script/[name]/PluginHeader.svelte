<script lang="ts">
	import type { ComicRackScript } from '$lib';
	import { ComicRackScriptCategoryName } from '$lib/type/comic-rack-script-category';
	let { comicRackScript }: { comicRackScript: ComicRackScript } = $props();
</script>

<section>
	<div class="flex items-center gap-3">
		<h1 class="text-2xl font-bold">{comicRackScript.name}</h1>

		{#if comicRackScript.recommended}
			<span class="material-symbols-outlined text-success" aria-label="Recommended">
				editor_choice
			</span>
		{/if}
	</div>
	<div class="mt-2 text-sm text-base-content/70">
		<span>by {comicRackScript.author.join(', ')}</span>
	</div>

	<div class="mt-2 flex gap-2">
		{#each comicRackScript.category as category (category)}
			<div class="badge badge-primary">{ComicRackScriptCategoryName[category]}</div>
		{/each}
	</div>
</section>
