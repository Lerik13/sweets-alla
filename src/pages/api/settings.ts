import type { APIRoute } from 'astro'
//import { supabase } from '../../lib/supabase'
import { getSettings } from '../../lib/data-services'

export const GET: APIRoute = async (request) => {
	//return Response.json({ test: 'test' })
	try {
		const data = await getSettings()
		return Response.json(data)
	} catch {
		return Response.json({ message: 'Settings cannot be loaded' })
	}
}
