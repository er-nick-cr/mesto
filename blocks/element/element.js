let elements = page.querySelector('.elements');
let element = elements.querySelectorAll('.element');
let elementLike = elements.querySelectorAll('.element div.element__footer .element__like');



for (let i = 0; 0 < elementLike.length; i++) {
    elementLike[i].addEventListener('click',  function() {
        elementLike[i].classList.toggle('element__like_active');
    })
}