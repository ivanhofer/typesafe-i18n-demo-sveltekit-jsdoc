import { redirect } from '@sveltejs/kit';
import { replaceLocaleInUrl } from '../utils'
import { baseLocale, locales } from '$i18n/i18n-util'
import { loadLocaleAsync } from '$i18n/i18n-util.async'

/** @typedef { import('$i18n/i18n-types').Locales } Locales } */

/** @type { import('./$types').LayoutLoad<{ locale: Locales }> } */
export const load = async ({ url, params }) => {
	// fallback needed because of https://github.com/sveltejs/kit/issues/3647
	const lang = /** @type { Locales } */ (params.lang || url.pathname.split('/')[1])

	// redirect to base locale if language is not present
	if (!locales.includes(lang)) {
		throw redirect(302, replaceLocaleInUrl(url.pathname, baseLocale));
	}

	await loadLocaleAsync(lang)

	return { locale: lang }
}
