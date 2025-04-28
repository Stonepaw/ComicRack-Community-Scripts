<script lang="ts">
	import type { PageProps } from './$types';
	import CategoryPage from './CategoryPage.svelte';

	let { data }: PageProps = $props();
</script>

<CategoryPage comicRackScripts={data.comicRackScripts} page={data.category} />
