const coloryCircleFragment = document.createDocumentFragment()
function setColor(entry, space) {
   for (let i = 0; i < entry.length; i++) {
      const coloryCircle = document.createElement('span');
      coloryCircle.className = 'w-4 h-4 rounded-full absolute flex items-center justify-center';
      coloryCircle.style.left = `${i * space}px`
      coloryCircle.style.background = entry[i];
      coloryCircleFragment.append(coloryCircle)
   }
   return coloryCircleFragment
}

export { setColor }











`<div x-data="{ color: 'red' }" class="flex items-center">
                  <div @click="color = 'red' " :class="color === 'red' ? 'ring-2 ring-red-400' : '' " class="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer bg-red-400 border-2 border-white">
                    <svg x-show="color === 'red' " xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:w-6 sm:h-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div @click="color = 'blue' " :class="color === 'blue' ? 'ring-2 ring-blue-400' : '' " class="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer bg-blue-400 border-2 border-white -mr-1.5">
                    <svg x-show="color === 'blue' " xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:w-6 sm:h-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div @click="color = 'green' " :class="color === 'green' ? 'ring-2 ring-green-400' : '' " class="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer bg-green-400 border-2 border-white -mr-1.5">
                    <svg x-show="color === 'green' " xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:w-6 sm:h-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>`