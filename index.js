const dropdown = document.querySelector(".dropdown");
const clear = document.getElementById("clear");
const countryElm = document.querySelector('.countries');

callCountryAll();


dropdown.addEventListener("click", displayCountryNeighbours);
clear.addEventListener("click", clearFunction);





function clearFunction() {
    countryElm.innerHTML = "";
}

function displayCountryNeighbours(e) {
    e.preventDefault();
    let countryName = e.target.innerText;
    console.log(countryName)
    showCountryWithNeighboars(countryName);
}

async function callCountryAll() {
    let response = await fetch("https://restcountries.com/v3.1/all");
    let countryName = await response.json()

    countryName
        .map(array => array.name.common)
        .forEach(country => {
            dropdown.innerHTML += `<li><a class="dropdown-item" href="#">${country}</a></li>`
        });