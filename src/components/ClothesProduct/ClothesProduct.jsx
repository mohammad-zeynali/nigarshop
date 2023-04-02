import React,{useState,useEffect} from "react"
import useFetch from "../../Hooks/useFetch";
import Products from "../Products/Products";
import ProductItem from "../ProductItem/ProductItem";


import SwiperCore,{Autoplay} from "swiper";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css"
SwiperCore.use([Autoplay])


function ClothesProduct () {

    const [productsTemplate,setProductsTemplate] = useState([
        {id:1,name:'مد و پوشاک روز',link:'/'}
    ])

    const [clothesProduct,setClothesProduct] = useState([])
    const [allProduct] = useFetch()


    const filterClothesProduct = allProduct.filter(discount=> (
        discount.categories === "clothesProduct"
    ))


    useEffect( () => {
        setClothesProduct(filterClothesProduct)
    },[allProduct])

    
    return(
        <Products {...productsTemplate[0]}>
            <Swiper spaceBetween={20} slidesPerView={1} loop={true}
                         grabCursor={true} autoplay={{delay:5000,disableOnInteraction:false}} 
                         breakpoints={{
                            1250:{
                                slidesPerView: 4
                            },

                            992:{
                                slidesPerView: 3
                            },
                            576:{
                                slidesPerView: 2
                            },
                            500:{
                                slidesPerView: 1.6  
                            }
                         }}
                         >

                        {clothesProduct.map(product => (
                            <SwiperSlide key={product.id}>
                                <ProductItem {...product}/>
                            </SwiperSlide>
                        ))}
                            
            </Swiper>
        </Products>
    )
}

export default ClothesProduct;