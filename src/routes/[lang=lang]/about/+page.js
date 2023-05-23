import { loadNamespaceAsync } from '$i18n/i18n-util.async.js'

export const load = async ({ parent }) => {
	const { locale } = await parent()
	await loadNamespaceAsync(locale, 'about')
}