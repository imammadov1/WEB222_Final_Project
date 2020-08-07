/* Add any JavaScript you need to this file. 
STUDENT NAME: ILKIN MAMMADOV
STUDENT ID: 148860182
USER ID: IMAMMADOV1@MYSENECA.CA
 I DECLARE THAT I HAVE DONE ALL WORK BY MYSELF
*/
const items = [
  {
    img: 'Tomato.jpg',
    title: 'Tomato',
    price: '$2.45 lb',
    category: 'Vegetable'
  },
  {
    img: 'Cucumber.jpg',
    title: 'Cucumber',
    price: '$1.05 ea',
    category: 'Vegetable'
  },
  {
    img: 'Onion.jpg',
    title: 'Onion',
    price: '$1.55 lb',
    category: 'Vegetable'
  },
  {
    img: 'Potato.jpg',
    title: 'Potato',
    price: '$1.45 lb',
    category: 'Vegetable'
  },
  {
    img: 'Carrot.jpg',
    title: 'Carrot',
    price: '$3.25 bag',
    category: 'Vegetable'
  },
  {
    img: 'Banana.jpg',
    title: 'Banana',
    price: '$0.50 lb',
    category: 'Fruits'
  },
  {
    img: 'Apple.jpg',
    title: 'Apple',
    price: '$1.49 lb',
    category: 'Fruits'
  },
  {
    img: 'Grapes.jpg',
    title: 'Grapes',
    price: '$2.49 lb',
    category: 'Fruits'
  },
  {
    img: 'Pear.jpg',
    title: 'Pear',
    price: '$1.75 lb',
    category: 'Fruits'
  },
  {
    img: 'Orange.jpg',
    title: 'Orange',
    price: '$1.79 lb',
    category: 'Fruits'
  },
  {
    img: 'Fish.jpg',
    title: 'Canned Fish',
    price: '$1.99 ea',
    category: 'Canned Food'
  },
  {
    img: 'Meat.jpg',
    title: 'Canned Beef',
    price: '$2.15 ea',
    category: 'Canned Food'
  },
  {
    img: 'Soup.jpg',
    title: 'Canned Soup',
    price: '$2.00 ea',
    category: 'Canned Food'
  },
  {
    img: 'Corn.jpg',
    title: 'Canned Corn',
    price: '$1.25 ea',
    category: 'Canned Food'
  },
  {
    img: 'Milk.jpg',
    title: 'Canned Milk',
    price: '$1.89 ea',
    category: 'Canned Food'
  },
  {
    img: 'Water.jpg',
    title: 'Spring Water',
    price: '$0.70 Btl',
    category: 'Drinks'
  },
  {
    img: 'Cola.jpg',
    title: 'Coca-Cola',
    price: '$1.15 btl',
    category: 'Drinks'
  },
  {
    img: 'Soda.jpg',
    title: 'Sparkling Water',
    price: '$0.75 btl',
    category: 'Drinks'
  },
  {
    img: 'OrangeJuice.jpg',
    title: 'Orange Juice',
    price: '$3.99 btl',
    category: 'Drinks'
  },
  {
    img: 'Tonic.jpg',
    title: 'Schweppes',
    price: '$2.15 btl',
    category: 'Drinks'
  }
];

function createItem(item) {
  let itemElement = document.createElement('div');
  itemElement.className = 'item';

  let image = document.createElement('img');
  image.src = `images/${item.img}`;
  image.alt = item.title;
  itemElement.appendChild(image);

  let itemHeader = document.createElement('div');
  itemHeader.className = 'item-header';

  let itemTitle = document.createElement('h5');
  itemTitle.innerHTML = item.title;
  itemHeader.appendChild(itemTitle);

  let itemPrice = document.createElement('h5');
  itemPrice.innerHTML = `Price: ${item.price}`;
  itemHeader.appendChild(itemPrice);
  itemElement.appendChild(itemHeader);

  let addCart = document.createElement('div');
  addCart.className = 'item-add';

  let itemQuantity = document.createElement('input');
  itemQuantity.placeholder = 'Qty';
  addCart.appendChild(itemQuantity);

  let itemAddButton = document.createElement('button');
  itemAddButton.innerHTML = 'Add to Cart';
  addCart.appendChild(itemAddButton);
  itemElement.appendChild(addCart);
  return itemElement;
}

function displayItems(items, category = '') {
  let main = document.querySelector('main');
  main.innerHTML = '';
  const filteredItems = itemCategory(items, category);
  for (let i = 0; i < filteredItems.length; i++) {
    main.appendChild(createItem(filteredItems[i]));
  }
}

function itemCategory(items, category) {
  let result = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].category === category || category === '') {
      result.push(items[i]);
    }
  }
  return result;
}

window.onload = function() {
  displayItems(items);
  let buttons = [...document.querySelectorAll('nav > button')];
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', event => displayItems(items, event.target.value));
  }
};
