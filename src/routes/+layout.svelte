<script>
	import '../app.css';
	import Nav from './Nav.svelte';

	let { children } = $props();
</script>

<Nav />

{@render children()}
