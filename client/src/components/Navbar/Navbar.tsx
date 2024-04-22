import React, { useState } from 'react'
import NavLinks from '../Navlink/NavLinks'
import "./Navbar.css"
import Button from '../Button/Button'

function Navbar() {
    const links: string[] = ["service","products","contact us", "about"]
    const [currLink,setCurrLink] = useState<string>("service");

    function handleLinkClick(link: string){
        setCurrLink(link);
    }

  return (
    <nav className='navbar flex items-center justify-between'>
        {/* Brand logo */}
        <h1 className='uppercase text-3xl font-bold tracking-wider'>POWERTRACKS</h1>
        {/* Links */}
        <ul>
            {
                links.map((link,index)=>{
                    return <NavLinks link={link} currLink={currLink} onClick={handleLinkClick}/>
                })
            }
        </ul>
        {/* Nav button */}
        <Button text='call' className='nav-btn'/>
        
    </nav>
  )
}

export default Navbar