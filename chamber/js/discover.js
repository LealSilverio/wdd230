// window.localStorage.setTime("last-visit", new Date('09/25/2022'));

const visit = document.querySelector("#visit-messafe");

let visitMessage = "This is your first visit to the page.";
let todayDate = new Date();

let lastVisitString = window.localStorage.getItem("last-visit");
if (lastVisitString != null) {
    let lastVisitDate = new Date(lastVisitString);
    let dateDifference = Math.floor((todayDate.getTime() - lastVisitDate.getTime()) / (24 * 60 * 1000));
    visitMessage = `You last visited the page ${dateDifference} days ago.`;
}

visit.textContent = visitMessage;
window.localStorage.setItem("last-visit", todayDate.toString());