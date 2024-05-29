import axios from 'axios'
import {notifySucces,notifyError} from '../Pages/productPage/ProductPage';

const url='http://localhost:5000/tradeTrove'


export async function getCommentsByPostIdReq(id,setFunc,setIsError,setIsLoading){
    try{
        setIsLoading(true)
        const res= await axios.get(`${url}/comment/getByPostId/${id}`)
        setFunc(res.data)
        setIsLoading(false)
    }catch(e){
        notifyError()
        setIsError(false)
        alert(e.response.data.message)
    }
}


export async function createCommentReq(text,productId,setComments){
    try{
        const res= await axios.post(`${url}/comment`,{
            text:text,
            userId:localStorage.getItem('userID'),
            productId:productId
        })
        setComments(prev=>[...prev,{text:text,userId:localStorage.getItem('userID'),productId:productId}])
        notifySucces()
    }catch(e){
        notifyError()
    }
}

export async function deleteCommentsByPostIdReq(id){
    try{
        const res= await axios.delete(`${url}/comment/byProductId/${id}`)
    }catch(e){
    }
}
