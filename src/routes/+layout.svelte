<script>
	import '../app.css';
	import Nav from './Nav.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen bg-base-200">
	<Nav />

	<main>
		{@render children()}
	</main>
</div>
