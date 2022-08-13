const template = document.createElement('template')
template.innerHTML = `
<!-- Tailwind css file -->
<link rel="stylesheet" href="/public/build/tailwind.css">
<!-- Small menu -->
<div class="w-full h-16 bg-stone-50 fixed z-50 bottom-0 rounded-t-xl drop-shadow-lg flex items-center justify-center p-3 md:hidden">
   <!-- Menu Items Container -->
   <div class="w-full h-5/6 flex items-center justify-evenly">
      <!-- Home item -->
      <span class="w-auto h-8 flex items-center gap-x-3">
         <a href="/public/home.html">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-slate-800 opacity-40" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
         </a>
         <p class="text-slate-800 font-bold text-lg mt-2 hidden">خانه</p>
      </span>
      <!-- Category item -->
      <span class="w-auto h-8 flex items-center gap-x-3">
         <a href="/public/category.html">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-slate-800 opacity-40" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
         </a>
          <p class="text-slate-800 font-bold text-lg mt-2 hidden">دسته بندی</p>
      </span>
      <!-- Cart item -->
      <span class="w-auto h-8 flex items-center gap-x-3">
         <a href="/public/cart.html">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-slate-800 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
         </a>
          <p class="text-slate-800 font-bold text-lg mt-2 hidden">سبد خرید</p>
      </span>
      <!-- Favorite item -->
      <span class="w-auto h-8 flex items-center gap-x-3">
      <a href="/public/favorite.html">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-slate-800 opacity-40" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
          </a>
          <p class="text-slate-800 font-bold text-lg mt-2 hidden">علاقه مندی ها</p>
      </span>
   </div>
</div>
`

class smallMenu extends HTMLElement {
   constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
   }
   connectedCallback() {
      const currentPage = this.getAttribute('current-page');
      const allMenuItems = this.shadowRoot.querySelectorAll('span');
      switch (currentPage) {
         case 'Home':
            allMenuItems[0].firstElementChild.firstElementChild.classList.remove('opacity-40');
            allMenuItems[0].lastElementChild.classList.remove('hidden');
            break;
         case 'Category':
            allMenuItems[1].firstElementChild.firstElementChild.classList.remove('opacity-40');
            allMenuItems[1].lastElementChild.classList.remove('hidden')
            break;
         case 'Cart':
            allMenuItems[2].firstElementChild.firstElementChild.classList.remove('opacity-40');
            allMenuItems[2].lastElementChild.classList.remove('hidden');
            break;
         case 'Favorite':
            allMenuItems[3].firstElementChild.firstElementChild.classList.remove('opacity-40');
            allMenuItems[3].lastElementChild.classList.remove('hidden');
            break;
      }
   }

}
export { smallMenu }