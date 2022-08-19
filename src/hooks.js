import { detectLocale } from '$i18n/i18n-util'
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'

/** @type { import('@sveltejs/kit').Handle } */
export const handle = async ({ event, resolve }) => {
	// read language slug
	const [, lang] = event.url.pathname.split('/')

	if (!lang) {
		const locale = getPreferredLocale(event)

		return new Response(null, {
			status: 302,
			headers: { 'Location': `/${locale}` }
		})
	}

	// replace html lang attribute with correct language
	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', lang) })
}

/** @type { (event: import('@sveltejs/kit').RequestEvent) => string } */
const getPreferredLocale = (event) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const headers = transformHeaders(event)
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector({ headers })

	return detectLocale(acceptLanguageDetector)
}

/** @type { (event: import('@sveltejs/kit').RequestEvent) => Record<string, string> } */
const transformHeaders = ({ request }) => {
	const headers = /** @type { Record<string, string> } */ ({})
	request.headers.forEach((value, key) => (headers[key] = value))

	return headers
}
