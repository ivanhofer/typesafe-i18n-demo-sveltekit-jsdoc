<script context="module">
	import { initI18n } from '$i18n/i18n-svelte'
	import { replaceLocaleInUrl } from '../utils'
	import { baseLocale, locales } from '$i18n/i18n-util'

	/** @type { import('@sveltejs/kit').Load } */
	export const load = async ({ page, session }) => {
		/** @type { import('$i18n/i18n-types').Locales } */
		const lang = (page.params.lang)

		// redirect to preferred language if user comes from page root
		if (!lang) {
			return {
				status: 302,
				redirect: `/${session.locale}`,
			}
		}

		// redirect to base locale if language is not present
		if (!locales.includes(lang)) {
			return {
				status: 302,
				redirect: replaceLocaleInUrl(page.path, baseLocale),
			}
		}

		// delete session locale since we don't need it to be sent to the client
		delete session.locale

		await initI18n(lang)

		return {}
	}
</script>

<script>
	import Header from '$lib/Header.svelte'
</script>

<Header />

<main>
	<slot />
</main>

<style lang="scss" global>
	@import '../styles/global.scss';
</style>
