<script lang="ts">
	import type { VersionEntry } from './types';

	export let currentVersion: string;

	const versions: VersionEntry[] = [
		{
			version: currentVersion,
			date: '2024-02-15',
			isLatest: true,
			changes: [
				'Added support for custom metadata fields',
				'Improved performance when organizing large libraries',
				'Fixed issue with special characters in filenames'
			]
		},
		{
			version: '2.0.0',
			date: '2024-01-15',
			changes: [
				'Complete rewrite of the organization engine',
				'New smart folder creation wizard',
				'Added bulk editing capabilities',
				'Improved error handling and logging'
			]
		},
		{
			version: '1.5.2',
			date: '2023-12-01',
			changes: [
				'Fixed compatibility issues with latest ComicRack version',
				'Added support for nested smart folders',
				'Performance optimizations for large libraries'
			]
		}
	];
</script>

<section class="mt-8">
	<h2 class="text-lg font-bold">Version History</h2>
	<div class="mt-4 mb-8 rounded-lg border border-solid border-neutral-content">
		{#each versions as version, index (version.version)}
			<div class="border-b border-solid border-b-neutral-content p-4">
				<div class="mb-1 flex items-center gap-2 text-sm font-semibold">
					<span>Version {version.version ?? 'Lastest'}</span>

					{#if version.date}
						<span class="text-sm text-base-content/60">{version.date}</span>
					{/if}

					{#if index === 0}
						<div class="ml-auto badge badge-success">Latest</div>
					{:else}
						<a href="#" class="ml-auto link link-primary link-hover"> Download </a>
					{/if}
				</div>
				<ul class="ml-4 list-disc text-sm text-base-content/80">
					{#each version.changes as change (change)}
						<li>{change}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<style>
	.border-b:last-child {
		border-bottom: none;
	}
</style>
