// const buildProducts = ()
const productData = [
  {
    'name': 'Honda',
    'description': 'Honda Motor Co., Ltd. is a Japanese public multinational conglomerate corporation primarily known as a manufacturer of automobiles, aircraft, motorcycles, and power equipment.',
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
    'tooltip': 'Expensive + no more gas',
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
        $learnMore = document.createElement('DIV'),
        $tooltipImg = document.createElement('IMG');
        $tooltipImg.src = 'https://cdn1.iconfinder.com/data/icons/education-set-4/512/information-128.png',
        $tooltipImg.width = '11',
        $tooltipImg.height ='11',
        $tooltipImg.id = 'tooltip' + i,
        $tooltipDiv = document.createElement('DIV'),
        $tooltipDiv.id = 'tooltipDiv' + i,
        $tooltipArrow = document.createElement('IMG'),
        $tooltipArrow.src = 'https://image.flaticon.com/icons/svg/25/25330.svg',
        $tooltipArrow.width = 19,
        $tooltipArrow.height = 13,
        $tooltipArrow.id = 'tooltip-arrow' + i;

    // Adds styles
    $productCard.className += ' product-card';
    $title.className += ' title';
    $description.className += ' description';
    $list.className += ' list';
    $learnMore.className += ' learn-more';
    $tooltipImg.className += ' tooltip-img';
    $tooltipDiv.className += ' tooltip-div';
    $tooltipArrow.className += ' tooltip-arrow';

    // Adds product data to elements
    $title.appendChild(document.createTextNode(val.name));
    $learnMore.appendChild(document.createTextNode('Learn More'));
    $tooltipDiv.appendChild(document.createTextNode(val.tooltip));
    // Checks description length
    $description.appendChild(document.createTextNode(val.description));
    // Adds tooltipImg icon
    $description.appendChild($tooltipImg);
    $description.appendChild($tooltipDiv);
    $description.appendChild($tooltipArrow);

    // Builds list
    val.bullets.forEach(item => {
      let $li = document.createElement('LI');
      $li.appendChild(document.createTextNode(item));
      $list.appendChild($li);
    });

    // Places elements in product card
    $productCard.appendChild($title);
    $productCard.appendChild($description);
    $productCard.appendChild($list);
    $productCard.appendChild($learnMore);

    // Adds product card to product container
    $productContainer[0].appendChild($productCard);

    // Sub runs after all varibles are declared
    const sub = () => {
      let $tooltipEvent = document.getElementById('tooltip' + i),
          $tooltipDivEvent = document.getElementById('tooltipDiv' + i),
          $tooltipImgLocation = document.getElementsByClassName('tooltip-img'),
          $tooltipArrowEvent = document.getElementById('tooltip-arrow' + i),
          $tooltipArrows = document.getElementsByClassName('tooltip-arrow');

      // Adds Arrows to above tooltips and below 'i' icon
      $tooltipArrows[i].style.zIndex = 99 + i;
      $tooltipArrows[i].style.top = ($tooltipImgLocation[i].offsetTop + 10) + 'px';
      $tooltipArrows[i].style.left = $tooltipImgLocation[i].offsetLeft + 'px';

      // Adds tooltip functionality
      $tooltipEvent.addEventListener("mouseover", function(){
        $tooltipDivEvent.style.display = 'block';
        $tooltipArrowEvent.style.display = 'block';
      });
      $tooltipEvent.addEventListener("mouseout", function(){
        setTimeout(()=>{
          $tooltipDivEvent.style.display = 'none';
          $tooltipArrowEvent.style.display = 'none';
        }, 750);
      });
    }
    sub();

  });

}

buildProductCards(productData);




/* <div class='product-card'>
  <div class='title'></div>
  <div class='description'></div>
  <div class='list'></div>
  <div class='learn-more'>Learn More</div>
</div> */
