/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_add_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modules/add-order */ "./src/js/modules/add-order.js");
/* harmony import */ var _js_modules_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modules/footer */ "./src/js/modules/footer.js");
/* harmony import */ var _js_modules_modal_basket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/modules/modal-basket */ "./src/js/modules/modal-basket.js");
/* harmony import */ var _js_modules_restaurants_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/modules/restaurants-menu */ "./src/js/modules/restaurants-menu.js");
/* harmony import */ var _js_modules_modal_private__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/modules/modal-private */ "./src/js/modules/modal-private.js");






window.addEventListener('DOMContentLoaded', () => {

	Object(_js_modules_add_order__WEBPACK_IMPORTED_MODULE_0__["default"]) ('.btn--in_garbage');
	Object(_js_modules_restaurants_menu__WEBPACK_IMPORTED_MODULE_3__["default"]) ('.rest .cards img', '.rest h3');
	Object(_js_modules_modal_basket__WEBPACK_IMPORTED_MODULE_2__["default"]) ('.modal--basket','#basket', '#modal__close', '.btn--canceling');
	Object(_js_modules_modal_private__WEBPACK_IMPORTED_MODULE_4__["default"]) ('#modal__close', '.private__btns .btn--canceling');
	Object(_js_modules_footer__WEBPACK_IMPORTED_MODULE_1__["default"]) ();

});

/***/ }),

/***/ "./src/js/modules/add-order.js":
/*!*************************************!*\
  !*** ./src/js/modules/add-order.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_basket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-basket */ "./src/js/modules/modal-basket.js");


function addOrder (btns) {
	document.querySelectorAll(btns).forEach((btn, i) => {
		let check = false;
		
		const title = document.querySelectorAll('.menu h3')[i].textContent,
			  prise = document.querySelectorAll('.menu .card__info .card__prise')[i].textContent,
			  priseNum = +prise.substring(0, prise.length - 1);

		btn.addEventListener('click', ()=> {
			
			createOprder(title, priseNum);

			if (!check){
				Object(_modal_basket__WEBPACK_IMPORTED_MODULE_0__["default"]) ('.modal--basket','#basket', '#modal__close', '.btn--canceling');
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

}

/* harmony default export */ __webpack_exports__["default"] = (addOrder);

/***/ }),

/***/ "./src/js/modules/footer.js":
/*!**********************************!*\
  !*** ./src/js/modules/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_joke__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-joke */ "./src/js/modules/modal-joke.js");


function footer () {
	const links = document.querySelectorAll('.list--nav .list__item');
	
	links.forEach(item => {
		item.addEventListener('click', (evt) => {
			evt.preventDefault();
			Object(_modal_joke__WEBPACK_IMPORTED_MODULE_0__["default"]) (item.textContent ,'#modal__close',
				'[data-cancel]', '.btn--canceling.btn--checkout');
		});
	});
}

/* harmony default export */ __webpack_exports__["default"] = (footer);

/***/ }),

/***/ "./src/js/modules/modal-basket.js":
/*!****************************************!*\
  !*** ./src/js/modules/modal-basket.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");


function modalBasket (modalSelector, openBtnSelector, ...selectorsClose) {
	
	const modalOpenBtn = document.querySelector(openBtnSelector),
		  modal = document.querySelector(modalSelector);
	
	if (selectorsClose.length != 0){
		
		selectorsClose.forEach(item => {
			const elem = document.querySelector(item);
			elem.addEventListener('click', () => {
				Object(_modal__WEBPACK_IMPORTED_MODULE_0__["modalClose"])(modal);
			});
		});

		window.addEventListener('keydown', (evt) => {
			if (evt.key === 'Escape') {
				Object(_modal__WEBPACK_IMPORTED_MODULE_0__["modalClose"])(modal);
			}
		});
	}

	modalOpenBtn.addEventListener('click', () => {
		Object(_modal__WEBPACK_IMPORTED_MODULE_0__["modalOpen"])(modal);
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

/* harmony default export */ __webpack_exports__["default"] = (modalBasket);

/***/ }),

/***/ "./src/js/modules/modal-joke.js":
/*!**************************************!*\
  !*** ./src/js/modules/modal-joke.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");


function modalJoke(text ,...selectorsClose) {
	const modal = document.querySelector('.modal--joke');		  

	if (selectorsClose.length != 0){

		selectorsClose.forEach(item => {
			const elem = modal.querySelector(item);
			elem.addEventListener('click', () => {
				Object(_modal__WEBPACK_IMPORTED_MODULE_0__["modalClose"])(modal);
			});
		});

		window.addEventListener('keydown', (evt) => {
			if (evt.key === 'Escape') {
				Object(_modal__WEBPACK_IMPORTED_MODULE_0__["modalClose"])(modal);
			}
		});
	}

	modal.classList.remove('hide');
	modal.classList.add('show');
	modal.querySelectorAll('[data-name-page]').forEach(item => {
		item.textContent = text;
	});

	setTimeout(() => {
		modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	}, 1000);
}

/* harmony default export */ __webpack_exports__["default"] = (modalJoke);

/***/ }),

/***/ "./src/js/modules/modal-private.js":
/*!*****************************************!*\
  !*** ./src/js/modules/modal-private.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");


function modalPrivate (...selectorsClose) {
	const modalOpenBtn = document.querySelector('.btn--user'),
		  modal = document.querySelector('.modal--private');
		  
	if (selectorsClose.length != 0){

		selectorsClose.forEach(item => {
			const elem = modal.querySelector(item);
			elem.addEventListener('click', () => {
				Object(_modal__WEBPACK_IMPORTED_MODULE_0__["modalClose"])(modal);
			});
		});

		window.addEventListener('keydown', (evt) => {
			if (evt.key === 'Escape') {
				Object(_modal__WEBPACK_IMPORTED_MODULE_0__["modalClose"])(modal);
			}
		});
	}

	
	modalOpenBtn.addEventListener('click', () => {
		Object(_modal__WEBPACK_IMPORTED_MODULE_0__["modalOpen"])(modal);
	});

	document.querySelector('.private__btns .btn--checkout').addEventListener('click', ()=>{
		alert('Это же тестовый сайт, войти невозможено:)');
	});
}

/* harmony default export */ __webpack_exports__["default"] = (modalPrivate);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: modalOpen, modalClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalOpen", function() { return modalOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalClose", function() { return modalClose; });
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



/***/ }),

/***/ "./src/js/modules/restaurants-menu.js":
/*!********************************************!*\
  !*** ./src/js/modules/restaurants-menu.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (restaurantsMenu);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map