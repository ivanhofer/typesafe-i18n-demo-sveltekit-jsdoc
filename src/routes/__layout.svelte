<script context="module">
	import { initI18n } from '$i18n/i18n-svelte'

   /** @type { import('@sveltejs/kit').Load } */
	export const load = async () => {
		await initI18n()

		return {}
	}
</script>

<slot />
