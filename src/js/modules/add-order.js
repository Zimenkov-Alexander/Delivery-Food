import modalBasket from './modal-basket';

function addOrder (btns) {
	document.querySelectorAll(btns).forEach((btn, i) => {
		let check = false;
		
		const title = document.querySelectorAll('.menu h3')[i].textContent,
			  prise = document.querySelectorAll('.menu .card__info .card__prise')[i].textContent,
			  priseNum = +prise.substring(0, prise.length - 1);

		btn.addEventListener('click', ()=> {
			
			plusOne(btn);

			createOprder(title, priseNum);

			if (!check){
				modalBasket ('.modal--basket','#basket', '#modal__close', '.btn--canceling');
			}
			check = true;
		});
	});
	
	function createOprder (title, prise){
		const itemTitle = document.querySelectorAll('.item__name');

		if (itemTitle.length === 0){
			document.querySelector('.basket__order').innerHTML = `
			<div class="ordeer__item">
				<p class="item__name">${title}</p>
				<div class="item__wrapper">
					<p class="item__prise" data-cost="${prise}">${prise}₽</p>
					<button id="minus" class="btn btn--modal btn--basket">-</button>
					<p id="total" class="item__sum" >1</p>
					<button id="plus" class="btn btn--modal btn--basket">+</button>
				</div>
			</div>
			`;
		} else if (check(itemTitle, title)) {
			document.querySelectorAll('.ordeer__item').forEach(item => {
				if (item.querySelector('.item__name').textContent == title){
					let sum = +item.querySelector('.item__sum').textContent;
					sum += 1;
					item.querySelector('.item__sum').textContent = sum;

					let prise = item.querySelector('[data-cost]').attributes['data-cost'].value;
					item.querySelector('.item__prise').textContent = prise * sum +'₽';
				}
			});
		} else{
			document.querySelector('.basket__order').innerHTML += `
			<div class="ordeer__item">
				<p class="item__name">${title}</p>
				<div class="item__wrapper">
					<p class="item__prise" data-cost="${prise}">${prise}₽</p>
					<button id="minus" class="btn btn--modal btn--basket">-</button>
					<p id="total" class="item__sum" >1</p>
					<button id="plus" class="btn btn--modal btn--basket">+</button>
				</div>
			</div>
			`;
		}
	}
	function check (items, title) {
		let check;
		items.forEach(item => {
			if (item.textContent === title){
				check = true ;
			} else{
				check = false;
			}
		});
		return check;
	}
	function plusOne (btn){
		btn.classList.add('plus');
		setTimeout(()=> {
			btn.classList.remove('plus');
		},400);
	}

}

export default addOrder;