import React, { useState } from 'react';
import './styleContact.css';

const Contact = () => {

const [user, setUser]=useState({
    Name:'',email:'',subject:'',message:''
})

let values,names
const data =(e)=>{
    values =e.target.value;
    names=e.target.name
    setUser({...user,[names]:values})
}

const send = async (e)=>{
    const {Name, email,subject,message}=user
    e.preventDefault()
    const option = {
        method:'POST',
        headers:{
            'Contant-Type': 'aplication/json'
        },
        body: JSON.stringify({
            Name, email,subject,message
        })
    }
    const send = await fetch('https://react-ecommerce-contact-197bd-default-rtdb.firebaseio.com/Message.json',option)

    if(send){
        alert("Message sent")
    }
    else{
        alert("not send");
    }
}
  return (
   <>
   <div className='contact'>
    <div className='container'>
        <div className='form'>
            <h2># contact us</h2>
            <form action="" method="POST">
                <div className='box'>
                    <div className='label'>
                        <h4>Name</h4>
                    </div>
                    <div className='input'>
                        <input type="text" placeholder='Name' value={user.Name} name='Name' onChange={data}/>
                    </div>
                </div>

                <div className='box'>
                    <div className='label'>
                        <h4>E-mail</h4>
                    </div>
                    <div className='input'>
                        <input type="email" placeholder='E-mail' value={user.email} name='email' onChange={data}/>
                    </div>
                </div>

                <div className='box'>
                    <div className='label'>
                        <h4>Subject</h4>
                    </div>
                    <div className='input'>
                        <input type="text" placeholder='Subject' value={user.subject} name='subject' onChange={data}/>
                    </div>
                </div>

                <div className='box'>
                    <div className='label'>
                        <h4>Message</h4>
                    </div>
                    <div className='input'>
                       <textarea name="message" placeholder='message' value={user.message} onChange={data} ></textarea>
                    </div>
                </div>
                <button type='submit' onClick={send}>Send</button>
            </form>
        </div>
    </div>
   </div>
   </>
  )
}

export default Contact
