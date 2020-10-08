import addOrder from './js/modules/add-order';
import footer from './js/modules/footer';
import modalBasket from './js/modules/modal-basket';
import restaurantsMenu from './js/modules/restaurants-menu';
import modalPrivate from './js/modules/modal-private';
import searchRestaurants from './js/modules/search-restaurants';

window.addEventListener('DOMContentLoaded', () => {

	addOrder ('.btn--in_garbage');
	restaurantsMenu ('.rest .cards img', '.rest h3');
	modalBasket ('.modal--basket','#basket', '#modal__close', '.btn--canceling');
	modalPrivate ('#modal__close', '.private__btns .btn--canceling');
	footer ();
	searchRestaurants();
});