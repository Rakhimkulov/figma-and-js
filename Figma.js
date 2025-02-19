const countriesContainer = document.getElementById("countries-container");
const searchInput = document.getElementById("search");
const regionFilter = document.getElementById("region-filter");
const darkModeToggle = document.getElementById("dark-mode-toggle");

let countriesData = [];


fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        countriesData = data;
        displayCountries(countriesData);
    });

function displayCountries(countries) {
    countriesContainer.innerHTML = "";
    countries.forEach(country => {
        const countryCard = document.createElement("div");
        countryCard.classList.add("country-card");

        countryCard.innerHTML = `
            <img src="${country.flags.svg}" alt="${country.name.common}">
            <h3>${country.name.common}</h3>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}</p>
        `;

        countriesContainer.appendChild(countryCard);
    });
}


searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredCountries = countriesData.filter(country =>
        country.name.common.toLowerCase().includes(query)
    );
    displayCountries(filteredCountries);
});


regionFilter.addEventListener("change", () => {
    const region = regionFilter.value;
    const filteredCountries = region
        ? countriesData.filter(country => country.region === region)
        : countriesData;
    displayCountries(filteredCountries);
});

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
