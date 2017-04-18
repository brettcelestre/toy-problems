/**
Given a list of cities, implement an input box that shows a dropdown of cities that match the inputted text.

On click of a city, it should replace the input box text and hide the dropdown.

const cities = ['Boston', 'Berlin', 'Los Angeles', 'San Francisco', 'Santa Clara'];
*/

const cities = ['Boston', 'Berlin', 'Pleasant Hill', 'Los Angeles', 'San Francisco', 'Santa Clara', 'Paris', 'Washington', 'Concord', 'Walnut Creek', 'San Jose', 'Palo Alto', 'Compton'];

// Dropdown Element
let $dropdown = document.getElementById('dropdown-list'),
    $input = document.getElementById('cities-list');

dropdownList = () => {
  // Search Value
  let $citiesInput = document.getElementById('cities-list').value.toLowerCase(),
  // Stores value length
      $citiesInputLength = $citiesInput.length,
  // Stores filtered cities list
      list = [];

  // Clears dropdown list
  while ($dropdown.firstChild) {
    $dropdown.removeChild($dropdown.firstChild);
  }

  // Only filters if something is inputted
  if ( $citiesInputLength ) {

    // Filters cities into list
    cities.forEach((val, i, e) => {
      let result = (val.substr(0,$citiesInputLength)).toLowerCase();
      if ( result == $citiesInput ) {
        list.push(val);
      }
    });

    // Builds dropdown with list data
    list.forEach(city => {
      let item = '<div onclick="setCity(this)">' + city + '</div>';
      $dropdown.innerHTML += item;
    });
  }
}

// Sets city inside of input
setCity = (city) => {
  $input.value = city.innerHTML;
}
