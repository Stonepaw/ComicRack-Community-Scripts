<script lang="ts">
	import type { ComicRackScriptVersion } from '$lib';
	import LocalDate from '$lib/components/LocalDate.svelte';
	let { versions }: { versions: ComicRackScriptVersion[] } = $props();
</script>

<section>
	<h2 class="text-lg font-bold">Version History</h2>
	<div class="mt-4 mb-8 rounded-lg border border-solid border-base-300">
		{#each versions as version, index (index)}
			<div class="border-b border-solid border-b-base-300 p-4">
				<div class="mb-1 flex items-center gap-2 text-sm font-semibold">
					<span>Version {version.version ?? 'Lastest'}</span>

					{#if version.date}
						<span class="text-sm text-base-content/60">
							<LocalDate date={version.date} />
						</span>
					{/if}

					{#if index === 0}
						<div class="ml-auto badge badge-success">Latest</div>
					{:else if version.url}
						<a href={version.url} class="ml-auto link link-primary link-hover" target="_blank">
							Download
						</a>
					{/if}
				</div>
				{#if version.changes}
					<!-- We sanitize the markdown/html when generating the script data	-->
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html version.changes}
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
