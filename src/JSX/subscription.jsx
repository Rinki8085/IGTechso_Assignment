import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import '../CSS/subscription.css';

function Subscription(){
   const ref = useRef();

   const sendEmail = (e)=>{
      e.preventDefault();
      emailjs.sendForm(
         process.env.REACT_APP_SERVICE_ID,
         process.env.REACT_APP_TEMPLATE_ID,
         ref.current,
         process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
         (res)=>{
            alert("message sent successfully");
            console.log(res.text);
         },
         (err)=>{
            console.log(err.text)
         }
      )
   }

   return(
      <div className='subscribe'>
         <div>
            
         </div>
         <div className='news_letter'>
            <p>SUBSCRIBE</p>
            <p>to out news letter</p>
            <div className='form'>
              <form ref={ref} onSubmit={sendEmail}> 
               <div>
                  <input type='text' placeholder='Name' name='user_name' className='min_height'/>
               </div>
               <div>
                  <input type='email' placeholder='Email' name='user_email' className='min_height'/>
               </div>
               <div>
                  <textarea placeholder='message' name='message' className='max_height'/>
               </div>
               <div>
                  <input type='submit' value='SEND MESSAGE' className='min_height'/>
               </div>
              </form>
            </div>
         </div>
      </div>
   )
}

export default Subscription;