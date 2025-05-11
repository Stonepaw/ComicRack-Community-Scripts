<script lang="ts">
	import type { ComicRackScriptListItem } from '$lib/type/comic-rack-script.type';
	import LocalDate from '$lib/components/LocalDate.svelte';
	import { ComicRackScriptCategoryName } from '$lib/type/comic-rack-script-category';

	interface Props {
		comicRackScript: ComicRackScriptListItem;
	}

	import { base } from '$app/paths';

	let { comicRackScript }: Props = $props();
</script>

<a href="{base}/script/{comicRackScript.id}" class="card-border card border-base-300 bg-base-100">
	<div class="card-body">
		<div class="flex items-center gap-3">
			<h3 class="text-xl font-bold">{comicRackScript.name}</h3>
			{#if comicRackScript.recommended}
				<span class="material-symbols-outlined text-success" aria-label="Recommended">
					editor_choice
				</span>
			{/if}
		</div>
		<div class="text-sm text-base-content/70">
			<span>by </span>
			<span>{comicRackScript.author.join(', ')}</span>
		</div>
		<p class="text-base-content/80">
			{comicRackScript.shortDescription}
		</p>
		<div class="flex justify-between text-sm text-base-content/60">
			<span>
				<span>Version </span>
				<span>{comicRackScript.version.version ?? 'N/A'}</span>
			</span>

			{#if comicRackScript.version?.date}
				<span><LocalDate date={comicRackScript.version.date} /></span>
			{/if}
		</div>
		{#if comicRackScript.category.length > 0}
			<div class="flex gap-3">
				{#each comicRackScript.category as category (category)}
					<span class="badge badge-primary">{ComicRackScriptCategoryName[category]}</span>
				{/each}
			</div>
		{/if}
	</div>
</a>
