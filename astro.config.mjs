// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	integrations: [icon()],
	vite: {
		plugins: [tailwindcss()]
	},
	image: {
		//serviceEntryPoint: '@astrojs/image/sharp', // or your preferred image service
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'zppgejyumyfevfgyicjm.supabase.co/storage/v1/s3'
			}
		]
	}
})
