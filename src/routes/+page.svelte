<script lang="ts">
	import CategoryPage from './scripts/[category]/CategoryPage.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<CategoryPage comicRackScripts={data.comicRackScripts} page="all" />
