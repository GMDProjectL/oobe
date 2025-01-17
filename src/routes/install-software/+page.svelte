<script lang="ts">
    import * as m from '$lib/paraglide/messages.js';
	import { GDLButton, GDLPage, GDLTitle, GDLSubtitle, GDLcc } from "$lib";

</script>

<GDLPage>
    <GDLTitle>{m.install_software()}</GDLTitle>
    <GDLSubtitle>{m.install_software_subtitle()}</GDLSubtitle>

    <GDLcc>
        <GDLButton on:click={() => fetch("/open-pamac")}>
            {m.open_pamac()}
        </GDLButton>
    </GDLcc>
</GDLPage>