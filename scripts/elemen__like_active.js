document.querySelectorAll('.element__like').forEach(item => {
    item.addEventListener('click', () => item.classList.toggle('element__like_active'));
}
    )