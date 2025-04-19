<script lang="ts">
	import type { Plugin } from './types';

	export let plugin: Plugin;
</script>

<section>
	<h1 class="text-2xl font-bold">{plugin.name}</h1>
	<div class="mt-2 text-sm text-base-content/70">
		<span>by {plugin.author}</span>
	</div>
</section>
