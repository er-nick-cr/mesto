let popup = document.querySelector('.popup');
let profileEditButton = document.querySelector('.profile__edit-button');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_description');
let profileAuthor = document.querySelector('.profile__author');
let profileDescription = document.querySelector('.profile__description');
let closeButton = document.querySelector('.popup__close-icon');
let form = document.querySelector('.popup__container');

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

form.addEventListener('submit', handleFormSubmit); 


closeButton.addEventListener('click', popupClose);

