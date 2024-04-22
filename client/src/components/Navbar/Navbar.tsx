import { useState } from 'react'
import NavLinks from '../Navlink/NavLinks'
import "./Navbar.css"
import Button from '../Button/Button'
import Image from '../Image/Image'
import logo from  "../../assets/logo.webp"

function Navbar() {
    const links: string[] = ["service","products","contact us", "about"]
    

  return (
    <nav className='navbar flex items-center justify-between'>
        {/* Brand logo */}
       <Image url={logo} alt='logo' className='w-[10vw]'/>
        {/* Links */}
        <ul>
            {
                links.map((link)=>{
                    return <NavLinks link={link} />
                })
            }
        </ul>
        {/* Nav button */}
        <Button text='call' className='nav-btn'/>
        
    </nav>
  )
}

export default Navbar