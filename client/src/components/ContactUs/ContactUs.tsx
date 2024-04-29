
import "./ContactUs.css"

import React from 'react'
import Input from "../Input/Input"
import Button from "../Button/Button"
import Form from "../Form/Form"

function ContactUs() {

    const onSave = (data:unknown):void =>{
        
        const extractedData = data as {name: string,email: string, phone:number}
        console.log(extractedData);
        
    }

  return (
    <section className="section-contact-us">
        <div className="contact-us-title">
            <h1>Reserve your <span className="text-teal-200">cost-free </span>consultation with us today!</h1>
            <p>Receive personalized guidance and have all your questions answered by our dedicated solar expert.</p>
        </div>
        <Form onSave={onSave}>
            <Input label="UserName" type="text" id="name" required/>
            <Input label="Email" type="email" id="email" required/>
            <Input label="Phone number" type="number" id="phone" required/>
            <Input label="Approximate Electricity Bill" type="number" id="bill" required/>
            <div className="form-grid-col-2">
                <Input label="Pincode" type="string" id="pin" required/>
                <Input label="City" type="string" id="city" />
            </div>
            
            
            <Button text="Transform to solar"/>
        </Form>
    </section>
  )
}

export default ContactUs