// this is the most up to date version of defer. Instead of defer, I do this
window.addEventListener('load', () => {
    const today = new Date();

    document.querySelector("footer div span").textContent = today.getFullYear();
    document.getElementById("dateUpdate").textContent = document.lastModified;
})
