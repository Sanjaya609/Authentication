
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

const initialValues = {
  name: "",
  email: "",
  password: "",

}
const baseURL = "https://ecom-react-task.herokuapp.com";
export const Addusermodal = ({ userModal, setUserModal,fetchUser}) => {
  const { values, error, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
        console.log(values);
        createUser(values);
        setUserModal(false);
        resetForm();
    }
});
const createUser=async (values)=>{
  const accessToken=localStorage.getItem('access_token');
  if (values.name && values.email && values.password) {
     await axios({
        method: 'post',
        url: `${baseURL}/user`,
        headers: { 'Authorization': 'Bearer ' + accessToken },
        data: {
            name:`${values.name}`,
            email: `${values.email}`,
            password: `${values.password}`,
        },
    })
}
fetchUser();};

  return (
    <Modal show={userModal} onHide={() => setUserModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add User</Modal.Title>
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
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={values.email}
              onChange={handleChange} />
          </div>
          <div className="form-group" style={{ 'paddingTop': '1rem' }}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange} />
          </div>
          <div className="form-group" style={{ 'paddingTop': '1rem',display:'flex','flexDirection':'row'}}>
          <button type="submit" className="btn btn-primary" style={{marginRight:'1rem'}}>Add</button>
          <button type="button" className="btn btn-danger" onClick={() => setUserModal(false)}>Close</button>
          </div>
         
        </form>
      </Modal.Body>
    </Modal>
  )
}

