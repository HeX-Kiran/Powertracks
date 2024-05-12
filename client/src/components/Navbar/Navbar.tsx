import { useState } from 'react'
import NavLinks from '../Navlink/NavLinks'
import "./Navbar.css"
import Button from '../Button/Button'
import Image from '../Image/Image'
import logo from  "../../assets/logo.webp"
import { useNavigate } from 'react-router-dom'

type NavbarProps = {
    navLinkStyles?: string;
    navBarStyles?: string;
}

function Navbar({navLinkStyles,navBarStyles}:NavbarProps) {
    const links: string[] = ["service","products","contact us", "about"];

    const navigate = useNavigate();

    const handleNavLinkClick = (path: string)=>{
        navigate(`/${path}`)
    }
    

  return (
    <nav className={`navbar flex items-center justify-between ${navBarStyles}`}>
        {/* Brand logo */}
       <Image url={logo} alt='logo' className='w-[10vw]'/>
        {/* Links */}
        <ul>
            {
                links.map((link)=>{
                    return <NavLinks link={link} handleClick ={handleNavLinkClick} navLinkStyles={navLinkStyles}/>
                })
            }
        </ul>
        {/* Nav button */}
        <Button text='Login' className='nav-btn'/>
        
    </nav>
  )
}

export default Navbar