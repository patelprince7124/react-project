import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {

    const redirect = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(e) {
        e.preventDefault()

        // Validation
        if (!username || !password) {
            toast.error("All fields are required!")
            return
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters!")
            return
        }

        toast.success("Login Successfully!")

        console.log("Login Data:", { username, password })

        setTimeout(() => {
            redirect('/contact')
        }, 1000)
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">

                    <form onSubmit={handleLogin}>
                        <h3 className="text-center mb-4">Login</h3>

                        <div className="mt-3">
                            <input
                                type="text"
                                placeholder="Username"
                                className="form-control"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="mt-3">
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="mt-4 text-center">
                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                            >
                                Login
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login
