import modalJoke from './modal-joke';

function footer () {
	const links = document.querySelectorAll('.list--nav .list__item');
	
	links.forEach(item => {
		item.addEventListener('click', (evt) => {
			evt.preventDefault();
			modalJoke (item.textContent ,'#modal__close',
				'[data-cancel]', '.btn--canceling.btn--checkout');
		});
	});
}

export default footer;