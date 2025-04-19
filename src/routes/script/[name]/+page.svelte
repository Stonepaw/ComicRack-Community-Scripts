<script lang="ts">
	import type { Plugin } from './types';
	import PluginHeader from './PluginHeader.svelte';
	import PluginAbout from './PluginAbout.svelte';
	import VersionHistory from './VersionHistory.svelte';
	import SidebarInfo from './SidebarInfo.svelte';

	let plugin: Plugin = {
		name: 'ComicRack Library Organizer',
		author: 'John Smith',
		description:
			'Automatically organize your comic library with smart folders and metadata-based rules',
		version: '2.1.0',
		category: 'File Management',
		lastUpdated: '2024-02-15'
	};
</script>

<main class="min-h-screen bg-base-200 py-10">
	<article class="card mx-auto max-w-screen-lg bg-base-100 p-12 shadow-sm">
		<PluginHeader {plugin} />

		<div class="mx-auto my-0 mb-12 flex max-w-[900px] gap-16">
			<div class="max-w-[600px] flex-[2]">
				<PluginAbout {plugin} />
				<VersionHistory currentVersion={plugin.version} />
			</div>

			<div class="max-w-[360px] flex-1">
				<SidebarInfo {plugin} />
			</div>
		</div>
	</article>
</main>
