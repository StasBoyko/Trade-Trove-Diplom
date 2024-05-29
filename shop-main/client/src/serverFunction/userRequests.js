import axios from 'axios'
import { login } from '../redux/reducers/userReducer'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const url='http://localhost:5000/tradeTrove'

export async function registrate(userData){
    try{
        if(!userData.email||!userData.lastname||!userData.firstname||!userData.password){
            return res.status(400).alert("bad request")
        }
        const res= await axios.post(`${url}/users/registrate`,{
            lastname:userData.lastname,
            firstname:userData.firstname,
            email:userData.email,
            password:userData.password,
            caption:"",
        })
        alert("created")
    }catch(e){
        alert(e.response.data.message)
    }
}



export const loginReq = (userData) => {
    return async (dispatch) => {
        try {
            if (!userData.email || !userData.password) {
                throw new Error("Bad request");
            }
            const res = await axios.post(`${url}/users/login`, {
                email: userData.email,
                password: userData.password
            });
            dispatch(login(res.data));
            localStorage.setItem('userID', res.data._id);
            alert("Logined");
            return { successfulLogin: true };
        } catch (error) {
            if (error.response && error.response.status === 400) {
                throw new Error("Incorrect email or password");
                 // Якщо сервер повернув статус (невірні дані), виводимо повідомлення про 
            } else {
                throw new Error("An error occurred");
                 // Інакше виводимо загальне повідомлення про помилку
            }
        }
    }
};

export const rehost=()=>{
    return async dispatch=>{
        try{
            if(localStorage.getItem("userID")==null){
                throw Error
            }
            console.log(localStorage.getItem('userID'))
            const res= await axios.get(`${url}/users/auth/${localStorage.getItem('userID')}`)
            dispatch(login(res.data))
            localStorage.setItem('userID',res.data._id)
        }catch(e){
            console.log(e)
            localStorage.removeItem('userID')
        }       
    }

}

export const getOneUserReq=async (id,setFunc,setIsLoading,setIsError,setErrorMassage)=>{
        try{
            setIsLoading(true)
            const res= await axios.get(`${url}/users/${id}`)
            setFunc(res.data)
            console.log('getOneUserReq')
            setIsLoading(false)
        }catch(e){
            setIsError(true)
            setErrorMassage(e.data)
            console.log(e)
        }       
}

export const updateUserReq = async (id, userData, setIsLoading, setIsError, setErrorMassage) => {
    try {
        setIsLoading(true);
        const res = await axios.put(`${url}/users/update/${id}`, userData);
        console.log('updateUserReq');
        setIsLoading(false);
        return res.data; // Повертаємо оновлені дані користувача після успішного оновлення
    } catch (e) {
        setIsError(true);
        setErrorMassage(e.data);
        console.log(e);
        return null;
    }
};