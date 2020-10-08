function addOrder (btns) {
	
	document.querySelectorAll(btns).forEach(btn => {
		btn.addEventListener('click', ()=> {
			document.querySelector('.basket__order').innerHTML += `
			<div class="ordeer__item">
				<p class="item__name">Ролл угорь стандартный</p>
				<div class="item__wrapper">
					<p class="item__prise" data-cost="250">250₽</p>
					<button id="minus" class="btn btn--modal btn--basket">-</button>
					<p id="total" class="item__sum" >1</p>
					<button id="plus" class="btn btn--modal btn--basket">+</button>
				</div>
			</div>
			`;
		});
	});
}

export default addOrder;