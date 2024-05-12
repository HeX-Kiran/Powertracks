

import { ComponentPropsWithoutRef } from "react"
import "./Searchbar.css"
import Image from "../Image/Image"

type SeachbarProps = {
    icon?: string
} & ComponentPropsWithoutRef<"input">

function Searchbar({icon,...otherProps}: SeachbarProps) {
  return (
    <div className="search-bar relative">
       {icon && <Image url={icon} alt="search-icon" height={"20px"} width={"20px"} className="search-bar-icon-position"/>}
        <input {...otherProps}></input>
    </div>
  )
}

export default Searchbar