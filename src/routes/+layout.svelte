<script>
	import Header from '$lib/Header.svelte'
	import { setLocale } from '$i18n/i18n-svelte'

	/** @type { import('./$types').LayoutData } */
	export let data

	setLocale(data.locale)
</script>

<Header />

<main>
	<slot />
</main>

<style lang="scss" global>
	@import '../styles/global.scss';
</style>
