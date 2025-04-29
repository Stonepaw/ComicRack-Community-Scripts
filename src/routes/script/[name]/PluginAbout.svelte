<script lang="ts">
	import type { ComicRackScript } from '$lib';
	let { comicRackScript }: { comicRackScript: ComicRackScript } = $props();
</script>

<section class="prose">
	{#if comicRackScript.description}
		<!-- We sanitize the markdown/html when generating the script data	-->
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html comicRackScript.description}
	{:else}
		{comicRackScript.shortDescription}
	{/if}
</section>
