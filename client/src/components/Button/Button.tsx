import { type ReactNode, type ComponentPropsWithoutRef, Children } from "react"


type ButtonProps = {
    text: string,
    children:ReactNode
} & ComponentPropsWithoutRef<"button">

function Button({text,children,...otherProps}:ButtonProps) {
  return (
    <button {...otherProps}>
        <p>{text}</p>
        {children}
    </button>
  )
}

export default Button