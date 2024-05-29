import axios from 'axios' /// это файл чтобы обавлять продукт в магазин 

const url='http://localhost:5000/tradeTrove'

export async function createProductReq(productData){
    try{
        const res= await axios.post(`${url}/products/`,productData)
    }catch(e){
        alert(e.response.data.message)
    }
}

export async function getAllPostsReq(setFunc,setIsLoading,setIsError,length,setErrorMassage){
    try{
        setIsLoading(true)
        const res= await axios.get(`${url}/products/`)
        setFunc(res.data)
        setIsLoading(false)
    }catch(e){
        setIsError(true)
        alert(e.response.data.message)
        setErrorMassage(e.response.data.message)
    }
}

export async function getOnePostReq(id,setFunc,setIsLoading,setIsError){
    try{
        setIsLoading(true)
        const res= await axios.get(`${url}/products/${id}`)
        setFunc(res.data)
        setIsLoading(false)
    }catch(e){
        setIsError(true)
        alert(e.response.data.message)
    }
}


export async function getPostsByUserIdReq(id,setFunc,setIsLoading,setIsError){
    try{
        setIsLoading(true)
        const res= await axios.get(`${url}/product/byUserId/${id}`)
        setFunc(res.data)
        setIsLoading(false)
    }catch(e){
        setIsError(true)
        alert(e.response.data.message)
    }
}


export async function getPostsByCategoryReq(type,brand,setFunc,setIsLoading,setIsError){
    try{
        setIsLoading(true)
        const res= await axios.get(`${url}/product/byCategories/${type}&${brand}`)
        setFunc( res.data)
        setIsLoading(false)
    }catch(e){
        setIsError(true)
        alert(e.response.data.message)
    }
}



export async function deletePostReq(id){
    try{
        const res= await axios.delete(`${url}/products/${id}`)
    }catch(e){
        alert(e.response.data.message)
    }
}






