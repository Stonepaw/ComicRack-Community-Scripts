<script lang="ts">
	import type { ComicRackScriptVersion } from '$lib';
	let { versions }: { versions: ComicRackScriptVersion[] } = $props();
	const formatter = Intl.DateTimeFormat(undefined, { dateStyle: 'long' });
</script>

<section>
	<h2 class="text-lg font-bold">Version History</h2>
	<div class="mt-4 mb-8 rounded-lg border border-solid border-neutral-content">
		{#each versions as version, index (index)}
			<div class="border-b border-solid border-b-neutral-content p-4">
				<div class="mb-1 flex items-center gap-2 text-sm font-semibold">
					<span>Version {version.version ?? 'Lastest'}</span>

					{#if version.date}
						<span class="text-sm text-base-content/60">
							{formatter.format(new Date(version.date))}
						</span>
					{/if}

					{#if index === 0}
						<div class="ml-auto badge badge-success">Latest</div>
					{:else}
						<a href={version.url} class="ml-auto link link-primary link-hover" target="_blank">
							Download
						</a>
					{/if}
				</div>
				{#if version.changes}
					{version.changes}
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
	.border-b:last-child {
		border-bottom: none;
	}
</style>
