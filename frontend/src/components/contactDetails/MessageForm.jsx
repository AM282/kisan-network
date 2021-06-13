import React from 'react';
import { useParams } from 'react-router-dom';
import getRandomNumber from '../../services/generateRandomNumber';
import { Link } from 'react-router-dom';

const MessageForm = () => {
    const message={
        otp:getRandomNumber(6)
    }
    const {id}=useParams();
    const submit = e => {
        e.preventDefault()
        fetch(`http://localhost:3030/contact/${id}/compose`, {
          method: 'POST',
          body: JSON.stringify(message),
          headers: { 'Content-Type': 'application/json'},
        })
        .then((res)=>{
            if(res.status===201)
                console.log("Send Succesfully");
            else if(res.status===400)
                console.log("Bad Request is sent");
            else if(res.status===500)
                console.log("Server is down");
            
        })
    }
    return (
                <div class="box">
                <form onSubmit={submit} className='form'>
                    <div className='form-group'>
                        <input className="form-control"
                            type="text"
                            name="message"
                            readOnly={true}
                            value={`Hi your otp is : ${message.otp}`}
                        />
                    </div>
                    <div style={{marginTop:"20px"}}>
                         <button style={{width:"100%"}} className="btn btn-dark ">Send Message</button>
 
                    </div>
                        
                </form>
                </div>
    );
}

export default MessageForm;
