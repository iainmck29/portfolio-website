const menu = document.getElementById('menu');
const exit = document.getElementById('exit');
const nav = document.getElementById('nav');



menu.addEventListener('click', e => {
    nav.classList.toggle('hide-mobile')
})

exit.addEventListener('click', e => {
    nav.classList.toggle('hide-mobile')
})