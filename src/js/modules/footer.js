function footer () {
	const links = document.querySelectorAll('.list--nav .list__item');
	
	links.forEach(item => {
		item.addEventListener('click', (evt) => {
			evt.preventDefault();
			modalJoke (item.textContent ,'#modal__close',
				'[data-cancel]', '.btn--canceling.btn--checkout');
		});
	});

	function modalJoke(text ,...selectorsClose) {
		const modal = document.querySelector('.modal--joke');		  

		if (selectorsClose.length != 0){
	
			selectorsClose.forEach(item => {
				const elem = modal.querySelector(item);
				elem.addEventListener('click', modalClose);
			});
	
			window.addEventListener('keydown', (evt) => {
				if (evt.key === 'Escape') {
					modalClose();
				}
			});
		}
	
		modal.classList.remove('hide');
		modal.classList.add('show');
		modal.querySelectorAll('[data-name-page]').forEach(item => {
			item.textContent = text;
		});

		setTimeout(() => {
			modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
		}, 1000);
		function modalClose () {
			modal.classList.add('hide');
			modal.classList.remove('show');
			modal.style.backgroundColor = 'initial';
		}
	}
}
footer ();

// export default footer;