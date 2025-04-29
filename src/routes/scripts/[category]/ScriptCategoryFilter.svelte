<script lang="ts">
	import {
		ComicRackScriptCategory,
		ComicRackScriptCategoryName
	} from '$lib/type/comic-rack-script-category';
	import { base } from '$app/paths';

	interface Props {
		page: string;
	}

	let { page }: Props = $props();
</script>

<nav class="sm:pr-8">
	<h4 class="mb-4 text-lg font-bold">Categories</h4>
	<ul class="list-none">
		<li>
			<a
				class={[
					'mb-2 block rounded p-2',
					{
						'bg-primary/10': page === 'all',
						'text-primary': page === 'all'
					}
				]}
				href="{base}/">All</a
			>
		</li>
		{#each Object.values(ComicRackScriptCategory).sort() as category (category)}
			<li>
				<a
					href="{base}/scripts/{category}"
					class={[
						'mb-2 block rounded p-2',
						{
							'bg-primary/10': page === category,
							'text-primary': page === category
						}
					]}
				>
					{ComicRackScriptCategoryName[category]}
				</a>
			</li>
		{/each}
	</ul>
</nav>
