// I will use DOMContentLoaded in case that somebody will link our script in head section
document.addEventListener('DOMContentLoaded', function () {
	// DOM elements
	const $main = document.querySelector('.main')
	const $showFormButton = document.querySelector('#show-popup-form');
	const $popup = document.querySelector('.popup');
	const $closeFormBtn = document.querySelector('.popup__hide-btn');
	// form inputs
	const $form = document.querySelector('.login-form');
	const $formEmail = document.querySelector('#email');
	const $formPassword = document.querySelector('#password');
	const $formAgreement = document.querySelector('#agreement');
	//form sent

	// here after click we'll show form
	$showFormButton.addEventListener('click', function (e) {
		$showFormButton.classList.add('d-none')
		$popup.classList.remove('d-none')
	})

	// after click hide form btn we'll back to Click me btn
	$closeFormBtn.addEventListener('click', function (e) {
		$popup.classList.add('d-none')
		$showFormButton.classList.remove('d-none')
	})

	function validateEmail(email) {
		const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailRegex.test(String(email).toLowerCase());
	}

	$form.addEventListener('submit', function (e) {
		e.preventDefault();
		// we need to check If error exist in case user will click non-stop on submit
		// if exist we need to delete all of them and create new if validation is no right
		const errors = document.querySelectorAll('.error-message');
		if (errors.length > 0) {
			errors.forEach(element => {
				element.parentElement.removeChild(element)
			})
		}
		// if user want again check validation we need to remove red border from input and check again
		$formEmail.classList.remove('error')
		$formPassword.classList.remove('error')
		$formAgreement.classList.remove('error')

		if (!validateEmail($formEmail.value)) {
			const emailError = document.createElement('p')
			$formEmail.classList.add('error')
			emailError.classList.add('error-message')
			emailError.classList.add('email-error')
			emailError.innerText = 'Wrong email'
			$form.appendChild(emailError)
			$formEmail.classList.add('error')
		}
		if ($formPassword.value.length < 6) {
			const passwordError = document.createElement('p')
			$formPassword.classList.add('error')
			passwordError.classList.add('error-message')
			passwordError.classList.add('password-error')
			passwordError.innerText = 'min. 6 characters'
			$form.appendChild(passwordError)
		}
		if (!$formAgreement.checked) {
			const agreementError = document.createElement('p')
			$formAgreement.classList.add('error')
			agreementError.classList.add('error-message')
			agreementError.classList.add('agreement-error')
			agreementError.innerText = 'accept terms'
			$form.appendChild(agreementError)
		}
		if (validateEmail($formEmail.value) && $formPassword.value.length >= 6 && $formAgreement.checked) {
			$popup.classList.add('hide-animation')
			const timeout = setTimeout(() => {
				$popup.parentElement.removeChild($popup)
				const formSentElement = document.createElement('p')
				formSentElement.classList.add('form-sent-message')
				formSentElement.innerText = 'Thank you!'
				$main.appendChild(formSentElement)
			}, 2000)
		}
	})
})

