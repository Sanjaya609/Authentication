import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export const Login = () => {
    return (
        <div className="container" style={{ padding: "5rem" }}>
            <div className="row" style={{ 'display': 'flex', 'justifyContent': "center" }}>
                <div className="login-form col-md-5 shadow p-3 mb-5 bg-white rounded" style={{ background: "blueviolet" }}>
                    <div className="row">
                        <h3 style={{ 'textAlign': 'center', 'padding': '1rem' }}>Login</h3></div>
                    <div className="row">
                        <form>
                            <div className="form-group">
                                <label for="email">Email address</label>
                                <input
                                type="email" 
                                className="form-control" 
                                id="email" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter email"/>
                            </div>
                            <div className="form-group" style={{'padding':'1rem 0 1rem 0'}}>
                                <label for="password">Password</label>
                                <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form></div>
                </div>
            </div>

        </div>
    )
}
