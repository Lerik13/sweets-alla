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

export async function getProducts() {
	const { data, error } = await supabase.from('products').select('*, categories(name)')

	if (error) {
		console.error(error)
		throw new Error('Products could not be loaded')
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

export async function getProduct(id) {
	const { data, error } = await supabase.from('products').select('*').eq('id', id).single()

	if (error) {
		console.error(error)
		throw new Error('The product could not be loaded')
	}

	return data
}

export async function getRandomProducts() {
	//Invoke custom function in DB
	const { data, error } = await supabase.rpc('get_random_products')

	if (error) {
		console.error(error)
		throw new Error('Products could not be loaded!')
	}

	return data
}
