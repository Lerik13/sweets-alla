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

export async function getCategories() {
	const { data, error } = await supabase.from('categories').select('*')

	if (error) {
		console.error(error)
		throw new Error('Categories could not be loaded')
	}

	return data
}

export async function getReviews(approvedOnly = true) {
	const { data, error } = await supabase
		.from('reviews')
		.select('*')
		.eq('approved', true)
		.order('order', { ascending: true })

	if (error) {
		console.error(error)
		throw new Error('Reviews could not be loaded')
	}

	return data
}

export async function getProductsByCategory(categoryId, from = 0, to = 4) {
	const { data, error } = await supabase
		.from('products')
		.select('*')
		.eq('categoryId', categoryId)
		.range(from, to)
		.order('order', { ascending: true })

	if (error) {
		console.error(error)
		throw new Error('Products of chosen category could not be loaded')
	}

	return data
}
