import type { CategoryDTO } from "./category";

export type ProductDTO = {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  categories: CategoryDTO[] /* colchetes é pra indicar que é um array é uma coleção de categorias*/;
};
