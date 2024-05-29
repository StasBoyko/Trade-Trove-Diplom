import React, { useEffect, useState } from 'react';
import ProfileView from './ProfileView';
import '../Pages.css';
import ProfileEdit from './ProfileEdit';
import { getOneUserReq } from '../../serverFunction/userRequests';
import { ErrorWindow, Loader } from '../../components/cummon/index';

const ProfilePage = () => {
    const [editMode,setEditMode]=useState(false)
    const [isLoading,setIsLoading]=useState(false)
    const [isError,setIsError]=useState(false)
    const userId = localStorage.getItem('userID');
    const [userData,setUserData] = useState({});
    const [ErrorMassage,setErrorMassage]=useState("")
    const [changeData, setChangeData] = useState();

    useEffect(()=>{
      getOneUserReq(userId,setUserData,setIsLoading,setIsError,setErrorMassage)
      setChangeData(true);
  },[changeData])

    const handleUpdate = (userData) => {
        console.log('Дані профілю оновлено:', userData);
        setChangeData(false);
    };
    function EditModeSet () {
        setEditMode(false)
    } 

    return (
        <div className='ProfilePageMainDiv'>
            {isError?
            ( <ErrorWindow errorMessage={ErrorMassage}/> )
            :
            <>
            {isLoading?
            (<Loader></Loader>)
            :
            <>
            {editMode ? (
             <ProfileEdit user={userData} onUpdate={handleUpdate} editModeSet={EditModeSet}/>
            ) : <>
             <ProfileView user={userData} />
             <button className='MainButton' onClick={() => setEditMode(!editMode)}>Редагувати профіль</button> 
             </>}  
            </>
            }
            </>
            }
        </div>
    );
};

export default ProfilePage;
