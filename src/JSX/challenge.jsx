import React from 'react';
import {BsArrowDown} from 'react-icons/bs';
import Popup from 'reactjs-popup';
import '../CSS/challenge.css';

function Challenge(){
   const scrollDown = ()=>{
      // window.scroll({
      //    top:200,
      //    left:0,
      //    behaviour:'smooth'
      // })
      document.querySelector('.video').scrollIntoView({
         behaviour:'smooth'
      });
   }

   return(
      <div>
         <div className='challenge'>
         <div className='skills'>
            <div>Discover your skills</div>
            <div>
               <p style={{fontWeight:"bold"}}>Accept</p>
               <p>New</p>
               <p style={{fontWeight:"bold"}}>Challenges</p>
            </div>
            <div>Discover your skills</div>
         </div>
         </div>
         <div style={{textAlign:'center'}}>
            <button className='arrow_button' onClick={()=>scrollDown()}><BsArrowDown/></button>
         </div>
         <div style={{textAlign:'center',padding:'40px 20px 40px 20px'}} className='video'>
            <div><iframe width="560" height="315" src="https://www.youtube.com/embed/yAoLSRbwxL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
            <Popup trigger={<button className='start'>Start</button>} contentStyle={{ width: '55%' }} modal nested position='center'>
               {close =>(
               <div className='content'>
                  <div><iframe width="100%" height="515" src="https://www.youtube.com/embed/yAoLSRbwxL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
               </div>
               )}
            </Popup>
         </div>
      </div>
   )
}

export default Challenge;