// function modalJoke(text ,...selectorsClose) {
// 	const modal = document.querySelector('.modal--joke');		  

// 	if (selectorsClose.length != 0){

// 		selectorsClose.forEach(item => {
// 			const elem = modal.querySelector(item);
// 			elem.addEventListener('click', modalClose);
// 		});

// 		window.addEventListener('keydown', (evt) => {
// 			if (evt.key === 'Escape') {
// 				modalClose();
// 			}
// 		});
// 	}

// 	modal.classList.remove('hide');
// 	modal.classList.add('show');
// 	modal.querySelectorAll('[data-name-page]').forEach(item => {
// 		item.textContent = text;
// 	});

// 	setTimeout(() => {
// 		modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
// 	}, 1000);
// 	function modalClose () {
// 		modal.classList.add('hide');
// 		modal.classList.remove('show');
// 		modal.style.backgroundColor = 'initial';
// 	}
// }

// // export default modalJoke;