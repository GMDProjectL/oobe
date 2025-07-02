<script lang="ts">
    import * as m from '$lib/paraglide/messages.js';
	import { GDLButton, GDLPage, GDLTitle, GDLSubtitle, GDLcc, navigateTo } from "$lib";
    import Icon from '@iconify/svelte';
    import Swal from 'sweetalert2';

</script>

<GDLPage>
    <GDLTitle>{m.essentials_title()}</GDLTitle>
    <GDLSubtitle>{m.essentials_subtitle()}</GDLSubtitle>

    <GDLcc orientation="vertical">
        <GDLButton on:click={() => {
            fetch("/open-pamac/package/telegram-desktop")
        }}>
            <Icon class="me-3" icon="ic:baseline-telegram" width="24" height="24" />
            Telegram Desktop
        </GDLButton>

        
        <GDLButton on:click={() => {
            fetch("/open-pamac/package/google-chrome")
        }}>
            <Icon class="me-3" icon="ph:google-chrome-logo-fill" width="24" height="24" />
            Google Chrome
        </GDLButton>

        
        <GDLButton on:click={() => {
            fetch("/open-pamac/package/obs-studio")
        }}>
            <Icon class="me-3" icon="simple-icons:obsstudio" width="24" height="24" />
            OBS Studio
        </GDLButton>

        
        <GDLButton on:click={() => {
            fetch("/open-pamac/package/gpu-screen-recorder-gtk")
        }}>
            <Icon class="me-3" icon="mdi:gpu" width="24" height="24" />
            GPU Screen Recorder
        </GDLButton>

        
        <GDLButton on:click={() => {
            fetch("/open-pamac/package/vesktop")
        }}>
            <Icon class="me-3" icon="ic:baseline-discord" width="24" height="24" />
            Vesktop
        </GDLButton>

        
        <GDLButton on:click={() => {
            fetch("/open-pamac/package/discord")
        }}>
            <Icon class="me-3" icon="ic:baseline-discord" width="24" height="24" />
            Discord
        </GDLButton>

        
        <GDLButton on:click={() => {
            fetch("/open-pamac/package/kdenlive")
        }}>
            <Icon class="me-3" icon="simple-icons:kdenlive" width="24" height="24" />
            Kdenlive
        </GDLButton>

        
        <GDLButton secondary on:click={() => navigateTo("/layouts")}>
            {m.next()}
        </GDLButton>

        <div class="mb-2"></div>
    </GDLcc>
</GDLPage>