import React, { useEffect, useState } from "react";
import { getAllPostsReq } from "../../serverFunction/productRequest";
import ProductCard from "../../components/ProductCard";
import SideBar from "../../components/SideBar";
import { ErrorWindow, Loader } from "../../components/cummon";

const Main=()=>{
    const [items,setItems]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [isError,setIsError]=useState(false)
    const [errorMassage,setErrorMassage]=useState("")

    useEffect(()=>{
        getAllPostsReq(setItems,setIsLoading,setIsError,setErrorMassage)
    },[])

    return(
        <>
            {isLoading?
            <>
                <Loader></Loader>
                </>
            :
                <>
                    {isError?
                    <>
                        <ErrorWindow errorMessage={errorMassage}></ErrorWindow>
                    </>
                    :
                        <>
                            <div style={{height:"100%",display:'grid',gridTemplateColumns:"20% 1fr",gridTemplateRows:"100%"}} >
                                <div  style={{backgroundColor:'#222d32'}}>
                                    <SideBar items={items} setItems={setItems} setIsLoading={setIsLoading} setIsError={setIsError}/>
                                </div>
                                <div style={{height:'692px',overflowY:'auto'}}>
                                    <div style={{display:'grid',gridTemplateColumns:"repeat(auto-fit,286px)",gridTemplateRows:"repeat(auto-fit,auto)"}}>
                                        {items.map(p=>
                                            <ProductCard props={p}/>   
                                        )} 
                                    </div>               
                                </div>
                            </div>
                        </>
                    }
                </>
            }
         </>
    )
}

export default Main