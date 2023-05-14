import { json } from '@sveltejs/kit'

export const GET = async ({ url }) => {
	// no real data, just a simulation ;)
	const oldSpectators = Number(url.searchParams.get('oldSpectators') || '0')
	let spectators = oldSpectators * 2 + 1
	if (spectators > 100000) {
		spectators = 0
	}
	return json({ spectators })
}
