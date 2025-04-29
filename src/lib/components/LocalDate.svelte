<script lang="ts">
	import { formatDate } from '../utils/format-date';

	let { date }: { date: Date | string } = $props();
</script>

{formatDate(date)}
