import { isLocale } from '$i18n/i18n-util'

// only accept valid languages as a segment in the URL
export const match = (param) => {
	return isLocale(param)
}
