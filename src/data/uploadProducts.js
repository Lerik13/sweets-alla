import { supabase } from '../lib/supabase'
import { products } from './data-products'

async function deleteProducts() {
	const { error } = await supabase.from('products').delete().gt('id', 0)
	if (error) console.log(error.message)
}

export async function createProducts() {
	const { error } = await supabase.from('products').insert(products)
	if (error) console.log(error.message)
}
