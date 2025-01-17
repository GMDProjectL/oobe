<script lang="ts">
    import { createEventDispatcher } from "svelte";

	let { children, secondary = false, disabled = false } = $props();

    const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore event_directive_deprecated -->
<!-- svelte-ignore a11y_invalid_attribute -->
<a class={
    "gdl-btn p-3 rounded-md w-full"
    + " text-center active:translate-y-1 transition-all flex justify-center items-center outline-0" 
    + (secondary && !disabled
        ? " bg-white hover:bg-zinc-100 active:bg-zinc-400 text-black" 
        : " bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-800")
    + (disabled ? " text-zinc-600" : "")
    } href="#" 
    on:click|preventDefault={
        () => {
            dispatch("click");
        }
    }>
        {@render children()}
</a>

<style>
    .gdl-btn {
        @apply select-none;
        transition-duration: 400ms;
    }
</style>