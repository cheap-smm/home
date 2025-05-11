Array.from(document.querySelectorAll('.menu-container > :first-child'), el => el.addEventListener('click', (event) => {
    event.currentTarget.parentElement.classList.toggle('active');
}));

Array.from(document.querySelectorAll('[data-select-lang-pack]'), el => {
    el.addEventListener('click', function (event) {
        fetch ('/api/langPack?id=' + event.currentTarget.dataset.selectLangPack)
            .then(() => location.reload())
    })
});
