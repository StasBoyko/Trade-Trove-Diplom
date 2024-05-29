import React, { useState } from 'react';
import '../Pages.css';
import { updateUserReq } from '../../serverFunction/userRequests';
import { ErrorWindow, Loader } from '../../components/cummon';

const ProfileEdit = ({ onUpdate, editModeSet}) => {
    const [isLoading,setIsLoading]=useState(false);
    const [isError,setIsError]=useState(false);
    const [ErrorMassage,setErrorMassage]=useState("");
    const [newUserData, setNewUserData] = useState({
        firstname: "",
        lastname: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUserData({ ...newUserData, [name]: value });
    };

    const handleSubmit = (e) => {
        const userId = localStorage.getItem('userID');
        e.preventDefault();
        console.log( "user Id to change : ", userId);
        onUpdate(newUserData);
        updateUserReq(userId,newUserData,setIsLoading,setIsError,setErrorMassage);
    };

    return (    
        <div>
            {isError?
            (<ErrorWindow errorMessage={ErrorMassage}/>)
            :
            <>
            {isLoading?
                (<Loader></Loader>)
                :
                <>
                <h2 className='h1Edit'>Редагування профілю користувача</h2>
            <form className='form-container' onSubmit={handleSubmit}>
                <div>
                <label className='formLabels'>
                    Ім'я:
                    <input 
                    className='formInputs'
                        type="text" 
                        name="firstname" 
                        value={newUserData.firstname} 
                        onChange={handleInputChange} 
                    />
                </label>
                <label className='formLabels'>
                    Прізвище:
                    <input 
                    className='formInputs'
                        type="text" 
                        name="lastname" 
                        value={newUserData.lastname} 
                        onChange={handleInputChange} 
                    />
                </label>
                </div>
                <button className='MainButton' type="submit">Зберегти зміни</button>
            </form>
            
            <button className='MainButton' onClick={editModeSet}>Завершити редагування</button>
            </>
            }
            </>
            }
        </div>
    );
};

export default ProfileEdit;
