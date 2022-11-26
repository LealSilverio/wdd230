window.addEventListener('load', (today) => {
    
    let temp = document.querySelector('.temperature').textContent;
    let windSpeed = document.querySelector('.windS').textContent;
    let windChill = document.querySelector(".windC").textContent;
    Number(temp);
    Number(windSpeed);

    console.log(temp, windSpeed);

    if (temp <= 50 && windSpeed > 3.0) { // this line doesnt
        windChill = calculateWind(temp, windSpeed);
        console.log(windChill);
    } 
    else {  
        windChill = 'N/A';
    }
});

function calculateWind(temp, windSpeed) {
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16)));
    console.log(chill);
}