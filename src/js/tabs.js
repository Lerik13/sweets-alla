let tabs = document.querySelectorAll('.tab')
let panels = document.querySelectorAll('.tab-panel')

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		let tabTarget = tab.getAttribute('aria-controls')

		tabs.forEach((t) => {
			t.classList.remove('border-rose-700')
			t.classList.add('border-neutral-400')
			t.classList.remove('text-rose-700')
		})
		tab.classList.remove('border-neutral-400')
		tab.classList.add('border-rose-700')
		tab.classList.add('text-rose-700')

		panels.forEach((panel) => {
			let panelId = panel.getAttribute('id')
			if (tabTarget === panelId) {
				panel.classList.remove('invisible', 'opacity-0', 'absolute', 'top-0')
				panel.classList.add('flex', 'flex-col', 'opacity-100')
			} else {
				panel.classList.add('invisible', 'opacity-0', 'absolute', 'top-0')
			}
		})
	})
})

//'tab-panel w-full flex flex-col opacity-100 transition duration-300 bg-white'
//: 'tab-panel w-full invisible absolute top-0 opacity-0 transition duration-300 bg-white'}
