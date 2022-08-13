import { allProductData } from '/src/js/data.js';
import { setColor } from '../../modules/setProductColors.js';

const productLargeImage = document.querySelector('.productLargeImage');
const productLabel = document.querySelector('.productLabel');
const productTitle = document.querySelector('.productTitle');
const productModel = document.querySelector('.productModel');
const colorsContainer = document.querySelector('.colorsContainer');
const productPrice = document.querySelectorAll('.productPrice');
const storageFeature = document.querySelector('.storageFeature');
const displayFeature = document.querySelector('.displayFeature');
const chargeFeature = document.querySelector('.chargeFeature');
const reviewText = document.querySelector('.reviewText');
const continuationReviewInfoBtn = document.querySelector('.continuationReviewInfo');
const designText = document.querySelector('.designText');
const designImage = document.querySelectorAll('.designImage');
const cameraText = document.querySelector('.cameraText');
const batteryText = document.querySelector('.batteryText');
const tabItems = document.querySelectorAll('.tabItems');
const tabContent = document.querySelector('.tabContent');
const fastAccessItems = document.querySelectorAll('.fastAccessItems');
const descriptionContainer = document.querySelector('.descriptionContainer').children;
const addToCartBtn = document.querySelectorAll('.addToCartBtn');
const allLiElements = document.querySelectorAll('li');
const productTypeLabel = document.querySelector('.productTypeLabel');
const getPageModel = location.search;
const creatUrlSearch = new URLSearchParams(getPageModel);
const getProductModel = creatUrlSearch.get('model');
const currentProductObj = allProductData.find(productObj => {
   return productObj.model == getProductModel;
})
// set page title 
document.title = currentProductObj.title
// set title for header in small display
const header = document.querySelector('header')
const smallHeader = document.createElement('small-header');
smallHeader.setAttribute('hide-logo', 'true');
smallHeader.setAttribute('title', currentProductObj.title);
header.append(smallHeader);
// set breadcrumb Items 
const breadcrumbItems = [...allLiElements].slice(0, 3);
switch (currentProductObj.type) {
   case ('mobile'):
      breadcrumbItems[0].firstElementChild.textContent = 'تلفن همراه';
      productTypeLabel.textContent = 'تلفن همراه';
      break;
   case ('laptop'):
      breadcrumbItems[0].firstElementChild.textContent = 'لپ تاپ';
      productTypeLabel.textContent = 'لپ تاپ';
      break;
   case ('watch'):
      breadcrumbItems[0].firstElementChild.textContent = 'ساعت هوشمند';
      productTypeLabel.textContent = 'ساعت هوشمند'
      break;
}
breadcrumbItems[1].firstElementChild.textContent = currentProductObj.label;
breadcrumbItems[2].textContent = currentProductObj.title;
// set large image 
productLargeImage.setAttribute('src', currentProductObj.image);
// set product label
productLabel.textContent = currentProductObj.label;
// set title
productTitle.textContent = currentProductObj.title + currentProductObj.storage;
// set model
productModel.textContent = currentProductObj.model.replaceAll('-', ' ');
// set colors
const coloryCircles = setColor(currentProductObj.colors, 20);
colorsContainer.append(coloryCircles);
const allColoryCirclesArr = [...colorsContainer.children];
allColoryCirclesArr[0].style.border = '2px solid black';
for (let a = 0; a < allColoryCirclesArr.length; a++) {
   allColoryCirclesArr[a].classList.replace('w-4', 'w-7');
   allColoryCirclesArr[a].classList.replace('h-4', 'h-7');
   allColoryCirclesArr[a].addEventListener('click', e => {
      [...e.target.parentElement.children].forEach(circle => {
         circle.style.border = 'none'
      })
      e.target.style.border = '2px solid black';
      productLargeImage.setAttribute('src', currentProductObj.image.replace('image1', `image${a + 1}`));
   })
}
// set price
productPrice.forEach(price => {
   price.textContent = currentProductObj.price;
})
// set phone storage
storageFeature.textContent = currentProductObj.storage;
// set phone display
displayFeature.textContent = currentProductObj.display;
// set phone charge
chargeFeature.textContent = currentProductObj.charge;
reviewText.textContent = currentProductObj.explaination[0];
designText.textContent = currentProductObj.explaination[1];
designImage.forEach(eachDesignImage => {
   eachDesignImage.setAttribute('src', currentProductObj.designImage);
})
cameraText.textContent = currentProductObj.explaination[2];
tabContent.textContent = currentProductObj.explaination[2];
batteryText.textContent = currentProductObj.explaination[3];

if (window.innerWidth < 1024) {
   if (reviewText.textContent.length > 375) {
      const fullReviewText = reviewText.textContent;
      const sliceReviewText = reviewText.textContent.slice(0, reviewText.textContent.indexOf('؛')).padEnd(reviewText.textContent.indexOf('؛') + 3, '...');
      reviewText.textContent = sliceReviewText;
      continuationReviewInfoBtn.addEventListener('click', e => {
         if (e.target.textContent == 'ادامه مطلب') {
            reviewText.textContent = fullReviewText;
            continuationReviewInfoBtn.textContent = 'خلاصه مطلب';
         } else {
            reviewText.textContent = sliceReviewText;
            continuationReviewInfoBtn.textContent = 'ادامه مطلب';
            reviewText.parentElement.style.cssText = 'scroll-margin: 70px;';
            reviewText.parentElement.scrollIntoView({ behavior: 'smooth' })
         }
      })
   } else {
      continuationReviewInfoBtn.classList.add('hidden')
   }
}

tabItems.forEach(eachTabItem => {
   eachTabItem.addEventListener('click', e => {
      const allSpans = [...e.target.parentElement.parentElement.children];
      allSpans.forEach(eachSapnElement => {
         eachSapnElement.className = ''
      })
      e.target.parentElement.className = 'p-4 flex items-center shadow-md h-1/2 bg-stone-50 rounded-3xl';
      switch (e.target.textContent) {
         case ('باتری'):
            tabContent.textContent = batteryText.textContent;
            tabContent.nextElementSibling.classList.add('hidden');
            break;
         case ('دوربین'):
            tabContent.textContent = cameraText.textContent;
            tabContent.nextElementSibling.classList.add('hidden');
            break;
         case ('طراحی'):
            tabContent.textContent = designText.textContent;
            tabContent.nextElementSibling.classList.remove('hidden');
            break;
      }
   })
})

if (window.innerWidth > 1024) {
   for (let i = 0; i < fastAccessItems.length; i++) {
      fastAccessItems[i].parentElement.addEventListener('click', () => {
         descriptionContainer[i+1].style.cssText = 'scroll-margin: 30px;';
         descriptionContainer[i+1].scrollIntoView({ behavior: 'smooth' })
      })
   }
}

// create cart key in localstorage if doesn't exist 
window.addEventListener('load', () => {
   if (!localStorage.getItem('Cart')) {
      localStorage.setItem('Cart', '');
   } else {
      const getCartArr = JSON.parse(localStorage.getItem('Cart'));
      const existProductInStorage = getCartArr.find(eachObject => {
         return eachObject.model == getProductModel
      })
      if (existProductInStorage.model == getProductModel) {
         addToCartBtn.forEach(btn => {
            btn.textContent = 'به سبد خرید اضافه شد'
            btn.classList.replace('bg-orange-500', 'bg-gray-200');
            btn.classList.replace('text-stone-50', 'text-slate-800');
         })
      }
   }
})

// Add product model to cart
addToCartBtn.forEach(eachBtn => {
   eachBtn.addEventListener('click', e => {
      const btn = e.currentTarget;
      console.log(productLargeImage);
      if (!localStorage.getItem('Cart')) {
         localStorage.setItem('Cart', JSON.stringify([{ model: getProductModel, amount: 1, color: productLargeImage.src }]));
         btn.textContent = 'به سبد خرید اضافه شد'
         btn.classList.replace('bg-orange-500', 'bg-gray-200');
         btn.classList.replace('text-stone-50', 'text-slate-800');
      } else {
         const getCartArr = JSON.parse(localStorage.getItem('Cart'));
         btn.textContent = 'به سبد خرید اضافه شد'
         btn.classList.replace('bg-orange-500', 'bg-gray-200');
         btn.classList.replace('text-stone-50', 'text-slate-800');
         const existProductInStorage = getCartArr.find(eachObject => {
            return eachObject.model == getProductModel
         })
         if (!existProductInStorage) {
            getCartArr.push({ model: getProductModel, amount: 1, color: productLargeImage.src });
            localStorage.setItem('Cart', JSON.stringify(getCartArr));
         }
      }
   }, { once: true })
})
