import React from 'react'
import {Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import logo from '../infodev.png';
import styles from '../Styles/Dashboard.module.css';
import { RoleSetup } from './RoleSetup';
import { UserSetup } from './UserSetup';
export const Dashboard = ({setUserModal,setRoleModal}) => {

    





    const navigate= useNavigate();
    return (
        <div className='dashboard' style={{'display':'flex'}}>
            <div className=' sideNav col-md-2' style={{'background':'black','color':'white','height':'100vh'}}>
                <div className="logo" style={{ 'height': '10rem', 'width': '100%', 'display': 'flex', 'justifyContent': 'center' }}>
                    <img src={logo} alt="Logo" style={{ 'width': '75%',borderRadius:'50%'}} /></div>

                <nav className='nav-list' style={{ 'display': 'flex', 'flexDirection': 'column', 'padding': '0rem 2rem',marginTop:'3rem'}}>
                    <div className="sidenav" style={{'display':'flex','flexDirection':'column'}}>
                        <button className={styles.button} onClick={()=>navigate(`/dashboard`)}>Home</button>
                        <button className={styles.button}>Screen Setup</button>
                        <button className={styles.button} onClick={()=>navigate(`/dashboard/rolesetup`)}>Role Setup</button>
                        <button className={styles.button}  onClick={()=>navigate(`/dashboard/usersetup`)}>User Setup</button>
                        <button className={styles.button}>Privilege Setup</button>
                    </div>
                </nav>
            </div>
            <div className="col-md-10">
            <Routes>
            <Route path='/' element={<h1 style={{display:'flex',justifyContent:'center','alignItems':'center'}}>Dashboard is under construction</h1>}/>
            <Route path='usersetup' element={<UserSetup setUserModal={setUserModal}/>}/>
            <Route path='rolesetup' element={<RoleSetup setRoleModal={setRoleModal}/>}/>
            </Routes>
            
                
            
            </div>
        <Outlet/>
        </div>
    )
}
