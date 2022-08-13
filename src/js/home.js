import { addCard } from '../../modules/appendCard.js';
import { allProductData } from '/src/js/data.js';
import { openPriceSection } from '/modules/openPriceSection.js';

addCard(allProductData);
openPriceSection();
const mobilefilterSection = document.querySelector('.filterSection');
const mobilefilterSectionContent = document.querySelector('.filterSectionContent');
const declineFilterBtn = document.querySelector('.declineFilter');
const acceptFilterBtn = document.querySelector('.acceptFilter');
mobilefilterSection.addEventListener('click', () => {
   mobilefilterSectionContent.classList.replace('hidden', 'flex');
   document.body.style.overflow = 'hidden';
})
function closeFilterSectionInSmallDisplay() {
   mobilefilterSectionContent.classList.replace('flex', 'hidden');
   document.body.style.overflow = 'auto';
}
declineFilterBtn.addEventListener('click', () => {
   closeFilterSectionInSmallDisplay();
   location.reload()
})
acceptFilterBtn.addEventListener('click', closeFilterSectionInSmallDisplay)