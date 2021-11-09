<script>
	import { setLocale, locale } from '$i18n/i18n-svelte'
	import { locales } from '$i18n/i18n-util'

	/**
    * @param { import('$i18n/i18n-types').Locales } locale 
    * @return { Promise<void> }
    */
	const switchLocale = async (locale) => {
		// update store => loads new dictionary from server
		await setLocale(locale)
	}
</script>

<ul>
	{#each locales as l}
		<li role="button" class:active={l === $locale} on:click={() => switchLocale(l)}>
			{l}
		</li>
	{/each}
</ul>
