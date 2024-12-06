const template = document.createElement('template')
template.innerHTML = `
<!-- Tailwind css file -->
<link rel="stylesheet" href="/public/build/tailwind.css">
<div class="w-full h-auto rounded-t-xl mt-16 bg-stone-50 grid grid-cols-12 mb-16 md:mb-0 relative">
   <div class="w-full h-16 absolute bottom-0 flex items-center justify-center">
      <p class="text-slate-800 font-medium">طراحی شده توسط : <a href="https://amirhosseinbanaei.ir" target="_blank" class="text-orange-400 font-bold text-base">امیرحسین بنائی</a></p>
   </div>
   <!-- Right section of footer -->
   <div class="w-full h-full col-span-full lg:col-span-6 xl:col-span-7 flex flex-col py-7 px-20">
      <!-- Logo Container -->
      <div class="w-full h-1/3 gap-x-2 flex items-center">
         <img src="/assets/images/main/logo.png" alt="This is website logo.">
         <span class="w-8 h-1 bg-orange-500"></span>
      </div>
      <!-- About us Container -->
      <div class="w-full lg:w-3/4 h-2/3 gap-x-2">
         <p class="text-slate-800 leading-9 text-lg text-justify lg:text-right">دیجی‌ تایز عرضه کننده جدیدترین محصولات الکترونیک نظیر لپ تاپ، گوشی هوشمند و ساعت هوشمند می‌باشد.دیجی تایز افتخار این را داشته که به <span class="text-orange-400 font-bold">۱۲۲,۲۳۲ نفر</span> تا به اکنونخدمت رسانی داشته باشد.</p>
      </div>
   </div>
   <!-- Center section of footer -->
   <div class="w-full h-full col-span-full mt-16 md:mt-0 lg:overflow-hidden md:col-span-6 lg:col-span-2">
      <div class="w-full h-auto flex flex-col gap-y-7 mt-7 lg:mt-20 items-center">
         <h1 class="text-slate-800 font-bold text-lg">محصولات</h1>
         <p class="text-slate-800 text-base font-medium">تلفن همراه</p>
         <p class="text-slate-800 text-base font-medium">لپ تاپ</p>
         <p class="text-slate-800 text-base font-medium">ساعت هوشمند</p>
      </div>
   </div>
   <!-- Left section of footer -->
   <div class="w-full h-full col-span-full mt-16 mb-10 md:mt-0 md:col-span-6 lg:col-span-4 xl:col-span-3 flex flex-col pb-20 lg:pb-10 lg:pt-12 md:pl-11" style="direction: ltr;">
      <div class="w-full flex justify-center md:justify-start h-3/4">
         <img src="/assets/images/main/map.png" class="w-auto h-full" alt="This is a map image">
      </div>
      <div class="w-10/12 mx-auto md:w-full h-auto mt-7 mb-16 md:mb-10 flex flex-col gap-y-2">
         <!-- Telephone container -->
         <span class="flex items-center gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
             </svg>
             <p class="text-slate-800 mt-1 font-medium">021-12345678</p>
         </span>
         <!-- Email container -->
         <span class="flex items-center gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
             </svg>
             <p class="text-slate-800 mt-1 font-medium">info@digitize.com</p>
         </span>
      </div>
   </div>
</div>`

class footer extends HTMLElement {
   constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
   }
}
export { footer }