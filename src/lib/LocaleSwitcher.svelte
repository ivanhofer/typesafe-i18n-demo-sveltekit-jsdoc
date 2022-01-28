<script>
	import { page } from '$app/stores'
	import { setLocale, locale } from '$i18n/i18n-svelte'
	import { locales } from '$i18n/i18n-util'
	import { replaceLocaleInUrl } from '../utils'

	/**
	 * @param { import('$i18n/i18n-types').Locales } locale
	 * @return { Promise<void> }
	 */
	const switchLocale = async (locale) => {
		// update store => loads new dictionary from server
		await setLocale(locale)

		// update url to reflect locale changes
		history.pushState({ locale }, '', replaceLocaleInUrl(location.pathname, locale))

		// update `lang` attribute
		document.querySelector('html').setAttribute('lang', locale)
	}

	// update locale when navigating via browser back/forward buttons
	/** @param { PopStateEvent } event */
	const handlePopStateEvent = async (event) => event.state.locale && (await setLocale(event.state.locale))

	// update locale when page store changes
	$: setLocale(/** @type { import('$i18n/i18n-types').Locales } page.params.lang */ ($page.params.lang))
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
