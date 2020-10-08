function searchRestaurants () {
	const input = document.querySelector('.search.search--rest');
	input.addEventListener('input', ()=> {
		
		const cards = document.querySelectorAll('.rest .card');	

		cards.forEach(card => {
			const title = card.querySelector('.card__title').textContent;
			
			let text = input.value,
				regexp = new RegExp(text, 'g');

			if (regexp.exec(title)) {
				card.style.display = 'flex';
			} else{
				card.style.display = 'none';
			}



		});
	});
}

export default searchRestaurants;