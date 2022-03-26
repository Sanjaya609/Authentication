import React, {useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import { Dashboard } from '../Components/Dashboard';
import { LoginForm } from '../Components/LoginForm';
import { Addrolemodal } from '../Components/Modal/Addrolemodal';
import { Addusermodal } from '../Components/Modal/Addusermodal';
import { RoleSetup } from '../Components/RoleSetup';
import { UserSetup } from '../Components/UserSetup';

export const Login = () => {
    // const [accessToken,setAccessToken]= useState(null);
    // useEffect(()=>{
    //     const token=localStorage.getItem('access_token');
    //     setAccessToken(token);
    // })
    const [userModal,setUserModal]= useState(false);
    const [roleModal,setRoleModal]= useState(false);
    return (
        <>{userModal?<Addusermodal userModal={userModal} setUserModal={setUserModal}/>:null}
        {roleModal?<Addrolemodal roleModal={roleModal} setRoleModal={setRoleModal}/>:null}
        <Routes>
            <Route path='/' element={<LoginForm/>} />
            <Route path='/dashboard/*' element={<Dashboard  setUserModal={setUserModal} setRoleModal={setRoleModal} />}>
                <Route path='usersetup' element={<UserSetup />}/>   
                <Route path='rolesetup' element={<RoleSetup />}/> 
            </Route>
        </Routes></>
        
    )
};