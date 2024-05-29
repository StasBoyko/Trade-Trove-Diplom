import React from "react";
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './UI/cards.css'
import { toast } from "react-toastify";

const notify=()=>{
    toast.error('You must be logged for made buy!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
const CardItem=({props})=>{
    const isAuth=useSelector(state=>state.user.isAuth)
    const router=useHistory()
    return(
        <div style={{width:"18rem",overflow:'hidden'}}>
          <div class="Productcard">
            <div style={{height:"150px",background:'gray',borderRadius:'10px'}} ></div>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <h6 className="card-details">brand:{props.brand}</h6>
                <h6 className="card-details">type:{props.type}</h6>
                <p class="text-muted">{props.textarea}</p>
                {isAuth?
                    <button onClick={()=>router.push(`/ProductPage/${props._id}&${props.userId}`)} class="card-button">{props.price+"$"}</button>
                :
                    <button  class="card-button" onClick={notify}>{props.price}</button>
                }
            </div>
        </div>
        </div>
    )
}

export default CardItem