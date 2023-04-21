import React, { useState, useEffect, useContext } from "react";
import { shopContext } from "../../contexts/shopContext";
import ProductData from "../../data/ProductData";

function CardHoc(OriginalComponent) {
  
  function NewComponent() {
    const [cartProduct, setCartProduct] = useState([]);

    const [allProduct, setAllProduct] = useState(ProductData);

    const { userCart,setUserCart } = useContext(shopContext);

  
    // Add Product To User Cart
    const addProductToCart = (productId) => {

      const mainProduct = allProduct.find(
        (product) => product.id === productId
      );

      const shoppingCartProduct = userCart.some(
        (cartProduct) => cartProduct.name === mainProduct.name
      );

      if (!shoppingCartProduct) {
        
        setUserCart((prevProduct) => {
          return [...prevProduct, mainProduct];
        });

      }else{

        let shoppingCartProduct = [...userCart]

        shoppingCartProduct.some(product => {
          if(product.name === mainProduct.name){
            product.count +=1
            return true
          }
        })
        
        setUserCart(shoppingCartProduct)
      }
    }

    return <OriginalComponent addProductToCart={addProductToCart} />;
  }

  return NewComponent;
}

export default CardHoc;