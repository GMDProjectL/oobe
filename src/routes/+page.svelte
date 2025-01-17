<script lang="ts">
    import * as m from '$lib/paraglide/messages.js';
    import Icon from "@iconify/svelte";
	import { GDLTitle, GDLSubtitle, GDLcc, GDLPage, GDLMiniButton, navigateTo } from "$lib";

</script>

<GDLPage>
    <GDLTitle>{m.welcome()}</GDLTitle>
    <GDLSubtitle>{m.easy_to_use()}</GDLSubtitle>

    <GDLcc>
        <GDLMiniButton on:click={() => navigateTo('/install-software')}>
            <Icon icon="material-symbols:chevron-right" />
        </GDLMiniButton>
    </GDLcc>
</GDLPage>