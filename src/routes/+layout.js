import { redirect } from '@sveltejs/kit';
import { replaceLocaleInUrl } from '../utils'
import { baseLocale, locales } from '$i18n/i18n-util'
import { loadLocaleAsync } from '$i18n/i18n-util.async'

/** @type { import('@sveltejs/kit').LayoutLoad } */
export const load = async ({ url, session, params }) => {
	// fallback needed because of https://github.com/sveltejs/kit/issues/3647
	const lang = /** @type { import('$i18n/i18n-types').Locales } */ (params.lang || url.pathname.split('/')[1])

	// redirect to preferred language if user comes from page root
	if (!lang) {
		throw redirect(302, `/${session.locale}`);
	}

	// redirect to base locale if language is not present
	if (!locales.includes(lang)) {
		throw redirect(302, replaceLocaleInUrl(url.pathname, baseLocale));
	}

	// delete session locale since we don't need it to be sent to the client
	delete session.locale

	await loadLocaleAsync(lang)

	return { locale: lang }
}
