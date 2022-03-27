
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { BaseURL } from '../BaseUrl';


const initialValues = {
    screen: "Screen Name",
    privilege: [],
}

const privilege = [
    {
        label:"Create",
        value:"Create"
    },
    {
        label:"Read",
        value:"Read"
    },
    {
        label:"Update",
        value:"Update"
    },
    {
        label:"Delete",
        value:"Delete",
    }
]
export const Addprivilegemodal = ({ privilegeModal, setPrivilegeModal, screenList,roleId }) => {
    //console.log(roleId)    
    const { values, error, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues,
        onSubmit: (values, { resetForm }) => {
            
            mapScreenRole(values);
            resetForm();
            setPrivilegeModal(false);
        }
    });
    //console.log(screenList);
    const[privilegeList,setPrivilegeList]=useState({});

    const mapScreenRole = async(values)=>{
        const accessToken=localStorage.getItem('access_token');
        const screenName=values.screen;
        const privileges=values.privilege;
        const data ={
            "id":roleId,
            "mapping":{
                [screenName]:{
                  [privileges]:true,
                }
            }
        };
        console.log(data);
        await axios({
            method: 'post',
            data,
            url: `${BaseURL}/roles/screen/mapping`,
            headers: { 'Authorization': 'Bearer ' + accessToken },
          }).then(()=>alert("Mapping successfully done")).catch((err)=>console.log(error));
    }

    return (

        <Modal show={privilegeModal} onHide={() => setPrivilegeModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Add User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <select
                            name="screen"
                            className="form-select"
                            value={values.screen}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{ display: 'block' }}
                        >
                            {screenList.map((item) =>
                                <option value={item.name} label={item.name} key={item.id} />
                            )}
                        </select>
                    </div>
                    <div className="form-group" style={{ 'paddingTop': '1rem' }}>
                        <select
                            name="privilege"
                            className="form-select"
                            value={values.privilege}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{ display: 'block' }}
                        >
                            {privilege.map((item) =>
                                <option value={item.value} label={item.label} key={Math.random()} />
                            )}
                        </select>
                        <div className="form-group" style={{ 'paddingTop': '1rem', display: 'flex', 'flexDirection': 'row' }}>
                            <button type="submit" className="btn btn-primary" style={{ marginRight: '1rem' }}>Add</button>
                            <button type="button" className="btn btn-danger" onClick={() => setPrivilegeModal(false)}>Close</button>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}
