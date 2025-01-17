
import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
import { i18n } from '$lib/i18n';
import { page } from '$app/state';
import { goto } from '$app/navigation';
import GDLButton from './components/gdlbutton.svelte';
import GDLTitle from './components/gdltitle.svelte';
import GDLSubtitle from './components/gdlsubtitle.svelte';
import GDLcc from './components/gdlcc.svelte';
import GDLPage from './components/gdlpage.svelte'
import GDLMiniButton from './components/gdlminibutton.svelte';


function switchToLanguage(newLanguage: AvailableLanguageTag) {
	const canonicalPath = i18n.route(page.url.pathname);
	const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
	goto(localisedPath);
}

function navigateTo(path: string) {
	const canonicalPath = i18n.route(path);
	const localisedPath = i18n.resolveRoute(canonicalPath);
	goto(localisedPath);
}

export {
    switchToLanguage,
	navigateTo,
    GDLButton,
	GDLTitle,
	GDLSubtitle,
	GDLcc,
	GDLPage,
	GDLMiniButton
}