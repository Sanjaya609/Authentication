import React, {useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import { Dashboard } from '../Components/Dashboard';
import { LoginForm } from '../Components/LoginForm';
import { Addusermodal } from '../Components/Modal/Addusermodal';
import { UserSetup } from '../Components/UserSetup';

export const Login = () => {
    // const [accessToken,setAccessToken]= useState(null);
    // useEffect(()=>{
    //     const token=localStorage.getItem('access_token');
    //     setAccessToken(token);
    // })
    const [userModal,setUserModal]= useState(false);

    return (
        <>{userModal?<Addusermodal userModal={userModal} setUserModal={setUserModal}/>:null}
        <Routes>
            <Route path='/' element={<LoginForm/>} />
            <Route path='/dashboard/*' element={<Dashboard  setUserModal={setUserModal} />}>
                <Route path='usersetup' element={<UserSetup />}/>   
            </Route>
        </Routes></>
        
    )
};