const template = document.createElement('template')
template.innerHTML = `
<!-- Tailwind css file -->
<link rel="stylesheet" href="/public/build/tailwind.css">
<!-- Large menu -->
<div class="w-full h-28 bg-stone-50 hidden shadow-sm md:block">
   <div class="w-full h-full flex 2xl:w-11/12">
      <!-- Menu Items and logo Container -->
      <div class="w-1/2 h-full flex justify-center">
         <div class="w-10/12 h-full flex  items-center justify-between">
            <!-- Logo -->
            <span class="w-auto h-auto">
               <a href="/public/home.html">
                  <img src="/assets/images/main/logo.png" alt="This is website name logo.">
               </a>
            </span>
            <!-- Menu items -->
            <span class="w-11/12 h-auto flex gap-x-7 md:gap-x-5 md:pr-5 pr-10">
               <a href="/public/home.html" class="font-bold text-stone-800 md:text-sm lg:text-base">خانه</a>
               <a href="/public/cart.html" class="font-medium text-stone-800 md:text-sm lg:text-base">سبد خرید</a>
               <a href="/public/favorite.html" class="font-medium md:text-sm lg:text-base text-stone-800">علاقه مندی ها</a>
            </span>
         </div>
      </div>
      <!-- search bar Container -->
      <div class="w-1/2 h-full flex items-center justify-center">
         <!-- search icon -->
         <span class="w-10 h-2/5 bg-gray-200 rounded-r-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-stone-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
         </span>
         <!-- search bar -->
         <input type="text" class="w-10/12 h-2/5 flex items-center focus:ring-0 border-0 pr-2 bg-gray-200 text-sm font-normal placeholder:text-stone-800 rounded-l-md focus:border-0 focus:outline-0"
            placeholder="جستجوی نام محصول، نام برند، نام مدل و...">
      </div>
   </div>
</div>
`

class largeMenu extends HTMLElement {
   constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
   }
   // connectedCallback() {

   // }

}
export { largeMenu }