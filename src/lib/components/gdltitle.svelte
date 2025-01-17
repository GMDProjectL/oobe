<script lang="ts">
	let { children } = $props();
</script>

<h1 class="text-4xl text-center mt-10 font-bold">
    {@render children()}
</h1>