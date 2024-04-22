import "./Navlinks.css"

type NavlinkProps = {
    link: string;
   
}

function NavLinks({link}: NavlinkProps) {
  return (
    <a className="nav-link" >{link}</a>
  )
}

export default NavLinks