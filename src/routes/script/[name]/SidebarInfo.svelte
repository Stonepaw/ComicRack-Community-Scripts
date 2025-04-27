<script lang="ts">
	import type { ComicRackScript } from '$lib';
	import LocalDate from '$lib/components/LocalDate.svelte';

	let { comicRackScript }: { comicRackScript: ComicRackScript } = $props();
	let currentVersion = comicRackScript.versions[0];
	let links = comicRackScript.links;
</script>

<aside class="rounded-lg bg-base-200 p-8">
	<a class="btn w-full btn-primary" target="_blank" href={currentVersion.url}>Download</a>
	<div class="mt-6">
		<div class="text-sm text-base-content/70">Current Version</div>
		<div>{currentVersion.version ?? 'Latest'}</div>
	</div>

	{#if currentVersion.date}
		<div class="mt-3">
			<div class="text-sm text-base-content/70">Last Updated</div>
			<div><LocalDate date={currentVersion.date} /></div>
		</div>
	{/if}

	{#if links.length}
		<div class="mt-3">
			<div class="flex flex-wrap gap-3">
				{#each links as link (link.url)}
					<a href={link.url} class="link link-primary link-hover" target="_blank">{link.name}</a>
				{/each}
			</div>
		</div>
	{/if}
</aside>
