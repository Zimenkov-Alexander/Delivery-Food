import {modalOpen, modalClose} from './modal';

function modalBasket (modalSelector, openBtnSelector, ...selectorsClose) {
	
	const modalOpenBtn = document.querySelector(openBtnSelector),
		  modal = document.querySelector(modalSelector);
	
	if (selectorsClose.length != 0){
		
		selectorsClose.forEach(item => {
			const elem = document.querySelector(item);
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

	const btnCheckout = document.querySelector('.btn--checkout');

	btnCheckout.addEventListener('click', ()=>{
		alert('Это же тестовый сайт, заказ невозможен:)');
	});
	
	const items = document.querySelectorAll('.item__wrapper'),
		  basketAmount = document.querySelector('.basket__amount');
	if (items){
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
	}

	if (document.querySelector('.order__text')){
		btnCheckout.setAttribute('disabled','disabled');
	} else {
		btnCheckout.removeAttribute('disabled');
	}

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

export default modalBasket;