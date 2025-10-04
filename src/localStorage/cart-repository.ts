import { OrderDTO, OrderItemDTO } from "../models/order";
import { CART_KEY } from "../utils/system";

/* 
esse arquivo é nosso repository, o responsavel por acessar o localStorage salvando ou buscando o carrinho de la
*/

// esse arquivo faz as solicitacoes ao localStorage

// salva um carrinho no localStorage
export function save(cart: OrderDTO) {
  const str = JSON.stringify(cart);
  localStorage.setItem(CART_KEY, str);
}

// obtem um carrinho no localStorage
export function get() : OrderDTO {
    const str = localStorage.getItem(CART_KEY) || '{"items":[]}';
    const obj = JSON.parse(str) as OrderDTO;

    const cart = new OrderDTO();
    obj.items.forEach(x => {
      cart.items.push(new OrderItemDTO(x.productId, x.quantity, x.name, x.price, x.imgUrl));
    })

    console.log(cart);
    return cart
}

// limpa o carrinho no localStorage
export function clear() {
  localStorage.setItem(CART_KEY, '{"items":[]}');
}