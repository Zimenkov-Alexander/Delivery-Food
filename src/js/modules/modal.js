function modalOpen (modal) {
	modal.classList.remove('hide');
	modal.classList.add('show');
	setTimeout(() => {
		modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	}, 600);
}
function modalClose (modal) {
	modal.classList.add('hide');
	modal.classList.remove('show');
	modal.style.backgroundColor = 'initial';
}

export {modalOpen, modalClose};