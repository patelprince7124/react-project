import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast, Slide } from 'react-toastify'

const Register = () => {

    const redirect = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")

    function Regist(e) {

        e.preventDefault()   // prevent page reload

        if (!username || !password || !email || !mobile) {
            toast.error("All fields are required!")
            return
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters!")
            return
        }

        if (!email.includes("@")) {
            toast.error("Enter valid email address!")
            return
        }

        const userData = {
            username,
            password,
            email,
            mobile
        }

        console.log("Registered Data:", userData)

        toast.success("Registration Successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
            transition: Slide,
        })

        setTimeout(() => {
            redirect('/login')
        }, 1000)
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">

                    <form onSubmit={Regist}>
                        <h3 className="text-center mb-4">Register</h3>

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

                        <div className="mt-3">
                            <input
                                type="email"
                                placeholder="Email"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mt-3">
                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                className="form-control"
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>

                        <div className="mt-4 text-center d-flex gap-2">
                            <button
                                className="btn btn-primary w-50"
                                type='submit'
                            >
                                Register
                            </button>

                            <NavLink
                                to="/login"
                                className="btn btn-warning w-50"
                            >
                                Login
                            </NavLink>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Register
