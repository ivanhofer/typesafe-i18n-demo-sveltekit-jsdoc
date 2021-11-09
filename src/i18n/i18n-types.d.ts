// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType } from 'typesafe-i18n'
import type { LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'de'
	| 'en'
	| 'it'

export type Translation = {
	/**
	 * Welcome to Svelte Fall Summit {year}
	 * @param {number} year
	 */
	'HI': RequiredParams1<'year'>
	/**
	 * {0} live spectator{{s}}
	 * @param {string | number | boolean} 0
	 */
	'spectators': RequiredParams1<'0'>
	'summit': {	
		/**
		 * {0|simpleDate}
		 * @param {Date} 0
		 */
		'schedule': RequiredParams1<'0|simpleDate'>
	}
}

export type TranslationFunctions = {
	/**
	 * Welcome to Svelte Fall Summit {year}
	 */
	'HI': (arg: { year: number }) => LocalizedString
	/**
	 * {0} live spectator{{s}}
	 */
	'spectators': (arg0: string | number | boolean) => LocalizedString
	'summit': {	
		/**
		 * {0|simpleDate}
		 */
		'schedule': (arg0: Date) => LocalizedString
	}
}

export type Formatters = {
	'simpleDate': (value: Date) => unknown
}

type Param<P extends string> = `{${P}}`

type Params1<P1 extends string> =
	`${string}${Param<P1>}${string}`

type RequiredParams1<P1 extends string> =
	| Params1<P1>
