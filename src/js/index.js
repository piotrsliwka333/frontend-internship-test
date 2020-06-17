// I will use DOMContentLoaded in case that somebody will link our script in head section
document.addEventListener('DOMContentLoaded',function () {
	// DOM elements
	const $showFormButton = document.querySelector('#show-popup-form')
	const $popup = document.querySelector('.popup')
	const $closeFormBtn = document.querySelector('.popup__hide-btn')

	// if the document is a little bit bigger we should append and remove elements from the DOM
	// but in this case when the file is small we can use a display: none when we want element to disappear
	// here after click we'll show form
	$showFormButton.addEventListener('click',function (e) {
		$showFormButton.classList.add('d-none')
		$popup.classList.remove('d-none')
	})

	// after click hide form btn we'll back to Click me btn
	$closeFormBtn.addEventListener('click',function (e) {
		$popup.classList.add('d-none')
		$showFormButton.classList.remove('d-none')
	})
})

