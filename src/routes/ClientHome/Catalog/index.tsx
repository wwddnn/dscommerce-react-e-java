import "./styles.css";
import Searchbar from "../../../components/Searchbar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { useEffect, useState } from "react";
import type { ProductDTO } from "../../../models/product";
import * as productService from '../../../services/product-service';

export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  /* THE COMPONENT DONT KNOW THE AXIOS*/
  useEffect(() => {
    productService.findAll()
      .then(response => {
        setProducts(response.data.content);
      })
  }, []);

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <Searchbar />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {
            products.map(
              product => <CatalogCard key={product.id} product={product} />
            )
          }  
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
