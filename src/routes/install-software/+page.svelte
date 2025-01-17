<script lang="ts">
    import * as m from '$lib/paraglide/messages.js';
	import { GDLButton, GDLPage, GDLTitle, GDLSubtitle, GDLcc, navigateTo } from "$lib";
    import Icon from '@iconify/svelte';

    let opening = false;

</script>

<GDLPage>
    <GDLTitle>{m.install_software()}</GDLTitle>
    <GDLSubtitle>{m.install_software_subtitle()}</GDLSubtitle>

    <GDLcc orientation="vertical">
        <GDLButton on:click={() => {
            fetch("/open-pamac")
            opening = true;
            setTimeout(() => opening = false, 4000);
        }}>
            {m.open_pamac()}
            <Icon class="ms-3" 
                width="24" height="24"
                icon={opening 
                ? "svg-spinners:180-ring" 
                : "material-symbols:chevron-right"} />
        </GDLButton>
        <GDLButton secondary on:click={() => navigateTo("/devices")}>
            {m.next()}
        </GDLButton>
    </GDLcc>
</GDLPage>