<script lang="ts">
	import type { ComicRackScript } from '$lib';
	let { comicRackScript }: { comicRackScript: ComicRackScript } = $props();
</script>

<section class="prose mt-6">
	{comicRackScript.description}
</section>
