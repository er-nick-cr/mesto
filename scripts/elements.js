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



function setCards (item) {
  const card = elementTemp.querySelector('.element').cloneNode(true);
  const cardPic = card.querySelector('.element__pic');
  const cardDesc = card.querySelector('.element__description');
  

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