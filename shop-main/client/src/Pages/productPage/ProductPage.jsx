import '../Pages.css';
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Comments from "../../components/Commentaries";
import { deletePostReq, getOnePostReq } from "../../serverFunction/productRequest";
//import { createRequestToBuyReq } from "../../servFunctions/requestToBuyReuest";
import { ToastContainer, toast } from 'react-toastify';
import { addToBasketReq, checkBasketPostReq, deletefromBasketReq, deleteFromBasketReq } from "../../serverFunction/basketPostReq";
//import { deleteIncomeByProductByProductIdReq } from "../servFunctions/incomeByProductReq";
//import { deleteCommentsByPostIdReq } from "../servFunctions/commentsReq";
import { ErrorWindow, Loader } from "../../components/cummon";

export const notifySucces=()=>{
    toast.success('request sended!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export const notifyError=()=>{
    toast.error('error', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}



const ProductPage=()=>{
    const [isLoading,setIsLoading]=useState(false)
    const [isError,setIsError]=useState(false)
    const {id,userId}=useParams()
    const [productData,setProductData]=useState({})
    const formData=new FormData()
    const [inBasket,setInBasket]=useState(false)
    const router=useHistory()
    
    useEffect(()=>{
        getOnePostReq(id,setProductData,setIsLoading,setIsError)
        checkBasketPostReq(userId,id,setInBasket)
        console.log(inBasket, "in busket")
    },[])

    /* const buy=(e)=>{
        e.preventDefault()
        if(localStorage.getItem('userID')==false){
            notifyError()
        }else{
            formData.append('productId',id)
            formData.append('userId',localStorage.getItem('userID'))
            formData.append('price',productData.price)
            formData.append('count',1)
            formData.append('sellerId',userId)
            createRequestToBuyReq(formData)
            formData.delete('productId')
            formData.delete('userId')
            formData.delete('price')
            formData.delete('count')
            formData.delete('sellerId')
        }
        
    }*/

    const addToBasket=()=>{
        formData.append('userId',localStorage.getItem('userID'))
        formData.append('productId',id)
        addToBasketReq(formData,setInBasket)
        formData.delete('userId')
        formData.delete('productId')
    }

    const deleteFromBasket=()=>{
        deleteFromBasketReq(id,localStorage.getItem('userID'),setInBasket)
    }

    {/*const deletePost=()=>{
        deletePostReq(id)
        deleteIncomeByProductByProductIdReq(id)
        deleteCommentsByPostIdReq(id)
        deletefromBasketReq(userId,id)
        router.push('/')

    }*/}

    return (
        <>
          {isLoading ? (
            <Loader/>
          ) : (
            <>
              {isError ? (
                <ErrorWindow errorMessage={"Error 404"}></ErrorWindow>
              ) : (
                  <div className="main-produkt">
                    <h5 className="nameItem">{productData.name}</h5>
                    <div className="image-container">
                      image
                    </div>
                    <div className="textAreaDiv">
                      <p>Brand: {productData.brand}</p>
                      <p>{productData.textarea}</p>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p className="price">{productData.price}</p>
                          {inBasket ? (
                            <button
                              onClick={deleteFromBasket}
                              type="button"
                              className="btn btn-danger"
                            >
                              delete from basket
                            </button>
                          ) : (
                            <button
                              onClick={addToBasket}
                              type="button"
                              className="btn btn-warning"
                            >
                              To Basket
                            </button>
                          )}
                        </div>
                      </div>
                      <Comments productId={id} />
                    </div>
                </div>
              )}
            </>
          )}
          <ToastContainer />
        </>
      )
}

export default ProductPage