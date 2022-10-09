//Hamburger Menu
const hamButton = document.getElementById('ham');

hamButton.addEventListener('click', () => {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('ham').classList.toggle('open');
    console.log('it works')
})

// footer
window.addEventListener('load', () => {
    const today = new Date();

    document.getElementById('currentYear').textContent = today.getFullYear();
    document.getElementById('dateUpdate').textContent = document.lastModified;
    document.getElementById('todayDate').textContent = 
        today.toLocaleDateString('default', {weekday: 'long',}) +', '+ today.getDate()+ " " + today.toLocaleDateString('defaut', {month: 'long'}) + " " + today.getFullYear();
});

