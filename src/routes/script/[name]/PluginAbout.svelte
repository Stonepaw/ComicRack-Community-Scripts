<script lang="ts">
	import type { ComicRackScript } from '$lib';
	let { comicRackScript }: { comicRackScript: ComicRackScript } = $props();
</script>

<section class="prose">
	<!-- We sanitize the markdown/html when generating the script data	-->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html comicRackScript.description}
</section>
