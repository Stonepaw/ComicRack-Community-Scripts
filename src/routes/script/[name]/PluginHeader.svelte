<script lang="ts">
	import type { ComicRackScript } from '$lib';
	let { comicRackScript }: { comicRackScript: ComicRackScript } = $props();
</script>

<section>
	<h1 class="text-2xl font-bold">{comicRackScript.name}</h1>
	<div class="mt-2 text-sm text-base-content/70">
		<span>by {comicRackScript.author.join(', ')}</span>
	</div>

	<div class="mt-2 flex gap-2">
		{#each comicRackScript.category as category (category)}
			<div class="badge badge-primary">{category}</div>
		{/each}
	</div>
</section>
