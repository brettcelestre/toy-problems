/**
Given a list of cities, implement an input box that shows a dropdown of cities that match the inputted text.

On click of a city, it should replace the input box text and hide the dropdown.

const cities = ['Boston', 'Berlin', 'Los Angeles', 'San Francisco', 'Santa Clara'];
*/

const cities = ['Boston', 'Berlin', 'Pleasant Hill', 'Los Angeles', 'San Francisco', 'Santa Clara', 'Paris', 'Washington', 'Concord', 'Walnut Creek', 'San Jose', 'Palo Alto', 'Compton'];

// Dropdown Element
let $dropdown = document.getElementById('dropdown-list');

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
      // let node = document.createElement("div"),
      // textnode = document.createTextNode(city);
      // node.appendChild(textnode);
      // $dropdown.appendChild(node);

      // let item = `<div onClick="setCity(${city})"> ${city} </div>`;
      let item = '<div onClick="setCity("' + city + '")">' + city + '</div>';
      // let item = '<div onClick="setCity()">' + city + '</div>';

      $dropdown.innerHTML += item;
    });
  }
}

setCity = city => {
  console.log('setCity ran', city);
}

/*
var node = document.createElement("div");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
*/
