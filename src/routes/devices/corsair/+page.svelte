<script lang="ts">
    import * as m from '$lib/paraglide/messages.js';
	import { GDLButton, GDLPage, GDLTitle, GDLSubtitle, GDLcc, navigateTo } from "$lib";
    import Icon from '@iconify/svelte';

    let installDriversAnimation = false;
    let activateDaemonAnimation = false;

</script>

<GDLPage>
    <GDLTitle>{m.i_have_corsair()}</GDLTitle>
    <GDLSubtitle>{m.corsair_subtitle()}</GDLSubtitle>
    <GDLcc orientation="vertical">
        <GDLButton on:click={() => {
            fetch("/open-pamac/package/ckb-next")
            installDriversAnimation = true;
            setTimeout(() => installDriversAnimation = false, 4000);
        }}>
            {m.corsair_install_drivers()}
                <Icon class="ms-3" 
                    width="24" height="24"
                    icon={installDriversAnimation 
                    ? "svg-spinners:180-ring" 
                    : "material-symbols:chevron-right"} />
        </GDLButton>


        <GDLButton on:click={() => {
            fetch("/systemd/activate-service/ckb-next-daemon.service")
            activateDaemonAnimation = true;
            setTimeout(() => activateDaemonAnimation = false, 4000);
        }}>
            {m.corsair_enable_daemon()}
            <Icon class="ms-3" 
                width="24" height="24"
                icon={activateDaemonAnimation 
                ? "svg-spinners:180-ring" 
                : "material-symbols:chevron-right"} />
        </GDLButton>


        <GDLButton secondary on:click={() => history.back()}>
            {m.back()}
        </GDLButton>
    </GDLcc>
</GDLPage>