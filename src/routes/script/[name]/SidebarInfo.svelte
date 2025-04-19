<script lang="ts">
	import type { Plugin } from './types';

	export let plugin: Plugin;
</script>

<aside class="sticky top-10 rounded-lg bg-base-200 p-8">
	<button class="btn w-full btn-primary">Download</button>
	<div class="mt-6">
		<div class="text-sm text-base-content/70">Current Version</div>
		<div>{plugin.version ?? 'Latest'}</div>
	</div>
	<div class="mt-3">
		<div class="text-sm text-base-content/70">Last Updated</div>
		<div>{plugin.lastUpdated}</div>
	</div>

	<div class="mt-3">
		<div class="flex flex-col gap-3">
			<a href="#" class="link link-primary link-hover">Documentation</a>
			<a href="#" class="link link-primary link-hover">Project Page</a>
		</div>
	</div>
</aside>
