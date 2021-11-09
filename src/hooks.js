import { detectLocale } from '$i18n/i18n-util'
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'

/** @type { import('@sveltejs/kit').GetSession } */
export const getSession = (request) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request)
	const locale = detectLocale(acceptLanguageDetector)

	return {
		locale,
	}
}
