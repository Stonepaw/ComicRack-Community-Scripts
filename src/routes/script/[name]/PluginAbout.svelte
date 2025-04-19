<script lang="ts">
	import type { Plugin } from './types';

	export let plugin: Plugin;
</script>

<section class="mt-6">
	<h2 class="text-lg font-bold">About</h2>
	<div class="mt-4 text-base-content/80">
		<p class="mb-4 text-sm leading-relaxed">{plugin.description}</p>

		<h3 class="mb-3 text-base font-bold text-zinc-900">Key Features</h3>
		<ul class="mb-4 ml-6 list-disc">
			<li class="mb-2 text-sm">
				Smart organization rules based on metadata, file names, and custom criteria
			</li>
			<li class="mb-2 text-sm">Automated library cleanup and maintenance</li>
			<li class="mb-2 text-sm">Bulk editing capabilities for efficient management</li>
			<li class="mb-2 text-sm">Nested smart folder support for advanced organization</li>
		</ul>

		<h3 class="mb-3 text-base font-bold text-zinc-900">How It Works</h3>
		<p class="mb-4 text-sm leading-relaxed">
			This script enhances ComicRack's organization capabilities by introducing powerful automation
			features. It analyzes your comic library's metadata and file structure to create intelligent
			organization rules. These rules can be based on any combination of metadata fields, including
			series, publisher, year, or custom tags.
		</p>
		<p class="mb-4 text-sm leading-relaxed">
			The smart folder system allows you to create dynamic collections that automatically update as
			new comics are added. This ensures your library stays organized without manual intervention.
			The bulk editing features let you modify metadata across multiple comics simultaneously,
			saving time and maintaining consistency.
		</p>
	</div>
</section>
