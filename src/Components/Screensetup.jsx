import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BaseURL } from './BaseUrl';
import { MdModeEditOutline } from 'react-icons/md';
import {AiFillDelete} from 'react-icons/ai';

export const Screensetup = ({setScreenModal,fetchScreen,screenList}) => {
const accessToken = localStorage.getItem('access_token');

  const DeleteScreen =async(id)=>{
      //alert("Are you sure to Delete this screen");
      //console.log(alert);
      await axios({
        method: 'delete',
        url: `${BaseURL}/screens/${id}`,
        headers: { 'Authorization': 'Bearer ' + accessToken },
      });
      fetchScreen();
  }


  return (
    <div style={{padding:'1rem'}}>
      <div className="row" style={{'justifyContent':'space-between',width:'auto'}}>
        <h3 style={{width:'auto'}}>Screen Details</h3>
        <button 
        type="button" 
        className="btn btn-primary" 
        style={{width:'auto'}}
        onClick={()=>setScreenModal(true)}>+ Add Screen
        </button>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">S.N</th>
            <th scope="col">Screen Name Name</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {screenList?.map((item,index) =>
            <tr key={item.id}>
              <th scope="row">{index+1}</th>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td><MdModeEditOutline /><AiFillDelete onClick={()=>DeleteScreen(item.id)}/></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
