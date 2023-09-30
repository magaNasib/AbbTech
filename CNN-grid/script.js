let bntMenu = document.getElementById('btnMenu')
let navLinks = document.getElementById('navLinks')
let isOpenMenu = false

const clickHandler = (e) => {
    e.preventDefault();
    if (window.innerWidth < 768) {
        if (!isOpenMenu) {
            navLinks.style.display = 'flex'

        }
        else {
            navLinks.style.display = 'none'

        }

        isOpenMenu = !isOpenMenu
    }
}
bntMenu.addEventListener('click', clickHandler)
