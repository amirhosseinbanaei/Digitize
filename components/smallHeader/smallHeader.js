const template = document.createElement('template')
template.innerHTML = `
<!-- Tailwind css file -->
<link rel="stylesheet" href="/public/build/tailwind.css">
<!-- Small Header -->
<div class="w-full h-11 mt-10 px-4 flex md:hidden">
   <!-- Right Header icon container -->
   <!-- 1. Logo Header container -->
   <div class="w-2/12 h-full flex items-center logoContainer">
      <img src="/assets/images/main/small-logo.png" alt="This is a logo image">
   </div>
   <!-- 2. Back Header icon container -->
   <div class="w-2/12 h-full hidden items-center justify-center backBtnContainer">
      <div class="w-8 h-8 rounded-md shadow-md bg-stone-50 flex items-center justify-center">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
         </svg>
      </div>
   </div>
   
   <!-- Title Header container -->
   <div class="w-8/12 h-full flex items-center justify-center">
      <h1 class="font-bold text-slate-800 text-lg"></h1>
   </div>
   <!-- Search Header icon container -->
   <div class="w-2/12 h-full flex items-center justify-center">
      <div class="w-8 h-8 rounded-md shadow-md bg-stone-50 flex items-center justify-center">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
         </svg>
      </div>
   </div>
</div>`

class smallHeader extends HTMLElement {
   constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
   }
   connectedCallback() {
      // add title
      this.shadowRoot.querySelector('h1').textContent = this.getAttribute('title');
      // set back for backward btn
      this.shadowRoot.querySelector('.backBtnContainer').addEventListener('click', () => {
         history.go(-1)
      })
      // hide logo or not
      const hideLogoAttribute = this.getAttribute('hide-logo');
      if (hideLogoAttribute === 'true') {
         this.shadowRoot.querySelector('.logoContainer').classList.replace('flex', 'hidden');
         this.shadowRoot.querySelector('.backBtnContainer').classList.replace('hidden', 'flex');
      } else {
         this.shadowRoot.querySelector('.logoContainer').classList.replace('hidden', 'flex');
         this.shadowRoot.querySelector('.backBtnContainer').classList.replace('flex', 'hidden');
      }
   }

}
export { smallHeader }