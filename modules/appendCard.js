const cardProductContainer = document.querySelector('.cardProductContainer');
const cardProductFeragment = document.createDocumentFragment();
function addCard(entryArr){
   entryArr.forEach(eachProductArray => {
      const cardComponent = document.createElement('card-product');
      // set product image
      cardComponent.setAttribute('product-img', eachProductArray.image);
      // set product label
      cardComponent.setAttribute('product-label', eachProductArray.label);
      // set product color
      cardComponent.setAttribute('product-colors', eachProductArray.colors);
      // set product title
      const fullTitle = eachProductArray.title + eachProductArray.storage
      cardComponent.setAttribute('product-title', fullTitle);
      // set product price
      cardComponent.setAttribute('product-price', eachProductArray.price);
      cardProductFeragment.append(cardComponent);
   });
   cardProductContainer.append(cardProductFeragment);
}

export { addCard }