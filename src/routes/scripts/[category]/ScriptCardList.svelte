<script lang="ts">
	import type { ComicRackScriptListItem } from '$lib/type/comic-rack-script.type';
	import ScriptCard from './ScriptCard.svelte';

	interface Props {
		comicRackScripts: ComicRackScriptListItem[];
	}

	const { comicRackScripts }: Props = $props();
</script>

<div class="grid grid-cols-2 gap-6">
	{#each comicRackScripts as comicRackScript (comicRackScript.id)}
		<ScriptCard {comicRackScript} />
	{/each}
</div>
