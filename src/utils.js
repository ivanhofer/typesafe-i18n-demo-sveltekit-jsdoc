// replaces the locale slug in a relative url
// e.g. /en/blog/article-1 => /de/blog/article-1

/**
 * @param { Location } location
 * @param { string } locale
 * @returns string
 */
export const replaceLocaleInUrl = ({ pathname, search }, locale) => {
	const [, , ...rest] = pathname.split('/')
	return `/${[locale, ...rest].join('/')}${search}`
}
