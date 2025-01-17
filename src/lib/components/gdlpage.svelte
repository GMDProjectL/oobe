<script lang="ts">
	let { children } = $props();
</script>

<div class="flex w-full h-screen justify-center items-center">
    <div>
        {@render children()}
    </div>
</div>