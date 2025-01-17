<script lang="ts">
    import { createEventDispatcher } from "svelte";

	let { children } = $props();

    const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore event_directive_deprecated -->
<!-- svelte-ignore a11y_invalid_attribute -->
<button on:click={() => dispatch("click")} 
    class="gdl-btn bg-zinc-600 rounded-full p-2 scale-125 outline-none hover:bg-zinc-700 active:bg-zinc-500 transition-all"
    >
    {@render children()}
</button>

<style>
    .gdl-btn {
        @apply select-none;
        transition-duration: 400ms;
    }
</style>