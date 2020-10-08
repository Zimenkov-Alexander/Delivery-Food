// import {modalOpen, modalClose} from './js/modules/modal';
import addOrder from './js/modules/add-order';
import footer from './js/modules/footer';
import modalBasket from './js/modules/modal-basket';
import restaurantsMenu from './js/modules/restaurants-menu';
import modalPrivate from './js/modules/modal-private';

window.addEventListener('DOMContentLoaded', () => {

	addOrder ('.btn--in_garbage');
	modalBasket ('.modal--basket','#basket', '#modal__close', '.btn--canceling');
	restaurantsMenu ('.rest .cards img', '.rest h3');
	modalPrivate ('#modal__close', '.private__btns .btn--canceling');
	footer ();

});