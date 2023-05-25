<script>
	import { browser } from '$app/environment'
	import { invalidateAll } from '$app/navigation'
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
		setLocale(newLocale);

		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl($page.url, newLocale))
		}

		// run the `load` function again
		invalidateAll()
	}

	// update `lang` attribute
	$: browser && /** @type {HTMLElement} */(document.querySelector('html')).setAttribute('lang', $locale)

	// update locale when navigating via browser back/forward buttons
	/** @param { PopStateEvent } event */
	const handlePopStateEvent = async ({ state }) => switchLocale(state.locale, false)

	// update locale when page store changes
	$: if (browser) {
		const lang = /** @type { import('$i18n/i18n-types').Locales } */ ($page.params.lang)
		switchLocale(lang, false)
		history.replaceState({ ...history.state, locale: lang }, '', replaceLocaleInUrl($page.url, lang))
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<ul>
	{#each locales as l}
		<li>
			<a type="button" class:active={l === $locale} href={replaceLocaleInUrl($page.url, l)}>
				{l}
			</a>
		</li>
	{/each}
</ul>
