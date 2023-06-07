"use strict";

const dropdownLocation = document.getElementById("dropdownLocation");
const output = document.getElementById("output");

const cityData = [
    {
        name: "New York",
        latitude: 40.7128,
        longitude: -74.0060
      },
      {
        name: "Los Angeles",
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        name: "Chicago",
        latitude: 41.8781,
        longitude: -87.6298
      },
      {
        name: "Houston",
        latitude: 29.7604,
        longitude: -95.3698
      },
      // Add more cities as needed
    ];

window.onload = () => {
    showCityData(); // Call the function to populate the dropdown on page load
    dropdownLocation.onchange = dropdownofCityData; // Fix the typo here
};

function showCityData() {
    for (let city of cityData) {
        let newOption = new Option(city.name);
        dropdownLocation.appendChild(newOption);
    }
}

// Responsible for populating cities
function dropdownofCityData() {
    let SelectedCity = dropdownLocation.value;
    const cityChoice = cityData.find(city => city.name === SelectedCity);
    console.log(cityChoice); // Use find instead of filter
    
   
    // Do something with the selected city object
}
