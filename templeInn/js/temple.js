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

  let div = document.createElement('div')

  let h3 = document.createElement('h3');
  h3.textContent = "Services:";

  let li = document.createElement('li');
  li.textContent = temple.services.forEach(split(" "));
  
  let h4 = document.createElement('h3')
  h4.textContent = "History";

  let hist = document.createElement('p');
  hist.textContent = temple.history.join();

  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(div);
  card.div.appendChild(h3);
  card.div.appendChild(li);
  card.div.appendChild(hist);

  document.querySelector('div.cards').appendChild(card);
}

// see more button
function seeMore() {
  var dots = document.getElementById("dots");
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