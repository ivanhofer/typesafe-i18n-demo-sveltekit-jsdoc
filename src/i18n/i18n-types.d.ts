// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType } from 'typesafe-i18n'
import type { LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'de'
	| 'en'

export type Translation = {
	/**
	 * Welcome to Svelte Fall Summit {year}
	 * @param {number} year
	 */
	'HI': RequiredParams1<'year'>
}

export type TranslationFunctions = {
	/**
	 * Welcome to Svelte Fall Summit {year}
	 */
	'HI': (arg: { year: number }) => LocalizedString
}

export type Formatters = {}

type Param<P extends string> = `{${P}}`

type Params1<P1 extends string> =
	`${string}${Param<P1>}${string}`

type RequiredParams1<P1 extends string> =
	| Params1<P1>
