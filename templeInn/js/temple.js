const gridButton = document.querySelector('#grid');
const requestURL = "./js/data.json"; 

fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject); 
  let temple = jsonObject['temples'];
  temple.forEach(displaygrid);
});

function displaygrid(temple) {  
  let card = document.createElement('section');
  
  let img = document.createElement('img');
  img.setAttribute('src', temple.image);

  let h2 = document.createElement('h2'); 
  h2.textContent = temple.name; 
  
  let p1 = document.createElement('p');
  p1.textContent = temple.address;
  
  let p2 = document.createElement('p');
  p2.textContent = temple.phone;

  let h3 = document.createElement('h3');
  h3.textContent = "Services:";

  let li1 = document.createElement('li');
  li1.textContent = temple.services[0];

  let li2 = document.createElement('li');
  li2.textContent = temple.services[1];

  let li3 = document.createElement('li');
  li3.textContent = temple.services[2];

  let li4 = document.createElement('li');
  li4.textContent = temple.services[3];
  
  let h4 = document.createElement('h3');
  h4.textContent = "History";

  let hist = document.createElement('p');
  hist.textContent = temple.history.join();

  // let h5 = document.createElement('h3');
  // h5.textContent = "Temple Closures";

  // let li01 = document.createElement('li');
  // li01.textContent = temple.temple_closure[0]; 
  
  // let li02 = document.createElement('li');
  // li02.textContent = temple.temple_closure[1]; 
  
  // let li03 = document.createElement('li');
  // li03.textContent = temple.temple_closure[2]; 
  
  // let li04 = document.createElement('li');
  // li04.textContent = temple.temple_closure[3]; 
  
  // let li05 = document.createElement('li');
  // li05.textContent = temple.temple_closure[4]; 
  
  // let li06 = document.createElement('li');
  // li06.textContent = temple.temple_closure[5]; 
  
  // let li07 = document.createElement('li');
  // li07.textContent = temple.temple_closure[6]; 
  
  // let li08 = document.createElement('li');
  // li08.textContent = temple.temple_closure[7]; 
  
  // let li09 = document.createElement('li');
  // li09.textContent = temple.temple_closure[8]; 
  
  // let li10 = document.createElement('li');
  // li10.textContent = temple.temple_closure[9]; 
  
  // let li11 = document.createElement('li');
  // li11.textContent = temple.temple_closure[10]; 
  
  // let li12 = document.createElement('li');
  // li12.textContent = temple.temple_closure[11]; 


  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(p1);
  card.appendChild(p2);
  
  card.appendChild(h3);
  card.appendChild(li1);
  card.appendChild(li2);
  card.appendChild(li3);
  card.appendChild(li4);
  card.appendChild(h4);
  card.appendChild(hist);
  // card.appendChild(h5);
  // card.appendChild(li01);
  // card.appendChild(li02);
  // card.appendChild(li03);
  // card.appendChild(li04);
  // card.appendChild(li05);
  // card.appendChild(li06);
  // card.appendChild(li07);
  // card.appendChild(li08);
  // card.appendChild(li09);
  // card.appendChild(li10);
  // card.appendChild(li11);
  // card.appendChild(li12);

  document.querySelector('div.cards').appendChild(card);
}

// see more button
function seeMore() {
  var x = 1;
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function seeMore() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (moreText.style.display === "none") {
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}