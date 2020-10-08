
function modalBasket (modalSelector, openBtnSelector, ...selectorsClose) {
	
	const modalOpenBtn = document.querySelector(openBtnSelector),
		  modal = document.querySelector(modalSelector);
	
	if (selectorsClose.length != 0){
		
		selectorsClose.forEach(item => {
			const elem = document.querySelector(item);
			elem.addEventListener('click', modalClose);
		});

		window.addEventListener('keydown', (evt) => {
			if (evt.key === 'Escape') {
				modalClose();
			}
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

	document.querySelector('.btn--checkout').addEventListener('click', ()=>{
		alert('Это же тестовый сайт, заказ невозможен:)');
	});
	const items = document.querySelectorAll('.item__wrapper'),
		  basketAmount = document.querySelector('.basket__amount');

	items.forEach(item => {
		const plus = item.querySelector('#plus'),
			  minus = item.querySelector('#minus'),
			  total = item.querySelector('#total'),
			  prise = item.querySelector('.item__prise'),
			  cost = prise.dataset.cost;
			 			  
		plus.addEventListener('click', () => {
			changeQuantity(1, total, prise, cost);
		});

		minus.addEventListener('click', () => {
			changeQuantity(-1, total, prise, cost);
		});
	});

	function changeQuantity (number, total, prise, cost) {
		total.textContent = +total.textContent + number;

		if(total.textContent <= '0'){
			total.textContent = 0;
		}
		
		prise.textContent = cost * total.textContent + '₽';

		let summary = 0;

		document.querySelectorAll('.item__prise').forEach(item => {
			let priseNum = +item.textContent.substring(0, item.textContent.length - 1);
				summary += priseNum;
		});

		basketAmount.textContent = summary + '₽';
	}
}
modalBasket ('.modal--basket','#basket', '#modal__close', '.btn--canceling');

// export default modal;