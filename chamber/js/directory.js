const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const requestURL = "./js/data.json"; 

fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject); 
  let business = jsonObject['businesses'];
  business.forEach(displaygrid);
  business.forEach(displaylist);
});

function displaygrid(business) {  
  let card = document.createElement('section');

  let img = document.createElement('img');
  img.setAttribute('src', business.image);

  let h2 = document.createElement('h2'); 
  h2.textContent = business.name; 
  
  let p1 = document.createElement('p');
  p1.textContent = business.address;
  
  let p2 = document.createElement('p');
  p2.textContent = business.phone;

  let web = document.createElement('a');
  web.textContent = business.name;
  web.setAttribute('href', business.website);

  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(web);

  document.querySelector('div.cards').appendChild(card);
}
function displaylist(business) {  
  let card = document.createElement('section');

  let h2 = document.createElement('h2'); 
  h2.textContent = business.name; 
  
  let p1 = document.createElement('p');
  p1.textContent = business.address;
  
  let p2 = document.createElement('p');
  p2.textContent = business.phone;

  let web = document.createElement('a');
  web.textContent = business.name;
  web.setAttribute('href', business.website);

  card.appendChild(h2);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(web);

  document.querySelector('div.list').appendChild(card);
}

// event listener
gridButton.addEventListener('click', () => {
    document.getElementById('grid').classList.toggle('open');
    document.querySelector('.cards').classList.toggle('open');
    console.log("here");
})

listButton.addEventListener('click', () => {
  document.getElementById('list').classList.toggle('open');
  document.querySelector('.list').classList.toggle('open');
})