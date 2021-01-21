let popup = document.querySelector('.popup');
let profileEditButton = document.querySelector('.profile__edit-button');
let formContainer = document.querySelector('.popup__container');
let formInputContainer = formContainer.querySelector('.popup__input-container');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_description');
let profileAuthor = document.querySelector('.profile__author');
let profileDescription = document.querySelector('.profile__description');
let closeButton = formContainer.querySelector('.popup__close-icon');
let form = document.querySelector('.popup__container');

function popupOpened () {
    popup.classList.add('popup_opened');
    nameInput.value = profileAuthor.textContent;
    jobInput.value = profileDescription.textContent;
};

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileAuthor.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

function popupClose (a) {
    a.preventDefault();
    popup.classList.remove('popup_opened');
}
profileEditButton.addEventListener('click', popupOpened) 

form.addEventListener('submit', handleFormSubmit); 


closeButton.addEventListener('click', popupClose);

