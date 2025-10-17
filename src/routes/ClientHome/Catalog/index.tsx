import "./styles.css";
import Searchbar from "../../../components/Searchbar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { useEffect, useState } from "react";
import type { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";

type QueryParams = {
  page: number;
  name: string;
}

export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: ""
  });

  useEffect(() => {
    productService.findPageRequest(queryParams.page, queryParams.name)
    .then(response => {
      setProducts(response.data.content);
    });
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setQueryParams({...queryParams, name: searchText});
  }

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <Searchbar onSearch={handleSearch} />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {products.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
