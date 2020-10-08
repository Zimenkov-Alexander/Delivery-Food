function modalPrivate (...selectorsClose) {
	const modalOpenBtn = document.querySelector('.btn--user'),
		  modal = document.querySelector('.modal--private');
		  
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

	
	modalOpenBtn.addEventListener('click', modalOpen);

	document.querySelector('.private__btns .btn--checkout').addEventListener('click', ()=>{
		alert('Это же тестовый сайт, войти невозможено:)');
	});
	
	function modalOpen () {
		modal.classList.remove('hide');
		modal.classList.add('show');
		setTimeout(() => {
			modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
		}, 600);
	}
	function modalClose () {
		modal.classList.add('hide');
		modal.classList.remove('show');
		modal.style.backgroundColor = 'initial';
	}
}

modalPrivate ('#modal__close', '.private__btns .btn--canceling');

// export default modalPrivate;