<script lang="ts">
    import * as m from '$lib/paraglide/messages.js';
	import { GDLButton, GDLPage, GDLTitle, GDLSubtitle, GDLcc } from "$lib";
</script>

<GDLPage>
    <GDLTitle>{m.finished()}</GDLTitle>
    <GDLSubtitle>{m.finished_subtitle()}</GDLSubtitle>

    <GDLcc orientation="vertical">
        <GDLButton secondary on:click={() => window.close()}>
            {m.done()}
        </GDLButton>
    </GDLcc>
</GDLPage>