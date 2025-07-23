export default function initCollapse() {
	const collapse = document.querySelectorAll('[collapse]')

	function closeAllCollapse() {
		collapse.forEach(el=> {
			el.classList.remove('open')
		})
	}

	collapse.forEach(el => {
		const collapseButton = el.querySelector('[collapse-button]')

		collapseButton.addEventListener('click', ()=> {
			closeAllCollapse()
			
			el.classList.add('open')
		})
	})
}