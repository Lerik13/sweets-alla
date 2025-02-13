import { supabase } from './supabase'

export async function getSettings() {
	const { data, error } = await supabase.from('settings').select('*').single()

	if (error) {
		console.error(error)
		throw new Error('Settings could not be loaded')
	}

	return data
}

export async function getHero() {
	const { data, error } = await supabase.from('hero').select('*')

	if (error) {
		console.error(error)
		throw new Error('Hero data could not be loaded')
	}

	return data
}
