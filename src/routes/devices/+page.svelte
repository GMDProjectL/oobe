<script lang="ts">
    import * as m from '$lib/paraglide/messages.js';
	import { GDLButton, GDLPage, GDLTitle, GDLSubtitle, GDLcc, navigateTo } from "$lib";
    import Icon from '@iconify/svelte';

</script>

<GDLPage>
    <GDLTitle>{m.devices()}</GDLTitle>
    <GDLSubtitle>{m.devices_subtitle()}</GDLSubtitle>
    <GDLcc orientation="vertical">
        <GDLButton on:click={() => navigateTo("/devices/corsair")}>
            {m.i_have_corsair()}
            <Icon class="ms-3" 
                width="24" height="24"
                icon="material-symbols:chevron-right" />
        </GDLButton>
        <GDLButton on:click={() => navigateTo("/devices/razer")}>
            {m.i_have_razer()}
            <Icon class="ms-3" 
                width="24" height="24"
                icon="material-symbols:chevron-right" />
        </GDLButton>
        <GDLButton secondary on:click={() => navigateTo("/essentials")}>
            {m.done()}
        </GDLButton>
    </GDLcc>
</GDLPage>