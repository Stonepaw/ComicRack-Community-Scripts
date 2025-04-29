<script lang="ts">
	import type { ComicRackScriptListItem } from '$lib/type/comic-rack-script.type';
	import ScriptCard from './ScriptCard.svelte';

	interface Props {
		comicRackScripts: ComicRackScriptListItem[];
	}

	const { comicRackScripts }: Props = $props();
</script>

<div class="grid gap-6 md:grid-cols-2">
	{#each comicRackScripts as comicRackScript (comicRackScript.id)}
		<ScriptCard {comicRackScript} />
	{/each}
</div>
