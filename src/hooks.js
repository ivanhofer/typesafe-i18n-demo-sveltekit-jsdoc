import { detectLocale } from '$i18n/i18n-util'
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'

/** @type { import('@sveltejs/kit').Handle } */
export const handle = async ({ request, resolve }) => {
	const response = await resolve(request)

	// read language slug
	const [, lang] = request.path.split('/')

	return {
		...response,
		// replace html lang attribute with correct language
		body: (response.body || '').toString().replace('<html lang="en">', `<html lang="${lang}">`),
	}
}


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
