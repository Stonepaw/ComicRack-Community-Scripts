<script>
	import '../app.css';
	import Nav from './Nav.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen bg-base-200">
	<Nav />

	<main class="px-5 py-4 md:py-10">
		{@render children()}
	</main>
</div>
