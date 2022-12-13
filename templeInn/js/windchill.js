
// api.openweathermap.org/data/2.5/forecast?id=524901&appid={ec4f576b367da3067cc0909fb24b1cb2};
 
const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={ec4f576b367da3067cc0909fb24b1cb2}";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
});



let temp = document.querySelector('.temperature').textContent;
let windSpeed = document.querySelector('.windS').textContent;
Number(temp);
Number(windSpeed);

console.log(temp, windSpeed);

if (temp <= 50 && windSpeed > 3.0) {
    document.querySelector(".windC").innerHTML = calculateWind(temp, windSpeed);
    console.log("here")
} 
else {  
    console.log('not here')
    document.querySelector(".windC").innerHTML = 'N/A';
}

function calculateWind(temp, windSpeed) {
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16)));
    return chill;
}