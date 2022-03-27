import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import { BaseURL } from '../Components/BaseUrl';
import { Dashboard } from '../Components/Dashboard';
import { LoginForm } from '../Components/LoginForm';
import { Addprivilegemodal } from '../Components/Modal/Addprivilegemodal';
import { Addrolemodal } from '../Components/Modal/Addrolemodal';
import { Addscreenmodal } from '../Components/Modal/Addscreenmodal';
import { Addusermodal } from '../Components/Modal/Addusermodal';
import { Adduserrolemodal } from '../Components/Modal/Adduserrolemodal';


export const Login = () => {
    // const [accessToken,setAccessToken]= useState(null);
    // useEffect(()=>{
    //     const token=localStorage.getItem('access_token');
    //     setAccessToken(token);
    // })
    const [userModal,setUserModal]= useState(false);
    const [roleModal,setRoleModal]= useState(false);
    const [screenModal,setScreenModal]= useState(false);
    const [privilegeModal,setPrivilegeModal]=useState(false);
    const [roleId,setRoleId]=useState(null);
    const [userRoleModal,setUserRoleModal]=useState(false);
    const [userToMap,setUserToMap]=useState(null);
    const [users,setUsers]=useState();
    const [roles,setRoles]=useState([]);


const [screenList,setScreenList]=useState([]);
const accessToken = localStorage.getItem('access_token');

const fetchUser = async () => {
    const response = await axios({
      method: 'get',
      url: `${BaseURL}/user`,
      headers: { 'Authorization': 'Bearer ' + accessToken },
    });
    setUsers(response?.data?.data);
  }
  useEffect(() => {
    fetchUser()
  }, [setUsers,users]);

  const fetchRoles = async () => {
    const response = await axios({
      method: 'get',
      url: `${BaseURL}/roles`,
      headers: { 'Authorization': 'Bearer ' + accessToken },
    });
    setRoles(response?.data?.data);
    //console.log(response?.data?.data);
  }
  useEffect(() => {
    fetchRoles()
  }, [setRoles]);



  const fetchScreen = async () => {
    const response = await axios({
      method: 'get',
      url: `${BaseURL}/screens`,
      headers: { 'Authorization': 'Bearer ' + accessToken },
    });
    setScreenList(response?.data?.data);
    //console.log(response);
  }
  useEffect(() => {
    fetchScreen()
  }, [setScreenList]);









    return (
        <>{userModal?<Addusermodal userModal={userModal} setUserModal={setUserModal} fetchUser={fetchUser}/>:null}
        {roleModal?<Addrolemodal roleModal={roleModal} setRoleModal={setRoleModal} fetchRoles={fetchRoles}/>:null}
        {screenModal?<Addscreenmodal screenModal={screenModal} setScreenModal={setScreenModal} fetchScreen={fetchScreen}/>:null}
        {privilegeModal?<Addprivilegemodal privilegeModal={privilegeModal} setPrivilegeModal={setPrivilegeModal} 
        screenList={screenList} roleId={roleId}/>:null}
        {userRoleModal?<Adduserrolemodal userRoleModal={userRoleModal} setUserRoleModal={setUserRoleModal}
        users={users} roles={roles} userToMap={userToMap} />:null}
        <Routes>
            <Route path='/' element={<LoginForm/>} />
            <Route path='/dashboard/*' element={<Dashboard  
                setUserModal={setUserModal} 
                setRoleModal={setRoleModal} 
                setScreenModal={setScreenModal} 
                setPrivilegeModal={setPrivilegeModal}
                setRoleId={setRoleId}
                setUserRoleModal={setUserRoleModal}
                users={users}
                roles={roles}
                setUserToMap={setUserToMap}
                fetchScreen={fetchScreen}
                screenList={screenList}
                fetchRoles={fetchRoles}
                fetchUser={fetchUser}/>}>
            </Route>
        </Routes></>
        
    )
};