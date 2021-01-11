let body = document.querySelector('.body');
let page = body.querySelector('.page');
let popup = page.querySelector('.popup');
let profile = page.querySelector('.profile');
let profileInfo = profile.querySelector('.profile__info');
let profileName = profileInfo.querySelector('.profile__name');
let profileAuthor = profileName.querySelector('.profile__author');
let profileEditButton = profileAuthor.querySelector('.profile__edit-button');


profileEditButton.addEventListener('click', function () {
        popup.classList.add('popup_opened');
    });

// Находим форму в DOM
let formContainer = popup.querySelector('.popup__container');
let formInputContainer = formContainer.querySelector('.popup__input-container');
//let formInput = formInputContainer.querySelectorAll('.popup__input');
let popupSubmitButton = formContainer.querySelector('.popup__submit-button');
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    let nameInput = formInputContainer.querySelectorAll('.popup__input')[0];
    let jobInput = formInputContainer.querySelectorAll('.popup__input')[1];

    let nameInputValue = nameInput.value;
    let jobInputValue = jobInput.value;
    // Получите значение полей из свойства value
    
    let profileDescription = profileName.querySelector('.profile__description');
    // Выберите элементы, куда должны быть вставлены значения полей
    profileAuthor.textContent = nameInputValue;
    profileDescription.textContent = jobInputValue;
    // Вставьте новые значения с помощью textContent
}



popupSubmitButton.addEventListener('click', handleFormSubmit);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupSubmitButton.addEventListener('submit', handleFormSubmit); 

popupSubmitButton.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
});