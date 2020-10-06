
function modal (modalSelector, openBtnSelector, ...selectorsClose) {
	
	const modalOpenBtn = document.querySelector(openBtnSelector),
		  modal = document.querySelector(modalSelector);
	
	if (selectorsClose.length != 0){

		let btnsClose = [];
		selectorsClose.forEach(item => {
			const elem = document.querySelector(item);
			btnsClose.push(elem);
		});

		btnsClose.forEach(item => {
			item.addEventListener('click', modalClose);
		});

	}

	modalOpenBtn.addEventListener('click', modalOpen);
	
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
modal ('.modal--basket','#basket', '#modal__close', '.btn--canceling');

// export default modal;