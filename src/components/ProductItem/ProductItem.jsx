import React from "react";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import {Link} from "react-router-dom";


function ProductItem (props) {
    return(
        <div className="flex flex-col bg-white rounded-[20px]">
        <Link className="flex flex-col " to={`/productDetails/${props.id}`}>
        <div className="w-[13rem] xl:w-56 mx-auto my-4">
            <img className="w-full object-cover" src={props.img} />
        </div>
        </Link>
        <div className="max-w-[16rem] mx-auto text-center">
            <Link to={`/productDetails/${props.id}`} className="text-[#666] hover:text-primary">
            <h4 className="text-sm font-iranSansBold overflow-hidden text-ellipsis whitespace-nowrap mt-3">{props.name}</h4>
            </Link>
            <span className="text-primary block mt-2 font-iranSansBold text-sm">{props.price} تومان</span>
        </div>
        <div className="flex items-center justify-center my-3">
            <span className="mx-3 text-[#7a7a7a]" title="افزودن به سبد خرید"> <FiShoppingCart className="w-[1.5rem] h-[1.5rem]"/></span>
            <span className="mx-3 text-[#7a7a7a]" title=" مشاهده سریع محصول ">  <AiOutlineSearch className="w-[1.5rem] h-[1.5rem]"/></span>
            <span className="mx-3 text-[#7a7a7a]" title="افزودن به علاقه مندی ها">  <AiOutlineHeart className="w-[1.5rem] h-[1.5rem]"/></span>
        </div>
        </div>
    )
}


export default ProductItem;