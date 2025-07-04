<script lang="ts">
    import * as m from '$lib/paraglide/messages.js';
	import { GDLButton, GDLPage, GDLTitle, GDLSubtitle, GDLcc, navigateTo } from "$lib";
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';

    let layouts: Array<{code: string, name: string}> = [];
    let selectedLayouts: Array<string> = ['us'];

    onMount(async() => {
        const response = await fetch("/layouts/get-layouts");
        const data = await response.json();
        layouts = data;
    });

    console.log(layouts);

    const setLayouts = async() => {
        return await Promise.all([
                fetch('/layouts/set-kde-layouts', {
                method: 'POST',
                body: JSON.stringify({
                    selectedLayouts
                })
            }),
                fetch('/layouts/set-gnome-layouts', {
                method: 'POST',
                body: JSON.stringify({
                    selectedLayouts
                })
            })
        ])
    }

    const openKdeSettings = async() => {
        await fetch('/layouts/open-kde-settings');
    }

    const openGnomeSettings = async() => {
        await fetch('/layouts/open-gnome-settings');
    }

    const openInSettings = async() => {
        await Promise.all([
            openKdeSettings(),
            openGnomeSettings()
        ]);
    }

</script>

<GDLPage>
    <GDLTitle>{m.layouts()}</GDLTitle>
    <GDLSubtitle>{m.layouts_subtitle()}</GDLSubtitle>

    <GDLcc orientation="vertical">
        <GDLButton on:click={() => openInSettings()}>
            <Icon class="me-3" icon="mdi:settings" width="24" height="24" />
            {m.open_in_settings()}
        </GDLButton>
        <GDLButton secondary on:click={() => navigateTo('/finished') }>
            {m.next()}
        </GDLButton>
    </GDLcc>
</GDLPage>