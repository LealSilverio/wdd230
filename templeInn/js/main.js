//Hamburger Menu
const menuButton = document.querySelector('#ham');
const today = new Date();


menuButton.addEventListener('click', () => {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('ham').classList.toggle('open');
})


// footer
document.getElementById('currentYear').textContent = today.getFullYear();
document.getElementById('dateUpdate').textContent = document.lastModified;



