const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
	]; 
	
const elementTemp = document.querySelector('.template-element').content;
const elements = document.querySelector('.elements');
const popup = document.querySelector('.popup_type_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileAuthor = document.querySelector('.profile__author');
const profileDescription = document.querySelector('.profile__description');
const closeButton = document.querySelector('.popup__close-icon_type_edit');
const saveEdit = document.querySelector('.popup__container_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const AddButton = document.querySelector('.profile__add-button');
const closeButtonAdd = document.querySelector('.popup__close-icon_type_add');
const mestoInput = document.querySelector('.popup__input_type_mesto');
const linkInput = document.querySelector('.popup__input_type_link');
const saveAdd = document.querySelector('.popup__container_type_add');
const popupPicTemp = document.querySelector('.template-popup-pic').content;
const body = document.querySelector('.body');

const Like = (event) => event.target.classList.toggle('element__like_active');
const deleteCard = (event) => event.target.closest('.element').remove();
const deletePopup = (event) => event.target.closest('.popup-pic').remove();



function setPopupPic (event) {
  const popupPic = popupPicTemp.querySelector('.popup-pic').cloneNode(true);
  popupPic.querySelector('.popup-pic__img').src = event.target.getAttribute('src');
  popupPic.querySelector('.popup-pic__caption').textContent = event.target.getAttribute('alt');
  popupPic.querySelector('.popup-pic__close-icon').addEventListener('click', deletePopup);
  body.append(popupPic);
}


function setCards (item) {
  const card = elementTemp.querySelector('.element').cloneNode(true);
  const cardPic = card.querySelector('.element__pic');
  const cardDesc = card.querySelector('.element__description');
  card.querySelector('.element__like').addEventListener('click', Like);
  card.querySelector('.element__delete').addEventListener('click', deleteCard);
  card.querySelector('.element__pic').addEventListener('click', setPopupPic);
  
  cardPic.src = item.link;
  cardPic.alt = item.name;
  cardDesc.textContent = item.name;
  
  return card;
}

function addCards () {
  const cards = initialCards.map(setCards);  
  elements.append(...cards);
}

addCards();

function handleFormSubmitAdd (evt) {
	evt.preventDefault(); 
	const card = elementTemp.querySelector('.element').cloneNode(true);
  card.querySelector('.element__pic').src = linkInput.value;
	card.querySelector('.element__pic').alt = mestoInput.value;
	card.querySelector('.element__description').textContent = mestoInput.value;
	card.querySelector('.element__like').addEventListener('click', Like);
  card.querySelector('.element__delete').addEventListener('click', deleteCard);
  card.querySelector('.element__pic').addEventListener('click', setPopupPic);
	elements.append(card);
	popupCloseAdd ();
}










function popupOpened () {
    popup.classList.add('popup_opened');
    nameInput.value = profileAuthor.textContent;
    jobInput.value = profileDescription.textContent;
};


function popupClose () {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileAuthor.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popupClose ();
}

profileEditButton.addEventListener('click', popupOpened) 

saveEdit.addEventListener('submit', handleFormSubmit); 


closeButton.addEventListener('click', popupClose);




function popupOpenedAdd () {
    popupAdd.classList.add('popup_opened');
};

function popupCloseAdd () {
		popupAdd.classList.remove('popup_opened');
}






AddButton.addEventListener('click', popupOpenedAdd); 
closeButtonAdd.addEventListener('click', popupCloseAdd); 
saveAdd.addEventListener('submit', handleFormSubmitAdd);

