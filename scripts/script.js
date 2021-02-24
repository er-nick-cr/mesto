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
const popupArr = Array.from(document.querySelectorAll('.popup'));
const popupCont = Array.from(document.querySelectorAll('.popup__container'))
const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileAuthor = document.querySelector('.profile__author');
const profileDescription = document.querySelector('.profile__description');
const closeButton = document.querySelector('.popup__close-icon_type_edit');
const saveEdit = document.querySelector('.popup__container_type_edit');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupMesto = document.querySelector('.popup_type_mesto');
const addButton = document.querySelector('.profile__add-button');
const closeButtonAdd = document.querySelector('.popup__close-icon_type_add');
const closeButtonMesto = document.querySelector('.popup__close-icon_type_mesto');
const mestoInput = document.querySelector('.popup__input_type_mesto');
const linkInput = document.querySelector('.popup__input_type_link');
const saveAdd = document.querySelector('.popup__container_type_add');
const body = document.querySelector('.body');
const subBtnAdd = document.querySelector('.popup__submit-button_type_add');

const addLike = (event) => event.target.classList.toggle('element__like_active');
const deleteCard = (event) => event.target.closest('.element').remove();
const escClose = (event) => {
  const popupOpnd = document.querySelector('.popup_opened');
  if (event.key === "Escape") {
    popupClose(popupOpnd);
  }
}

function popupOpen (arg) {
  arg.classList.add('popup_opened');
  document.addEventListener('keydown', escClose);
}

function popupClose (arg) {
  arg.classList.remove('popup_opened');
  document.removeEventListener('keydown', escClose);
  }

// значения попапа с картинкой
function setPopupPic (event) {
  popupOpen(popupMesto);
  const popImg = document.querySelector('.popup__img');
  popImg.src = event.target.getAttribute('src');
  popImg.alt = event.target.getAttribute('alt');
  document.querySelector('.popup__caption').textContent = event.target.getAttribute('alt');
  
  
}

function setCards (item) {
  const card = elementTemp.querySelector('.element').cloneNode(true);
  const cardPic = card.querySelector('.element__pic');
  const cardDesc = card.querySelector('.element__description');
  const elLike = card.querySelector('.element__like');
  const elDel = card.querySelector('.element__delete');
  elLike.addEventListener('click', addLike);
  elDel.addEventListener('click', deleteCard);
  cardPic.addEventListener('click', setPopupPic);
  addButton.addEventListener('click', () => popupOpen(popupAdd));
  
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
  // массив с значениями новой карточки
  const newCard = {name: mestoInput.value, link: linkInput.value};
  const card = setCards(newCard);
  elements.prepend(card);
  document.querySelector('.popup__container_type_add').reset();
  popupClose(popupAdd);
  subBtnAdd.classList.add('popup__submit-button_inactive');
  subBtnAdd.setAttribute('disabled', true);
}

saveAdd.addEventListener('submit', handleFormSubmitAdd);



function popupEditOpen () {
  profileEditButton.addEventListener('click', () => popupOpen(popupEdit));
  closeButton.addEventListener('click', () =>  popupClose(popupEdit));
  nameInput.value = profileAuthor.textContent;
  jobInput.value = profileDescription.textContent;
};

popupEditOpen();

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileAuthor.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popupClose(popupEdit);
}

closeButtonMesto.addEventListener('click', () => popupClose(popupMesto));

closeButtonAdd.addEventListener('click', () => popupClose(popupAdd));

profileEditButton.addEventListener('click', popupOpen(popupEdit));

saveEdit.addEventListener('submit', handleFormSubmit); 

closeButton.addEventListener('click', popupClose(popupEdit));



popupArr.forEach((item) => item.addEventListener('click', () => {
  popupClose(item);
}
  ));

function stopEvent (evt) {
  evt.stopPropagation();
}

document.querySelectorAll('.popup__container').forEach((item) => item.addEventListener('click', stopEvent));
document.querySelector('.popup__figure').addEventListener('click', stopEvent);

