import { useEffect, useState } from "react"
import "../assets/css/header.css"
import logo from "../assets/images/logo.png"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="container">

    
        <a className="navbar-brand logo d-flex align-items-center" href="#">
          <img src={logo} alt="Beko Logo" />
          <span style={{color:"white"}}> BEKO</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bekoNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="bekoNav">
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Fighter</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Team</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Pages</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>

            <li className="nav-item ms-3">
              <button className="btn-install">Install Now</button>
            </li>

         
          </ul>
        </div>
      </div>
      
    </nav>

    
  )
}


export default Header