import React, { useState, useContext } from "react";
import { shopContext } from "../../contexts/shopContext";
import { toast } from "react-toastify";

function CardHoc(OriginalComponent) {
  function NewComponent() {
    const { productData, userCart, setUserCart } = useContext(shopContext);

    // Add Product To User Cart
    const addProductToCart = (productId) => {
      const mainProduct = productData.find(
        (product) => product.id === productId
      );

      const shoppingCartProduct = userCart.some(
        (cartProduct) => cartProduct.name === mainProduct.name
      );

      if (!shoppingCartProduct) {
        setUserCart((prevProduct) => {
          return [...prevProduct, mainProduct];
        });
      } else {
        let shoppingCartProduct = [...userCart];

        shoppingCartProduct.some((product) => {
          if (product.name === mainProduct.name) {
            // if()
            product.count += 1;
            return true;
          }
        });

        setUserCart(shoppingCartProduct);
      }

      // create toastBox success addToCart
      toast.success("محصول به سبد خرید اضافه شد", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    };

    return <OriginalComponent addProductToCart={addProductToCart} />;
  }

  return NewComponent;
}

export default CardHoc;
