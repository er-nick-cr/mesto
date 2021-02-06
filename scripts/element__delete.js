document.querySelectorAll('.element__delete').forEach(item => {
    item.addEventListener('click', () => item.closest('.element').remove());
}
)