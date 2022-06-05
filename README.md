# typesafe-i18n demo sveltekit JsDoc

**Here is a [video](https://www.youtube.com/watch?v=C6O5pMMMTG0) for better context**

This example demonstrates a [`typesafe-i18n`](https://github.com/ivanhofer/typesafe-i18n)-integration with [SvelteKit](https://kit.svelte.dev/) with JsDoc comments.

### LIVE-DEMO: https://typesafe-i18n-demo-sveltekit-jsdoc.vercel.app

It is a basic example and shows:

-  basic i18n setup of three different locales
-  auto-detecting user language preferences
-  full SSR support
-  SEO optimizations
-  locale switching
-  lazy loading of locales
-  persistent locale state via language routes
-  typesafety features of `typesafe-i18n`
-  plural rules
-  locale specific date-formatting

What is missing:

-  opinion how to localize slugs\
   this highly depends where your data comes from. This will probably differ from project to project.
-  cross-links between your language slugs\
   like mentioned above, this will differ from project to project. You can find useful resources here:\
   -  [`rel="alternate"` links](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel#attr-alternate)
   -  [`hreflang` attribute](https://developer.mozilla.org/de/docs/Web/HTML/Element/a#attr-hreflang)
   -  [SEO optimized examples](https://developers.google.com/search/docs/advanced/crawling/localized-versions)

## add `typesafe-i18n` to an existing SvelteKit project

If you want to implement the solution in a existing project, you can take a look at the [commit history](https://github.com/ivanhofer/typesafe-i18n-demo-sveltekit-jsdoc/commits/main) to see a step-by-step guide.

## TypeScript version

You can find the exact same example in a TypeScript version [here](https://github.com/ivanhofer/typesafe-i18n-demo-sveltekit).

## learn more

If you want to know more about `typesafe-i18n` head over to the main repo:

### https://github.com/ivanhofer/typesafe-i18n
