//Hamburger Menu
const menuButton = document.querySelector('#ham');
const today = new Date();

console.log("Made it here");

menuButton.addEventListener('click', () => {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('ham').classList.toggle('open');
    console.log('it works')
})

console.log("Made it here 2");

// come join part
if(today.getDate() == 4){
    document.querySelector("header div p").style.display='block';
}

// footer
window.addEventListener('load', (today) => {
    

    document.getElementById('currentYear').textContent = today.getFullYear();
    document.getElementById('dateUpdate').textContent = document.lastModified;
    document.getElementById('todayDate').textContent = 
        today.toLocaleDateString('default', {weekday: 'long',}) +', '+ today.getDate()+ " " + today.toLocaleDateString('defaut', {month: 'long'}) + " " + today.getFullYear();
});
console.log("Made it here 3");

