import React, { useState, useEffect, useContext } from "react";
import { shopContext } from "../../contexts/shopContext";
import CardHoc from "../../components/HOC/CardHoc";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Link } from "react-router-dom";

function AllProducts({ addProductToCart }) {
  const { productData } = useContext(shopContext);
  const [productsArray, setProdcutArray] = useState();
  const [currenPage, setCurrenPage] = useState(1);
  const [paginatedProduct, setPaginatedProduct] = useState([]);
  let pageSize = 12;

  useEffect(() => {
    if (productData) {
      const filteredAllProduct = productData.filter(
        (product) => product.type === "product"
      );
      setProdcutArray(filteredAllProduct);
      shownPaginatedProduct(filteredAllProduct);
    }
  }, [productData, currenPage]);

  const shownPaginatedProduct = (productsArray) => {
    let endProductIndex = currenPage * pageSize;
    let startProductIndex = endProductIndex - pageSize;
    const allShownProducts = productsArray.slice(
      startProductIndex,
      endProductIndex
    );

    setPaginatedProduct(allShownProducts);
  };
  let pageNumbers;
  if (productsArray) {
    pageNumbers = Array.from(
      Array(Math.ceil(productsArray.length / pageSize)).keys()
    );
  }

  const changePaginatedProduct = (newPageNumber) => {
    setCurrenPage(newPageNumber);
  };

  return (
    <section className="mt-10">
      <div className="container">
        <h3 className="text-center text-2xl text-[#666]">آرشیو محصولات</h3>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-8">
          {paginatedProduct.map((product) => (
            <ProductItem
              key={product.id}
              {...product}
              onAddProduct={addProductToCart}
            />
          ))}
        </div>
        <div className="flex justify-center items-center my-12">
          {pageNumbers &&
            pageNumbers.map((paginated) => (
              <Link
                key={paginated + 1}
                className={`${
                  paginated + 1 === currenPage
                    ? "bg-primary text-white"
                    : "bg-white"
                } py-2 px-4 rounded-[10px] ml-4 `}
                onClick={() => changePaginatedProduct(paginated + 1)}
              >
                {paginated + 1}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

export default CardHoc(AllProducts);
