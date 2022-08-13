const openPriceSection = () => {
   const priceAccordion = document.querySelector('.priceAccrodion');
   const priceAccordionLarge = document.querySelector('.priceAccrodionLarge');
   const priceAccordionItems = document.querySelector('.accordionItemsContainer');
   let isAccordionOpen = false;
   priceAccordion.addEventListener('click', () => {
      if (!isAccordionOpen) {
         priceAccordionItems.classList.replace('hidden', 'flex');
         priceAccordion.querySelectorAll('svg')[1].style.cssText = 'transform: rotate(180deg);'
         isAccordionOpen = true;
      } else {
         priceAccordionItems.classList.replace('flex', 'hidden');
         priceAccordion.querySelectorAll('svg')[1].style.cssText = 'transform: rotate(0);'
         isAccordionOpen = false;
      }
   })
   priceAccordionLarge.addEventListener('click', () => {
      if (!isAccordionOpen) {
         priceAccordionItems.classList.replace('hidden', 'flex');
         priceAccordion.querySelectorAll('svg')[1].style.cssText = 'transform: rotate(180deg);'
         isAccordionOpen = true;
      } else {
         priceAccordionItems.classList.replace('flex', 'hidden');
         priceAccordion.querySelectorAll('svg')[1].style.cssText = 'transform: rotate(0);'
         isAccordionOpen = false;
      }
   })
}

export { openPriceSection }