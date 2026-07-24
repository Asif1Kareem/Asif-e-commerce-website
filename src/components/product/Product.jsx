import React from "react"
import { dummydata } from "../../dummydata"
import "./product.css"
import {useDispatch} from "react-redux"
import { AddItem } from "../../redux/cartSlice"

function Product({image,name,price,id}) {
    let dispatch = useDispatch()
    return(
        <div className="product">
            <img src={image} alt="" />
            <div className="product-details">
                <span className="name">{name}</span>
                <span className="price">Rs {price} /-</span>
                <button onClick={()=>{
                    dispatch(AddItem({name:name,image:image,price:price,id:id}))
                    alert("Product added successfully..")
                }}>Add +</button>
            </div>
        </div>
    )
}
export default Product;