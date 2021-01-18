let elementLike = document.querySelectorAll('.element__like');


for (let i = 0; 0 < elementLike.length; i++) {
    elementLike[i].addEventListener('click', () => {
        elementLike[i].classList.toggle('element__like_active');
    })
}