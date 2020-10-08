import {modalOpen, modalClose} from './modal';

function modalPrivate (...selectorsClose) {
	const modalOpenBtn = document.querySelector('.btn--user'),
		  modal = document.querySelector('.modal--private');
		  
	if (selectorsClose.length != 0){

		selectorsClose.forEach(item => {
			const elem = modal.querySelector(item);
			elem.addEventListener('click', () => {
				modalClose(modal);
			});
		});

		window.addEventListener('keydown', (evt) => {
			if (evt.key === 'Escape') {
				modalClose(modal);
			}
		});
	}

	
	modalOpenBtn.addEventListener('click', () => {
		modalOpen(modal);
	});

	document.querySelector('.private__btns .btn--checkout').addEventListener('click', ()=>{
		alert('Это же тестовый сайт, войти невозможено:)');
	});
}

export default modalPrivate;