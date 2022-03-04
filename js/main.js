const menuBtn = document.querySelector('.menu-btn'),
    headerMenuContent = document.querySelector('.header__menuContent'),
    body = document.getElementsByTagName('body')[0];

const linkRegAuth = document.querySelector('.linkRegAuth'),
    headerBtn = document.querySelector('#headerBtn');

const btnRegistr = document.querySelector('.btnRegistr'),
    regForm = document.querySelector('.reg__form');

const btnEntrance = document.querySelector('.btnEntrance'),
    autoForm = document.querySelector('.auto__form');

menuBtn.addEventListener('click', () => {
    headerMenuContent.classList.toggle('active');
    menuBtn.classList.toggle('menu-btn_active')
    body.classList.toggle('lock');
})

linkRegAuth.addEventListener('click', () => {
    if (headerBtn.style.display == 'none') {
        headerBtn.style.display = 'flex';
    } else {
        headerBtn.style.display = 'none';
    }
})

btnRegistr.addEventListener('click', () => {
    regForm.classList.remove('noActive');
    body.classList.toggle('lock');
})

btnEntrance.addEventListener('click', () => {
    autoForm.classList.remove('noActive');
    body.classList.toggle('lock');
})

function closeForm(elem, elemClose, e) {
    let target = e.target;
    if (!target.closest(elem)) {
        $(elemClose).addClass('noActive')
        body.classList.remove('lock');
    }
}

autoForm.addEventListener('click', (e) => { closeForm('.auto__body', '.auto__form', e); })
regForm.addEventListener('click', (e) => { closeForm('.reg__body', '.reg__form', e); })