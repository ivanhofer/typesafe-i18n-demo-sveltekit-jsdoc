// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
// @ts-check
/* eslint-disable */

/**
 * @typedef { import('typesafe-i18n/adapters/adapter-svelte').SvelteStoreInit<Locales, Translation, TranslationFunctions> } SvelteStoreInit,
 * @typedef { import('./i18n-types').Locales } Locales,
 * @typedef { import('./i18n-types').Translation } Translation,
 * @typedef { import('./i18n-types').TranslationFunctions } TranslationFunctions,
 * @typedef { import('./i18n-types').Formatters } Formatters
 */

import { initI18nSvelte } from 'typesafe-i18n/adapters/adapter-svelte';

import { loadedLocales, loadedFormatters } from './i18n-util'

/** @type { SvelteStoreInit } */
const { locale, LL, setLocale } = initI18nSvelte(loadedLocales, loadedFormatters)

export { locale, LL, setLocale }

export default LL
