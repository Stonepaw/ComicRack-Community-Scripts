<script lang="ts">
	import PluginHeader from './PluginHeader.svelte';
	import PluginAbout from './PluginAbout.svelte';
	import VersionHistory from './VersionHistory.svelte';
	import SidebarInfo from './SidebarInfo.svelte';
	import type { PageProps } from './$types';

	let props: PageProps = $props();

	const comicRackScript = props.data;
</script>

<svelte:head>
	<title>ComicRack Community Scripts - {comicRackScript.name}</title>
</svelte:head>

<main class="min-h-screen bg-base-200 py-10">
	<article class="card mx-auto max-w-screen-lg bg-base-100 p-12 shadow-sm">
		<PluginHeader {comicRackScript} />

		<div class="my-0 mt-6 mb-12 grid grid-cols-5 gap-16">
			<div class="col-span-3">
				<PluginAbout {comicRackScript} />
				<div class="mt-8">
					<VersionHistory versions={comicRackScript.versions} />
				</div>
			</div>

			<div class="sticky top-10 col-span-2 self-start">
				<SidebarInfo {comicRackScript} />
			</div>
		</div>
	</article>
</main>
