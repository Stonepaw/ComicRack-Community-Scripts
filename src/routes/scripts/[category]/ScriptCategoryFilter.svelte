<script lang="ts">
	import {
		ComicRackScriptCategory,
		ComicRackScriptCategoryName
	} from '$lib/type/comic-rack-script-category';

	interface Props {
		page: string;
	}

	let { page }: Props = $props();
</script>

<nav class="category-nav pr-8">
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
				href="/">All</a
			>
		</li>
		{#each Object.values(ComicRackScriptCategory) as category (category)}
			<li>
				<a
					href="/scripts/{category}"
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
