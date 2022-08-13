const template = document.createElement('template')
template.innerHTML = `
<!-- Tailwind css file -->
<link rel="stylesheet" href="/public/build/tailwind.css">
<!-- Product box container -->
            <div class="w-full h-auto lg:bg-stone-50 rounded-lg mt-6 flex flex-col">
               <!-- A product box -->
               <div class="w-full h-auto bg-stone-50 lg:bg-transparent px-4 py-3 rounded-lg grid grid-cols-12">
                  <!-- Image product container -->
                  <div class="w-full h-full col-span-2 lg:col-span-1">
                     <a>
                     <img class="mx-auto cardImg" alt="This is a product image.">
                     </a>
                  </div>
                  <!-- Product title and price container -->
                  <div class="w-full h-auto col-span-7 lg:col-span-8 px-2 flex flex-col gap-y-4 justify-center">
                     <!-- Product title -->
                     <h1 class="text-slate-900 text-sm md:text-base lg:text-lg cardTitle"></h1>
                     <span class="flex gap-x-2">
                        <p class="text-orange-700 font-medium text-xs lg:text-sm cardPrice"></p>
                        <p class="text-orange-700 font-medium text-xs lg:text-sm">تومان</p>
                     </span>
                  </div>
                  <!-- Product Num -->
                  <div class="w-full h-5/6 col-span-3 flex flex-col justify-between" style="direction: ltr;">
                     <!-- X sign container -->
                     <span class="w-full h-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-400 removeBtn" fill="none"
                           viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                     </span>
                     <!-- Number of product container -->
                     <div class="w-full h-auto flex items-center gap-x-2">
                        <!-- Minus sign container -->
                        <span class="w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-2 text-orange-400" fill="none"
                              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
                           </svg>
                        </span>
                        <!-- Number Container -->
                        <span class="w-5 h-8 flex justify-center items-center p-3">
                           <p class="numberOfProductContainer"></p>
                        </span>
                        <!-- Plus sign container -->
                        <span class="w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-400" fill="none"
                              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                           </svg>
                        </span>
                     </div>
                  </div>
               </div>
</div>`
class cartCard extends HTMLElement {
   constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
   }
   connectedCallback() {
      const cardTitle = this.shadowRoot.querySelector('.cardTitle');
      cardTitle.textContent = this.getAttribute('title');

      const cardPrice = this.shadowRoot.querySelector('.cardPrice');
      cardPrice.textContent = this.getAttribute('price');

      const cardImg = this.shadowRoot.querySelector('.cardImg');
      cardImg.setAttribute('src', this.getAttribute('image'));
      cardImg.parentElement.setAttribute('href', `/public/phone.html?model=${this.getAttribute('model')}`)

      const removeBtn = this.shadowRoot.querySelector('.removeBtn');
      removeBtn.addEventListener('click', e => {
         const addedProductToCartArr = JSON.parse(localStorage.getItem('Cart'));
         const findProductIndex = addedProductToCartArr.findIndex(foundedProductIndex => {
            return foundedProductIndex == this.getAttribute('model')
         })
         addedProductToCartArr.splice(findProductIndex, 1);
         localStorage.setItem('Cart', JSON.stringify(addedProductToCartArr));
         e.target.parentElement.parentElement.parentElement.parentElement.remove();
         location.reload();
      })

      const productArr = JSON.parse(localStorage.getItem('Cart'))
      const findProductObj = productArr.find(eachObject => {
         return eachObject.model == this.getAttribute('model');
      })
      const numberOfProductContainer = this.shadowRoot.querySelector('.numberOfProductContainer');
      numberOfProductContainer.textContent = findProductObj.amount;
      numberOfProductContainer.parentElement.nextElementSibling.addEventListener('click', () => {
         +findProductObj.amount++;
         numberOfProductContainer.textContent = findProductObj.amount;
         findProductObj.amount = findProductObj.amount;
         localStorage.setItem('Cart', JSON.stringify(productArr));
         location.reload()
      })
      numberOfProductContainer.parentElement.previousElementSibling.addEventListener('click', () => {
         if (+findProductObj.amount > 1) {
            +findProductObj.amount--;
            numberOfProductContainer.textContent = findProductObj.amount;
            findProductObj.amount = findProductObj.amount;
            localStorage.setItem('Cart', JSON.stringify(productArr));
            location.reload()
         }
      })
   }
}

export { cartCard }