import React from 'react'
import axios from 'axios';
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
import { BaseURL } from './BaseUrl';

const initialValues = {
    email: "",
    password: "",
}
export const LoginForm = () => {
    const navigate= useNavigate();
    const { values, error, handleChange, handleSubmit } = useFormik({
        initialValues,
        onSubmit: (values, { resetForm }) => {
            callApi(values);
            //console.log(values);
            resetForm();
        }
    });

    const callApi = async (values) => {
        // console.log(values.email,values.password)

        if (values.email && values.password) {
            const response = await axios({
                method: 'post',
                url: `${BaseURL}/auth/login`,
                data: {
                    email: `${values.email}`,
                    password: `${values.password}`,
                },
            })
            // console.log(response);
            if (response?.data?.success) {
                const accessToken = response.data.data.token;
                localStorage.setItem('access_token', accessToken);
                navigate(`/dashboard/home`);
            } else {
                navigate(`/`);
            }
        }
    }
    return (
        <div className="container" style={{ padding: "5rem" }}>
            <div className="row" style={{ 'display': 'flex', 'justifyContent': "center" }}>
                <div className="login-form col-md-5 shadow p-3 mb-5 bg-white rounded" style={{ background: "blueviolet" }}>
                    <div className="row">
                        <h3 style={{ 'textAlign': 'center', 'padding': '1rem' }}>Login</h3></div>
                    <div className="row">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    value={values.email}
                                    onChange={handleChange}
                                     />
                            </div>
                            <div className="form-group" style={{ 'padding': '1rem 0 1rem 0' }}>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Log In</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    )
}
