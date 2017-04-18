// const buildProducts = ()
const productData = [
  {
    'name': 'Honda',
    'description': 'Honda Motor Co., Ltd. is a Japanese public multinational conglomerate corporation primarily known as a manufacturer of automobiles, aircraft, motorcycles, and power equipment',
    'bullets': ['Civic', 'Accord', 'CRV'],
    'tooltip': 'Lasts a really long time',
    'learnMore': 'http://www.honda.com'
  },
  {
    'name': 'BMW',
    'description': 'Bayerische Motoren Werke AG, usually known under its abbreviation BMW, is a German luxury vehicle, motorcycle, and engine manufacturing company founded in 1916. It is one of the best-selling luxury automakers in the world.',
    'bullets': ['3 Series', 'X5', 'i8', 'Z4', 'X1', 'X3'],
    'tooltip': 'Expensive',
    'learnMore': 'http://www.bmw.com'
  },
  {
    'name': 'TELSA',
    'description': 'Tesla, Inc. is a major American automaker, energy storage company, and solar panel manufacturer based in Palo Alto, California.',
    'bullets': ['S', 'Roadster', '3', 'X'],
    'tooltip': 'No more gas',
    'learnMore': 'http://www.tesla.com'
  }
];

// Selects Product Container
const $productContainer = document.getElementsByClassName('product-container');

// Builds product cards with product data
const buildProductCards = data => {

  data.forEach((val, i) => {
    // Creates card elements
    let $productCard = document.createElement('DIV'),
    $title = document.createElement('DIV'),
    $description = document.createElement('DIV'),
    $list = document.createElement('UL'),
    $learnMore = document.createElement('DIV');

    // Adds styles
    $productCard.className += ' product-card';
    $title.className += ' title';
    $description.className += ' description';
    $list.className += ' list';
    $learnMore.className += ' learn-more';

    // Adds product data to elements
    $title.appendChild(document.createTextNode(val.name));
    $description.appendChild(document.createTextNode(val.description));
    $learnMore.appendChild(document.createTextNode('Learn More'));

    // Builds list
    val.bullets.forEach(item => {
      let $li = document.createElement('LI');
      $li.appendChild(document.createTextNode(item));
      $list.appendChild($li);
    });

    $productCard.appendChild($title);
    $productCard.appendChild($description);
    $productCard.appendChild($list);
    $productCard.appendChild($learnMore);

    $productContainer[0].appendChild($productCard);
  });


  // console.log($productContainer);

}

buildProductCards(productData);

/* <div class='product-card'>
  <div class='title'></div>
  <div class='description'></div>
  <div class='list'></div>
  <div class='learn-more'>Learn More</div>
</div> */
