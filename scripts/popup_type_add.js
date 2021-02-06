const popupAdd = document.querySelector('.popup_type_add');
const AddButton = document.querySelector('.profile__add-button');
const closeButtonAdd = document.querySelector('.popup__close-icon_type_add');
const mestoInput = document.querySelector('.popup__input_type_mesto');
const linkInput = document.querySelector('.popup__input_type_link');
const saveAdd = document.querySelector('.popup__container_type_add');
	


function popupOpenedAdd () {
    popupAdd.classList.add('popup_opened');
};

function popupCloseAdd () {
		popupAdd.classList.remove('popup_opened');
}


function handleFormSubmitAdd (evt) {
	evt.preventDefault(); 
	let card = elementTemp.querySelector('.element').cloneNode(true);
  	let cardPic = card.querySelector('.element__pic');
	let cardDesc = card.querySelector('.element__description');
	cardPic.src = linkInput.value;
	cardPic.alt = mestoInput.value;
	cardDesc.textContent = mestoInput.value;
	elements.append(card);
	popupCloseAdd ();
}



AddButton.addEventListener('click', popupOpenedAdd); 
closeButtonAdd.addEventListener('click', popupCloseAdd); 
saveAdd.addEventListener('submit', handleFormSubmitAdd);




