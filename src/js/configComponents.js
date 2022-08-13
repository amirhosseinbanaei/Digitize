import { accordion } from "../../components/accordion/accordion.js";
import { cardProduct } from "../../components/cardProduct/cardProduct.js";
import { cartCard } from "../../components/cartCard/cartCard.js";
import { favoriteCard } from "../../components/favoriteCard/favoriteCard.js";
import { footer } from "../../components/footer/footer.js"
import { largeMenu } from "../../components/largeMenu/largeMenu.js";
import { smallHeader } from "../../components/smallHeader/smallHeader.js";
import { smallMenu } from "../../components/smallMenu/smallMenu.js";

window.customElements.define('large-menu', largeMenu);
window.customElements.define('small-menu', smallMenu);
window.customElements.define('small-header', smallHeader);
window.customElements.define('card-product', cardProduct);
window.customElements.define('filter-accordion', accordion);
window.customElements.define('custom-footer', footer);
window.customElements.define('cart-card', cartCard);
window.customElements.define('favorite-card', favoriteCard);