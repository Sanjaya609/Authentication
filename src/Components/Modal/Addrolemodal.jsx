
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

const initialValues = {
  name: "",
  description:"",

}
const baseURL = "https://ecom-react-task.herokuapp.com";
export const Addrolemodal = ({ roleModal, setRoleModal,fetchRoles }) => {
  const { values, error, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
        console.log(values);
        createRole(values);
        resetForm();
        setRoleModal(false);
    }
});
const createRole=async (values)=>{
  const accessToken=localStorage.getItem('access_token');
  if (values.name && values.description) {
     await axios({
        method: 'post',
        url: `${baseURL}/roles`,
        headers: { 'Authorization': 'Bearer ' + accessToken },
        data: {
            name:`${values.name}`,
            description:`${values.description}`,
        },
    })
}
fetchRoles();};

  return (
    <Modal show={roleModal} onHide={() => setRoleModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={values.name}
              onChange={handleChange} />
          </div>
          <div className="form-group"  style={{ 'paddingTop': '1rem' }}>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Enter description"
              value={values.description}
              onChange={handleChange} />
          </div>
          <div className="form-group" style={{ 'paddingTop': '1rem',display:'flex','flexDirection':'row'}}>
          <button type="submit" className="btn btn-primary" style={{marginRight:'1rem'}}>Add</button>
          <button type="button" className="btn btn-danger" onClick={() => setRoleModal(false)}>Close</button>
          </div>
         
        </form>
      </Modal.Body>
    </Modal>
  )
}

