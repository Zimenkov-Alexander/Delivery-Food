function restaurantsMenu (img, title){

	const restaurantsImg = document.querySelectorAll(img),
		  restaurantsTitle = document.querySelectorAll(title);
	
	restaurantsImg.forEach((img, i) => {
		img.addEventListener('click', ()=> {
			toрgleMenu(restaurantsTitle[i].textContent);
		});
	});
	restaurantsTitle.forEach(title => {
		title.addEventListener('click', ()=> {
			toрgleMenu(title.textContent);
		});
	});
	
	document.querySelector('.close__menu').addEventListener('click', toрgleMenu);

	function toрgleMenu(menuTitle){
		window.scrollTo(0,0);
		document.querySelector('.restaurants').classList.toggle('hide');
		document.querySelector('.restaurants').classList.toggle('show');
		document.querySelector('.menu').classList.toggle('hide');
		document.querySelector('.menu').classList.toggle('show');
		document.querySelector('.menu__title').textContent = menuTitle;
	}
}

restaurantsMenu ('.rest .cards img', '.rest h3');

// export default restaurantsMenu;