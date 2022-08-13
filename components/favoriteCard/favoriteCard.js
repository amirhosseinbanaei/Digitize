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
                     <h1 class="text-slate-900 font-bold text-sm md:text-base lg:text-base cardTitle"></h1>
                  </div>
                  <!-- Product Num -->
                  <div class="w-full h-5/6 col-span-3 flex items-center" style="direction: ltr;">
                     <!-- X sign container -->
                     <span class="w-full h-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-orange-400 removeBtn" fill="none"
                           viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                     </span>
                  </div>
               </div>
</div>`
class favoriteCard extends HTMLElement {
   constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
   }
   connectedCallback() {
      const cardTitle = this.shadowRoot.querySelector('.cardTitle');
      cardTitle.textContent = this.getAttribute('title');

      const cardImg = this.shadowRoot.querySelector('.cardImg');
      cardImg.setAttribute('src', this.getAttribute('image'));
      // cardImg.parentElement.setAttribute('href', `/public/phone.html?model=${this.getAttribute('model')}`)

      const removeBtn = this.shadowRoot.querySelector('.removeBtn');
      removeBtn.addEventListener('click', e => {
         const addedProductToFavoriteArr = JSON.parse(localStorage.getItem('Favorite'));
         const findProductIndex = addedProductToFavoriteArr.findIndex(foundedProductIndex => {
            return foundedProductIndex == this.getAttribute('title')
         })
         addedProductToFavoriteArr.splice(findProductIndex, 1);
         localStorage.setItem('Favorite', JSON.stringify(addedProductToFavoriteArr));
         e.target.parentElement.parentElement.parentElement.parentElement.remove();
         location.reload();
      })
   }
}

export { favoriteCard }