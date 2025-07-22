export default function initSwitchNav() {
	const nav = document.querySelector('[navigation]')
	const hero = document.querySelector('[hero]')

	const offsetBottom = 100;

	document.addEventListener('scroll', ()=> {
		if ((window.scrollY + offsetBottom) >= hero.getBoundingClientRect().height) {
			nav.classList.add('active')
		} else {
			nav.classList.remove('active')
		}
	})
}