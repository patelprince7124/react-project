import { BlogForm } from './Components/BlogForm'
import { BlogList } from './Components/BlogList'
import Header from './Components/Header'
import EditBlog from './Pages/EditBlog'
import Home from './Pages/Home'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<BlogForm />} />
        <Route path="/list" element={<BlogList />} />
        <Route path="/edit/:id" element={<EditBlog />} />
      </Routes>

      {/*  Toast add */}
      <ToastContainer position="top-right" autoClose={2000} />

    </BrowserRouter>
  )
}

export default App