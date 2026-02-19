import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./layout/Header"
import Footer from "./layout/Footer"

import Home from "./pages/Home"
import FormContact from "./pages/FormContact"
import Login from "./pages/home/Login"
import Register from "./pages/home/Register"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<FormContact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <ToastContainer />
      <Footer />

    </BrowserRouter>
  )
}

export default App
