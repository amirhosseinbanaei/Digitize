import { allProductData } from '/src/js/data.js';
import { setColor } from '../../modules/setProductColors.js'

const template = document.createElement('template');
template.innerHTML = `
<!-- Tailwind css file -->
<link rel="stylesheet" href="/public/build/tailwind.css">
<!-- card product -->
<div class="w-full h-96 bg-stone-50 rounded-xl shadow-sm flex flex-col relative">
   <!-- heart icon container -->
   <div class="h-8 w-8 rounded-full right-3 top-3 bg-gray-200 absolute flex items-center justify-center heartIconContainer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-600 hidden" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
      </svg>
   </div>
   <!-- product img container -->
   <div class="w-full h-1/2 flex items-center p-1 justify-center">
      <!-- product background -->
      <div class="bg-opacity-70 w-full h-40 rounded-lg flex items-center justify-center">
         <img class="mb-3 productImg w-auto h-5/6">
      </div>
   </div>
   <!-- product price container -->
   <div class="w-full h-1/2 grid grid-rows-5 pt-5 px-3">
      <!-- label and colors -->
      <div class="w-full mx-auto h-6 flex justify-between items-center">
         <!-- label -->
         <label class="font-medium text-slate-200 leading-7 text-sm md:text-base productLabel"></label>
         <!-- colors container -->
         <span class="w-auto h-full items-center flex relative productColorsContainer"></span>
      </div>
      <!-- product title -->
      <div class="w-full mx-auto h-full flex gap-x-1 items-center">
         <p class="font-medium text-slate-900 text-xs md:text-sm leading-5 productTitle"></p>
      </div>
      <!-- product price -->
      <div class="w-full mx-auto h-full flex justify-end items-end">
         <span class="flex gap-x-1">
            <p class="text-orange-700 font-medium text-xs md:text-sm productPrice"></p>
            <p class="text-orange-700 font-medium text-xs md:text-sm">تومان</p>
         </span>
      </div>
      <!-- product order -->
      <div class="w-full mx-auto h-full flex flex-col mt-4">
         <span class="w-full h-1/2">
            <hr>
         </span>
         <span class="w-full h-1/2 flex items-center justify-center">
            <a class="font-bold hover:cursor-pointer text-xs md:text-sm text-orange-400">مشاهده و ثبت سفارش</a>
         </span>
      </div>
   </div>
</div>
`

class cardProduct extends HTMLElement {
   constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
   }
   connectedCallback() {
      const productImg = this.shadowRoot.querySelector('.productImg');
      const productLabel = this.shadowRoot.querySelector('.productLabel');
      const productColorsContainer = this.shadowRoot.querySelector('.productColorsContainer')
      const productTitle = this.shadowRoot.querySelector('.productTitle');
      const productPrice = this.shadowRoot.querySelector('.productPrice');

      productImg.src = this.getAttribute('product-img');
      productLabel.innerHTML = this.getAttribute('product-label');
      productTitle.innerHTML = this.getAttribute('product-title');
      productPrice.innerHTML = this.getAttribute('product-price');

      // add to favorite product 
      const heartIconContainer = this.shadowRoot.querySelector('.heartIconContainer');
      let allFavoriteProductArr = []
      window.addEventListener('load', () => {
         if (!localStorage.getItem('Favorite')) {
            localStorage.setItem('Favorite', JSON.stringify([]));
         } else {
            const itemSaved = JSON.parse(localStorage.getItem('Favorite'))
            itemSaved.forEach(eachObj => {
               if (productTitle.textContent.includes(eachObj.title)) {
                  heartIconContainer.firstElementChild.classList.add('hidden');
                  heartIconContainer.lastElementChild.classList.remove('hidden');
               }
            })
         }
      })
      heartIconContainer.addEventListener('click', e => {
         const getFavoriteItemFromStorage = JSON.parse(localStorage.getItem('Favorite'));
         const cardTitle = this.getAttribute('product-title');
         const slicedCardTitle = cardTitle.slice(0, cardTitle.indexOf('گیگابایت') - 4);
         if (e.currentTarget.lastElementChild.classList.contains('hidden')) {
            e.currentTarget.firstElementChild.classList.add('hidden');
            e.currentTarget.lastElementChild.classList.remove('hidden');
            getFavoriteItemFromStorage.push(
               {
                  title: slicedCardTitle,
                  img: `${this.getAttribute('product-img')}`
               }
            )
            localStorage.setItem('Favorite', JSON.stringify(getFavoriteItemFromStorage))
         } else {
            e.currentTarget.firstElementChild.classList.remove('hidden');
            e.currentTarget.lastElementChild.classList.add('hidden');
            const test = getFavoriteItemFromStorage.findIndex(eachFavoriteItemObj => {
               return eachFavoriteItemObj.title == slicedCardTitle
            })
            getFavoriteItemFromStorage.splice(test, 1)
            localStorage.setItem('Favorite', JSON.stringify(getFavoriteItemFromStorage))
         }
      })


      // set colors
      const allColorsArr = this.getAttribute('product-colors').split(',');
      // set color
      const coloryCircles = setColor(allColorsArr, 10);
      productColorsContainer.append(coloryCircles);

      // set link for each product
      const productLink = this.shadowRoot.querySelector('a');
      productLink.addEventListener('click', e => {
         allProductData.find(currentProductObj => {
            if (currentProductObj.title + currentProductObj.storage === this.getAttribute('product-title')) {
               e.target.setAttribute('href', `/public/product.html?model=${currentProductObj.model}`);
            }
         })
      })
   }
   static observedAttributes() {
      return ['product-img', 'product-label', 'product-title', 'product-price']
   }
}

// Shadow DOM

export { cardProduct }