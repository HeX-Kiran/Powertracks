import { ComponentPropsWithoutRef, FormEvent, ReactNode, useRef } from "react"
import "./Form.css"

type FormProps = {
    children?: ReactNode,
    onSave(data:unknown):void
} & ComponentPropsWithoutRef<"form">

function Form({children,onSave,...otherProps}:FormProps) {

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        
        const data  = Object.fromEntries(formData);
        
        onSave(data);
        // formRef.current?.reset()
    }
  return (
    <form className="form" {...otherProps} onSubmit={handleSubmit} ref={formRef}>
        {children}
    </form>
  )
}

export default Form