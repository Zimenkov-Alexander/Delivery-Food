const basketBtn = document.querySelector('#basket'),
	  modalBasket = document.querySelector('.modal--basket'),
	  modalclose = document.querySelector('#modal__close');

basketBtn.addEventListener('click', () => {
	modalBasket.classList.remove('hide');
	modalBasket.classList.add('show');
	setTimeout(() => {
		modalBasket.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	}, 600);
});

modalclose.addEventListener('click', () => {
	modalBasket.classList.add('hide');
	modalBasket.classList.remove('show');
	modalBasket.style.backgroundColor = 'initial';

});