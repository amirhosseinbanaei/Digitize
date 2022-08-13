import { addCard } from '../../modules/appendCard.js';
import { allProductData } from '/src/js/data.js';

const template = document.createElement('template')
template.innerHTML = `
<!-- Tailwind css file -->
<link rel="stylesheet" href="/public/build/tailwind.css">
<!-- Accordion -->
<div class="w-full h-auto">
   <!-- Accordion title -->
   <div class="w-full h-7 flex justify-between">
      <span class="w-full h-auto flex gap-x-2 items-center hover:cursor-pointer hover:bg-gray-100 p-2 rounded-2xl relative accrodion">
         <span class="w-4 h-4 bg-gray-300 bg-opacity-30 rounded-full relative mb-3">
            <slot></slot>
         </span>
         <p class="text-slate-800 mr-1 accordionTitle"></p>
         <svg xmlns="http://www.w3.org/2000/svg" class="h-auto w-4 absolute top-1 left-3 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
         </svg>
      </span>
   </div>
   <!-- All selects container -->
   <div class="w-8/12 h-auto mr-3 mt-4 flex-col gap-y-4 hidden accordionItemsContainer">
   </div>
</div>
`

class accordion extends HTMLElement {
   constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
   }
   connectedCallback() {
      // get and enter title
      this.shadowRoot.querySelector('.accordionTitle').textContent = this.getAttribute('accordion-title');

      // get and create accordion items
      const itemsArr = this.getAttribute('accordion-items').split(' ');
      const itemsContainer = this.shadowRoot.querySelector('.accordionItemsContainer');
      itemsArr.forEach(eachItem => {
         const htmlItemStructer = `
         <span class="w-full h-auto flex gap-x-2 items-center">
         <input type="checkbox" class="form-checkbox rounded text-orange-400 focus:ring-orange-400 border-orange-600">
         <p class="text-slate-800 text-base">${eachItem}</p>
         </span>`;
         itemsContainer.insertAdjacentHTML('afterbegin', htmlItemStructer)
      });
      const allInput = this.shadowRoot.querySelectorAll('input');
      let filteredItemArr = [];
      const saveFilterInStorage = enteryArr => {
         localStorage.setItem('Filter', JSON.stringify(enteryArr))
      }
      allInput.forEach(eachInput => {
         eachInput.addEventListener('change', e => {
            const cardProductContainer = document.querySelector('.cardProductContainer');
            if (cardProductContainer.childElementCount == allProductData.length) {
               cardProductContainer.innerHTML = ''
            }
            const filterItem = e.target.nextElementSibling.textContent;
            const filterProduct = allProductData.filter(eachProductObj => {
               return eachProductObj.label == filterItem
            })
            if (e.target.checked) {
               addCard(filterProduct);
            } else {
               // const getItemFromStorage = JSON.parse(localStorage.getItem('Filter'))
               // const findUncheckableItem = getItemFromStorage.find(eachFilterItem => {
               //    return eachFilterItem == filterItem
               // })
               // if (findUncheckableItem) {
               //    filteredItemArr.splice(filteredItemArr.indexOf(findUncheckableItem), 1);
               //    saveFilterInStorage(filteredItemArr);
               // }
               const allCardProduct = [...cardProductContainer.children]
               allCardProduct.forEach(eachCardProduct => {
                  if(eachCardProduct.getAttribute('product-label') == filterItem){
                     eachCardProduct.remove()
                  }
                  if(cardProductContainer.children.length == 0){
                     addCard(allProductData)
                  }
               })
            }
         })
      })

      let isAccordionOpen = false;
      const accordion = this.shadowRoot.querySelector('.accrodion');
      accordion.addEventListener('click', () => {
         if (!isAccordionOpen) {
            itemsContainer.classList.replace('hidden', 'flex');
            this.shadowRoot.querySelectorAll('svg')[0].style.cssText = 'transform: rotate(180deg);'
            isAccordionOpen = true;
         } else {
            itemsContainer.classList.replace('flex', 'hidden');
            this.shadowRoot.querySelectorAll('svg')[0].style.cssText = 'transform: rotate(0);'
            isAccordionOpen = false;
         }
      })
   }
}
export { accordion }