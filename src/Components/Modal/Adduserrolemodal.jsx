
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

const initialValues = {
    user: "Select User",
    role:"Select Role" ,
}
export const Adduserrolemodal = ({userRoleModal,setUserRoleModal,users,roles,userToMap}) => {
    const { values, error, handleChange, handleSubmit,handleBlur} = useFormik({
        initialValues,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
            setUserRoleModal(false);
        }
    });
  return (
    <Modal show={userRoleModal} onHide={() => setUserRoleModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Map User with Role</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <select
                            name="user"
                            className="form-select"
                            value={values.screen}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{ display: 'block' }}
                        >
                        <option value={userToMap} label={userToMap} key={Math.random()} />
                        </select>
                    </div>
                    <div className="form-group" style={{ 'paddingTop': '1rem' }}>
                        <select
                            name="roles"
                            className="form-select"
                            value={values.privilege}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{ display: 'block' }}
                        >
                            {roles.map((item) =>
                                <option value={item.name} label={item.name} key={item.id} />
                            )}
                        </select>
                        <div className="form-group" style={{ 'paddingTop': '1rem', display: 'flex', 'flexDirection': 'row' }}>
                            <button type="submit" className="btn btn-primary" style={{ marginRight: '1rem' }}>Map</button>
                            <button type="button" className="btn btn-danger" onClick={() => setPrivilegeModal(false)}>Close</button>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
  )
}
