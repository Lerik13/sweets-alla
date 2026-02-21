// @ts-check
import netlify from '@astrojs/netlify'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	integrations: [icon()],
	vite: {
		plugins: [tailwindcss()]
	},
	image: {
		domains: ['ubcsvbyqgepyxswjggvm.supabase.co'],
		//serviceEntryPoint: '@astrojs/image/sharp', // or your preferred image service
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ubcsvbyqgepyxswjggvm.supabase.co/storage'
			}
		]
	},
	adapter: netlify()
})
