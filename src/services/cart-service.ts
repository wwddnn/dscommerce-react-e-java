import { OrderItemDTO, type OrderDTO } from "../models/order";
import * as cartRepository from "../localStorage/cart-repository";
import type { ProductDTO } from "../models/product";

/* !!! O cart-service sempre irá chamar o cart-repository !!! */


/* função para salvar um produto no localStorage */
export function saveCart(cart : OrderDTO) {
    cartRepository.save(cart);
}

/* função para pegar um produto do localStorage */
export function getCart() : OrderDTO {
    return cartRepository.get();
}

/* função para adicionar um produto ao localStorage */
export function addProduct(product: ProductDTO) {
    const cart = cartRepository.get();
    const item = cart.items.find(x => x.productId === product.id);
    if(!item) {
        const newItem = new OrderItemDTO(product.id, 1, product.name, product.price, product.imgUrl);
        cart.items.push(newItem);
        cartRepository.save(cart);
    }
}

/* função para limpar o carrinho do localStorage */
export function clearCart() {
    cartRepository.clear();
}

export function increaseItem(productId: number) {
    const cart = cartRepository.get();
    const item = cart.items.find(x => x.productId === productId);
    if(item) {
        item.quantity++;
        cartRepository.save(cart);
    }
}