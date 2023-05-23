import LL, { setLocale } from '$i18n/i18n-svelte'
import { get } from 'svelte/store'

export const load = async ({ parent }) => {
	// wait for `+layout.ts` to load dictionary and pass locale information
	const { locale } = await parent()

	// if you need to output a localized string in a `load` function,
	// you always need to call `setLocale` right before you access the `LL` store
	setLocale(locale)
	// get the translation functions value from the store
	const $LL = get(LL)
	return {
		title: $LL.title({ year: 2021 }),
	}
}
