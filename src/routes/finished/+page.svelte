<script lang="ts">
    import * as m from '$lib/paraglide/messages.js';
	import { GDLButton, GDLPage, GDLTitle, GDLSubtitle, GDLcc } from "$lib";
    import { onMount } from 'svelte';

    onMount(() => {
        fetch('/finished/remove-from-autostart')
    });
</script>

<GDLPage>
    <GDLTitle>{m.finished()}</GDLTitle>
    <GDLSubtitle>{m.finished_subtitle()}</GDLSubtitle>

    <GDLcc orientation="vertical">
        <div class="w-96"></div>
        <GDLButton secondary on:click={() => {
                        fetch('/quit')
                        window.close();
                    }}>
            {m.done()}
        </GDLButton>
        <GDLButton on:click={() => fetch("/finished/reboot")}>
            ({m.you_can_reboot()})
        </GDLButton>
    </GDLcc>
</GDLPage>