import "./Navlinks.css"

type NavlinkProps = {
    link: string;
    currLink: string;
    onClick(link: string):void
}

function NavLinks({link,currLink,onClick}: NavlinkProps) {
  return (
    <a className={currLink === link ? "active" : "" } onClick={()=>onClick(link)}>{link}</a>
  )
}

export default NavLinks