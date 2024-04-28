import { ComponentPropsWithoutRef } from "react"
import "./Input.css"

type InputProps = {
    label: string,
    id: string
} & ComponentPropsWithoutRef<"input">

function Input({label,id,...otherProps}:InputProps) {
  return (
    <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <input {...otherProps} id={id} name={id}></input>
    </div>
  )
}

export default Input