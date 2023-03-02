import React from 'react';
import {VscMenu} from 'react-icons/vsc';
import '../CSS/header.css';

function Header(){
   return(
      <div className='navbar'>
        <div>Your Logo</div>
        <div>
         <div>Home</div>
         <div>About </div>
         <div>Course</div>
         <div>Blog</div>
        </div>
        <div>
         <div><button className='sign_in'>Sign In</button></div>
         <div><VscMenu/></div>
        </div>
      </div>
   )
}

export default Header;