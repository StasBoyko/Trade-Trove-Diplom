import React, { useEffect, useState } from "react";
import BasketCardItem from "../../components/BasketCardItem";
//import CardItem from "../Components/CardItem";
import { getByUserIdBasketPostsReq } from "../../serverFunction/basketPostReq";
import {ErrorWindow, Loader} from "../../components/cummon/index";

const BascketPage=()=>{
    const [isLoading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState(false)
    const [basketPosts,setBasketPosts]=useState([])

    useEffect(()=>{
        getByUserIdBasketPostsReq(localStorage.getItem('userID'),setBasketPosts,setIsLoading,setIsError)
    },[])

    return(
        <div>
            {isLoading?
                <Loader></Loader>
            :
                <>
                    {isError?
                        <ErrorWindow></ErrorWindow>
                    :
                        <>
                        <div style={{margin:"0px auto"}}>
                            {basketPosts.length==0?
                                <h1 style={{textAlign:'center'}}>No saved products yet</h1>
                            :
                                <></>
                            }
                            <div style={{display:'grid',gridTemplateColumns:"repeat(auto-fit,286px)",gridTemplateRows:"repeat(auto-fit,auto)"}}>
                                {basketPosts.map((p)=>
                                    <BasketCardItem postId={p.productId}/>
                                )}
                            </div>
                        </div>            
                        
                        </>
                    }
                </>
            }
            
        </div>
    )
}

export default BascketPage