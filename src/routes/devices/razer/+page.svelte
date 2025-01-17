<script lang="ts">
    import * as m from '$lib/paraglide/messages.js';
	import { GDLButton, GDLPage, GDLTitle, GDLSubtitle, GDLcc, navigateTo } from "$lib";
    import Icon from '@iconify/svelte';

    let installDriversAnimation = false;
    let installUtilityAnimation = false;

</script>

<GDLPage>
    <GDLTitle>{m.i_have_razer()}</GDLTitle>
    <GDLSubtitle>{m.razer_subtitle()}</GDLSubtitle>
    <GDLcc orientation="vertical">
        <GDLButton on:click={() => {
            fetch("/open-pamac/package/openrazer-daemon")
            installDriversAnimation = true;
            setTimeout(() => installDriversAnimation = false, 4000);
        }}>
            {m.razer_install_drivers()}
                <Icon class="ms-3" 
                    width="24" height="24"
                    icon={installDriversAnimation 
                    ? "svg-spinners:180-ring" 
                    : "material-symbols:chevron-right"} />
        </GDLButton>


        <GDLButton on:click={() => {
            fetch("/open-pamac/package/polychromatic")
            installUtilityAnimation = true;
            setTimeout(() => installUtilityAnimation = false, 4000);
        }}>
            {m.razer_install_utility()}
            <Icon class="ms-3" 
                width="24" height="24"
                icon={installUtilityAnimation 
                ? "svg-spinners:180-ring" 
                : "material-symbols:chevron-right"} />
        </GDLButton>


        <GDLButton on:click={() => {
            fetch("/razer/tweak")
            installUtilityAnimation = true;
            setTimeout(() => installUtilityAnimation = false, 4000);
        }}>
            {m.razer_tweak_user()}
            <Icon class="ms-3" 
                width="24" height="24"
                icon={installUtilityAnimation 
                ? "svg-spinners:180-ring" 
                : "material-symbols:chevron-right"} />
        </GDLButton>


        <GDLButton secondary on:click={() => history.back()}>
            {m.back()}
        </GDLButton>
    </GDLcc>
</GDLPage>