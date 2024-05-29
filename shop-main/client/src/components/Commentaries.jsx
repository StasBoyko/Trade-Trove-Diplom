import React, { useEffect, useState } from "react";
import { createCommentReq, getCommentsByPostIdReq } from "../serverFunction/commentsReq";
import Comment from "./cummon/Comment";

const Comments=({productId})=>{
    const [text,setText]=useState('')
    const formData=new FormData()
    const [comments,setComments]=useState([
    ])

    const [isLoading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState(false)


    useEffect(()=>{
        getCommentsByPostIdReq(productId,setComments,setIsError,setIsLoading)
    },[])

    const send=()=>{
        formData.append('text',text)
        formData.append('userId',localStorage.getItem('userID'))
        formData.append('productId',productId)
        createCommentReq(text,productId,setComments)
        formData.delete('text')
        formData.delete('userId')
        formData.delete('productId')
    }

    return(
        <div style={{borderRadius: '5px', borderColor:'#4caf50'}}>
            <h4 className="text-center">Commentaries</h4>
            <div className="d-flex">
                <input className="inputcomment" value={text} onChange={(e)=>setText(e.target.value)}/><button onClick={send} type="button" class="btn btn-outline-primary">leave comment</button>
            </div>
            
            {comments.map(p=>
                <Comment key={p._id} userId={p.userId} text={p.text}/>
            )}
        </div>
    )
}

export default Comments