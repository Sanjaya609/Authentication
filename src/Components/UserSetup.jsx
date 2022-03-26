import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import {AiFillDelete} from 'react-icons/ai';
const baseURL = "https://ecom-react-task.herokuapp.com";


export const UserSetup = ({setUserModal}) => {
  //console.log(setAddUserModal);
  
  const [users, setUsers] = useState();
  const accessToken = localStorage.getItem('access_token');
  const fetchUser = async () => {
    const response = await axios({
      method: 'get',
      url: `${baseURL}/user`,
      headers: { 'Authorization': 'Bearer ' + accessToken },
    });
    setUsers(response?.data?.data);
  }
  useEffect(() => {
    fetchUser()
  }, [setUsers]);

  const handleModal=()=>{
    //console.log(setUserModal);
    setUserModal(true);
  }

  const DeleteUser=async(id)=>{
    await axios({
      method: 'delete',
      url: `${baseURL}/user/${id}`,
      headers: { 'Authorization': 'Bearer ' + accessToken },
    });
  };

  return (
    <div style={{padding:'1rem'}}>
      <div className="row" style={{'justifyContent':'space-between',width:'auto'}}>
        <h3 style={{width:'auto'}}>User Setup</h3>
        <button 
        type="button" 
        className="btn btn-primary" 
        style={{width:'auto'}}
        onClick={handleModal}>+ Add User
        </button>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">User</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {console.log(users)}
          {users?.map(item =>
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td><MdModeEditOutline /><AiFillDelete onClick={()=>DeleteUser(item.id)}/></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
