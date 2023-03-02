import React from 'react';
import Header from './JSX/header';
import About from './JSX/about';
import Challenge from './JSX/challenge';
import Testimonals from './JSX/testimonal';
import Subscription from './JSX/subscription';
import './homepage.css'

function Homepage(){
   return(
      <div>
         <Header/>
         <About/>
         <Challenge/>
         <Testimonals/>
         <Subscription/>
      </div>
   )
}

export default Homepage;