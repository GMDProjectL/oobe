<script lang="ts">
	let { children, orientation = "horizontal" } = $props();
</script>

<div class={"flex w-full justify-center mt-10 gap-5" + (
    orientation == "vertical"
    ? " flex-col"
    : ""
)}>
    {@render children()}
</div>