import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdModeEditOutline } from 'react-icons/md';
import {AiFillDelete} from 'react-icons/ai';

const baseURL = "https://ecom-react-task.herokuapp.com";
export const RoleSetup = ({setRoleModal}) => {

const [roles,setRoles]=useState([]);
const accessToken = localStorage.getItem('access_token');
  const fetchRoles = async () => {
    const response = await axios({
      method: 'get',
      url: `${baseURL}/roles`,
      headers: { 'Authorization': 'Bearer ' + accessToken },
    });
    setRoles(response?.data?.data);
  }
  useEffect(() => {
    fetchRoles()
  }, [setRoles]);


  const DeleteRole=async(id)=>{
    await axios({
      method: 'delete',
      url: `${baseURL}/roles/${id}`,
      headers: { 'Authorization': 'Bearer ' + accessToken },
    });
  };
  return (
    <div style={{padding:'1rem'}}>
      <div className="row" style={{'justifyContent':'space-between',width:'auto'}}>
        <h3 style={{width:'auto'}}>Role Details</h3>
        <button 
        type="button" 
        className="btn btn-primary" 
        style={{width:'auto'}}
        onClick={()=>setRoleModal(true)}>+ Add Role
        </button>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">S.N</th>
            <th scope="col">Role Name</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles?.map((item,index) =>
            <tr key={item.id}>
              <th scope="row">{index+1}</th>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td><MdModeEditOutline /><AiFillDelete onClick={()=>DeleteRole(item.id)}/></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
