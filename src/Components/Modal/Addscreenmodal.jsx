import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { BaseURL } from '../BaseUrl';

const initialValues={
    name:"",
    description:"",
};
export const Addscreenmodal = ({screenModal,setScreenModal,fetchScreen}) => {

    const { values, error, handleChange, handleSubmit } = useFormik({
        initialValues,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            createScreen(values);
            resetForm();
            setScreenModal(false);
        }
    });
    const createScreen=async (values)=>{
      const accessToken=localStorage.getItem('access_token');
      if (values.name && values.description) {
         await axios({
            method: 'post',
            url: `${BaseURL}/screens`,
            headers: { 'Authorization': 'Bearer ' + accessToken },
            data: {
                name:`${values.name}`,
                description:`${values.description}`,
            },
        })
    }
    fetchScreen();
};

  return (
    <Modal show={screenModal} onHide={() => setScreenModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add Screen</Modal.Title>
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
