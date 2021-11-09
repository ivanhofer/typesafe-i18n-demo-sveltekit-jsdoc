<script context="module">
	import { initI18n } from '$i18n/i18n-svelte'

	/** @type { import('@sveltejs/kit').Load } */
	export const load = async ({ session }) => {
		await initI18n(session.locale)

		return {}
	}
</script>

<script lang="ts">
	import Header from '$lib/Header.svelte'
</script>

<Header />

<main>
	<slot />
</main>

<style lang="scss" global>
	@import '../styles/global.scss';
</style>
