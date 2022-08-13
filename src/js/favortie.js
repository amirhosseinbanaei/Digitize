const getFavoriteProduct = JSON.parse(localStorage.getItem('Favorite'));
const favoriteCardContainer = document.querySelector('.favoriteCardContainer');
getFavoriteProduct.forEach(eachFavorObj => {
   const newCard = document.createElement('favorite-card');
   newCard.setAttribute('title', eachFavorObj.title);
   newCard.setAttribute('image', eachFavorObj.img);
   favoriteCardContainer.append(newCard)
})