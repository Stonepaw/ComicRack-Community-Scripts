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

<article class="card-border card mx-auto max-w-screen-lg border-base-300 bg-base-100 shadow-sm">
	<div class="card-body grid gap-x-16 gap-y-6 p-12 md:grid-cols-5">
		<div class="md:col-span-3">
			<PluginHeader {comicRackScript} />
		</div>

		<div class="top-10 self-start md:sticky md:col-span-2 md:row-span-3">
			<SidebarInfo {comicRackScript} />
		</div>

		<div class="md:col-span-3">
			<PluginAbout {comicRackScript} />
		</div>

		<div class="md:col-span-3">
			<VersionHistory versions={comicRackScript.versions} />
		</div>
	</div>
</article>
