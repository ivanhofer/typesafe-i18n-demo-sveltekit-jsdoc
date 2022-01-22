import { detectLocale } from '$i18n/i18n-util'
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'

/** @type { import('@sveltejs/kit').Handle } */
export const handle = async ({ event, resolve }) => {
	const response = await resolve(event)

	// read language slug
	const [, lang] = event.url.pathname.split('/')

	// replace html lang attribute with correct language
	const body = await response.text();
	return new Response(body.replace('<html lang="en">', `<html lang="${lang}">`), response)
}


/** @type { import('@sveltejs/kit').GetSession } */
export const getSession = (event) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const headers = getHeaders(event)
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector({ headers })
	const locale = detectLocale(acceptLanguageDetector)

	return {
		locale,
	}
}

/** @type { (event: import('@sveltejs/kit').RequestEvent) => Record<string, string> } */
const getHeaders = (event) => {
	const headers = /** @type { Record<string, string> } */ ({})
	event.request.headers.forEach((value, key) => headers[key] = value)

	return headers
}