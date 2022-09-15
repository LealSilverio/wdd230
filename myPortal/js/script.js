const newDate = new Date();
const time = newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();

document.getElementById("dateUpdate").innerHTML = newDate.toLocaleDateString("short") + " " + time;
document.getElementById("currentYear").innerHTML = newDate.getFullYear();