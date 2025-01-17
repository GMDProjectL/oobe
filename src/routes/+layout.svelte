<script lang="ts">
	import { i18n } from "$lib/i18n";
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	import '../app.css';
	let { children } = $props();

	import { onNavigate } from '$app/navigation';
    import { onMount, tick } from "svelte";
	import { switchToLanguage } from "$lib";

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	onMount(async() => {
		const available = [
			"en",
			"ru"
		]

		console.log(navigator.language.slice(0, 2));

		const switchTo = available.includes(navigator.language.slice(0, 2)) ? navigator.language.slice(0, 2) : "en";

		await tick();

		// @ts-ignore
		switchToLanguage(switchTo);
	})
</script>

<title>ProjectGDL OOBE</title>

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
