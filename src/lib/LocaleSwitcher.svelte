<script>
	import { browser } from '$app/env'
	import { page } from '$app/stores'
	import { setLocale, locale } from '$i18n/i18n-svelte'
	import { locales } from '$i18n/i18n-util'
	import { loadLocaleAsync } from '$i18n/i18n-util.async'
	import { replaceLocaleInUrl } from '../utils'

	/**
	 * @param { import('$i18n/i18n-types').Locales } newLocale
	 * @param { boolean } updateHistoryState
	 * @return { Promise<void> }
	 */
	const switchLocale = async (newLocale, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return

		// load new dictionary from server
		await loadLocaleAsync(newLocale)

		// select locale
		setLocale(newLocale)

		// update `lang` attribute
		document.querySelector('html').setAttribute('lang', newLocale)

		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl(location.pathname, newLocale))
		}
	}

	// update locale when navigating via browser back/forward buttons
	/** @param { PopStateEvent } event */
	const handlePopStateEvent = async ({ state }) => switchLocale(state.locale, false)

	// update locale when page store changes
	$: if ( browser) {
		const lang = /** @type { import('$i18n/i18n-types').Locales } page.params.lang */ ($page.params.lang)
		switchLocale(lang, false)
		history.replaceState({ locale: lang }, '', replaceLocaleInUrl(location.pathname, lang))
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<ul>
	{#each locales as l}
		<li>
			<button type="button" class:active={l === $locale} on:click={() => switchLocale(l)}>
				{l}
			</button>
		</li>
	{/each}
</ul>
