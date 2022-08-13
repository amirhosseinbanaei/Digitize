import { allProductData } from '/src/js/data.js';

const addedProductToCartArr = JSON.parse(localStorage.getItem('Cart'));
// All product object Array
const addedProductObjArr = [];
const amountProduct = [];
addedProductToCartArr.forEach(eachProduct => {
   eachProduct.model.replaceAll('-', '');
   amountProduct.push(eachProduct.amount);
   const currentProductObj = allProductData.find(productObj => {
      return productObj.model == eachProduct.model;
   })
   addedProductObjArr.push(currentProductObj)
});

// All product price array
let allPriceArr = [];
// Loop on product object arry and create card for each product and push it
const cartCardContainer = document.querySelector('.cartCardContainer');
// addedProductObjArr.forEach(eachAddedProductObj => {
//    const createCartCard = document.createElement('cart-card');
//    // set title
//    createCartCard.setAttribute('title', eachAddedProductObj.title);
//    // set price
//    createCartCard.setAttribute('price', eachAddedProductObj.price);
//    // set image
//    createCartCard.setAttribute('image', eachAddedProductObj.image);
//    // set model
//    createCartCard.setAttribute('model', eachAddedProductObj.model);

//    // Each product price
//    const eachProductPrice = +eachAddedProductObj.price.replaceAll(',', '');
//    allPriceArr.push(eachProductPrice);

//    cartCardContainer.append(createCartCard);
// })

for (let i = 0; i < addedProductObjArr.length; i++) {
   const createCartCard = document.createElement('cart-card');
   // set title
   createCartCard.setAttribute('title', addedProductObjArr[i].title);
   // set price
   // get price and multiply it to amount of product
   const oneProductPrice = addedProductObjArr[i].price.replaceAll(',' , '');
   const someProductPrice = oneProductPrice * amountProduct[i];
   createCartCard.setAttribute('price', someProductPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
   // set image
   createCartCard.setAttribute('image', addedProductToCartArr[i].color);
   // set model
   createCartCard.setAttribute('model', addedProductObjArr[i].model);

   // Each product price
   allPriceArr.push(someProductPrice);

   cartCardContainer.append(createCartCard);
}

// calculate all price and push it to 
const allProductPrice = document.querySelector('.allProductPrice');
const finalPriceContainer = document.querySelector('.finalPriceContainer');
let allPrice = 0;
allPriceArr.forEach(eachPrice => {
   allPrice += eachPrice;
   const allPriceString = allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   allProductPrice.textContent = allPriceString;
   finalPriceContainer.textContent = allPriceString;
})

// accept discount code
const discount = document.querySelector('.discount');
const acceptDiscountBtn = document.querySelector('.acceptDiscountBtn');
acceptDiscountBtn.addEventListener('click', e => {
   const inputValue = e.target.previousElementSibling.value;
   if (inputValue === 'Digitize') {
      discount.textContent = '500,000'
      allPrice -= 500000;
      const finalPrice = allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      finalPriceContainer.textContent = finalPrice;
   }
})
