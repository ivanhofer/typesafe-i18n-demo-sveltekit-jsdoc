<script context="module">
	import { replaceLocaleInUrl } from '../utils'
	import { baseLocale, locales } from '$i18n/i18n-util'
	import { loadLocaleAsync } from '$i18n/i18n-util.async'

	/** @type { import('@sveltejs/kit').Load } */
	export const load = async ({ url, session, params }) => {
		// fallback needed because of https://github.com/sveltejs/kit/issues/3647
		const lang = /** @type { import('$i18n/i18n-types').Locales } */ (params.lang || url.pathname.split('/')[1])

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
				redirect: replaceLocaleInUrl(url.pathname, baseLocale),
			}
		}

		// delete session locale since we don't need it to be sent to the client
		delete session.locale

		await loadLocaleAsync(lang)

		return { props: { locale: lang } }
	}
</script>

<script>
	import Header from '$lib/Header.svelte'
	import { setLocale } from '$i18n/i18n-svelte'

	export let locale
	setLocale(locale)
</script>

<Header />

<main>
	<slot />
</main>

<style lang="scss" global>
	@import '../styles/global.scss';
</style>
