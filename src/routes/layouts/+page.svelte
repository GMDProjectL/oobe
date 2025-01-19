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

</script>

<GDLPage>
    <GDLTitle>{m.layouts()}</GDLTitle>
    <GDLSubtitle>{m.layouts_subtitle()}</GDLSubtitle>

    <GDLcc orientation="vertical">
        <div class="h-96 overflow-y-auto">
            {#each layouts as layout}
                <GDLButton secondary={selectedLayouts.includes(layout.code)}
                on:click={() => {
                    if (selectedLayouts.includes(layout.code)) {
                        selectedLayouts = selectedLayouts.filter(code => code !== layout.code);
                    }
                    else {
                        selectedLayouts = [...selectedLayouts, layout.code];
                    }
                }}>
                    { layout.name }
                </GDLButton>
                <div class="mb-5"></div>
            {/each}
        </div>
        <GDLButton secondary on:click={() => setLayouts().then(() => {
            navigateTo('/finished');
        })}>
            {m.next()}
        </GDLButton>
    </GDLcc>
</GDLPage>