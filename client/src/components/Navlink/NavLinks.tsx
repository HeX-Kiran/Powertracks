import "./Navlinks.css"


type NavlinkProps = {
    link: string;
    handleClick(path: string) : void
    navLinkStyles?:string;
   
}

function NavLinks({link,handleClick,navLinkStyles}: NavlinkProps) {
  return (
    <a className= {`nav-link ${navLinkStyles}`} onClick={()=>handleClick(link)}>{link}</a>
  )
}

export default NavLinks