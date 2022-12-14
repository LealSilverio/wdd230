const gridButton = document.querySelector('#grid');
const requestURL = "./js/services.json"; 

fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject); 
  let content = jsonObject['content'];
  content.forEach(displaygridS);
  content.forEach(displaygridA);
});

function displaygridS(content) {  
    let card = document.createElement('section');
  
    let h2 = document.createElement('h2'); 
    h2.textContent = "Services"; 
    
    let p1 = document.createElement('p');
    p1.textContent = content.services[0];

    let p2 = document.createElement('p');
    p2.textContent = content.services[1];

    let p3 = document.createElement('p');
    p3.textContent = content.services[2];

    let p4 = document.createElement('p');
    p4.textContent = content.services[3];

    let p5 = document.createElement('p');
    p5.textContent = content.services[4];

    let p6 = document.createElement('p');
    p6.textContent = content.services[5];

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(p6);

    document.querySelector('div.services').appendChild(card);
}

function displaygridA(content) {  
    let card = document.createElement('section');
  
    let h2 = document.createElement('h2'); 
    h2.textContent = "Free Amenities"; 
    
    let p1 = document.createElement('p');
    p1.textContent = content.amenities[0];

    let p2 = document.createElement('p');
    p2.textContent = content.amenities[1];

    let p3 = document.createElement('p');
    p3.textContent = content.amenities[2];

    let p4 = document.createElement('p');
    p4.textContent = content.amenities[3];

    let p5 = document.createElement('p');
    p5.textContent = content.amenities[4];

    let p6 = document.createElement('p');
    p6.textContent = content.amenities[5];

    let p7 = document.createElement('p');
    p7.textContent = content.amenities[6];

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(p6);
    card.appendChild(p7);

    document.querySelector('div.amenities').appendChild(card);
}