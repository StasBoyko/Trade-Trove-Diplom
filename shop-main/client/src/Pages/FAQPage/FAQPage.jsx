import React, { useEffect, useState } from 'react';
import { getAllFAQU } from '../../serverFunction/FAQU';
import FaqCard from '../../components/FaquCard';
import { Loader, ErrorWindow } from '../../components/cummon/index';

const FAQPage = () => {
  const [isLoading,setIsLoading]=useState(false)
  const [isError,setIsError]=useState(false)
  const [items,setItems]=useState([])
  const [errorMassage,setErrorMassage]=useState("")
  useEffect(()=>{
    getAllFAQU(setItems,setIsLoading,setIsError,setErrorMassage)
},[])

  return (
    <>
    {isLoading?
      <Loader/>
    :
        <>{isError?
        <ErrorWindow errorMessage={errorMassage}></ErrorWindow>
         :
         <div className="faq-page">
              <h1>Найчастіші питання</h1>
              <div style={{display:'grid',gridTemplateColumns:"repeat(auto-fit,286px)",gridTemplateRows:"repeat(auto-fit,auto)"}}>
              {items.map(p=><FaqCard props={p}/>)} 
              </div>
          </div>
         }
       </>
      }
   </> 
  );
};

export default FAQPage;
