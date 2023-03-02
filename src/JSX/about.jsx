import React from 'react';
import Carousel from 'react-elastic-carousel';
import '../CSS/about.css';

function About(){

   const data = [
      {"id":1, "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhzm_6nI945XfzqETL7Korp8F08B6A-2tog&usqp=CAU"},
      {"id":2, "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4q7XL6D9QXtqkjEVWp8tV6ifN_N8qhfcgw&usqp=CAU"},
      {"id":3, "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ390lV9eVk1Y7ph7Hb4yYRD8HY02DW520ooA&usqp=CAU"},
      {"id":4, "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0pb0zfc2oXIYEinBj5SCEKReMHgfcrycRg&usqp=CAU"}
   ]

   return (
      <div className='about_section'>
         <div>
            <div className='box_1'><span>UI</span><span style={{color:'purple'}}> .</span></div>
            <div className='text'>
               <div>BEGINNER's</div>
               <div>
                  <p>Become a</p>
                  <p>Pro-Designer</p>
               </div>
            </div>
         </div>
         <div className='slider'>
            <Carousel>
               {data.map((item)=>
                  <img src={item.image} alt={"image_data"} width='80%' height='300px' />
               )}
            </Carousel>
         </div>
         <div>
            <div className='guide'>
               <p>
                  Start guide for beginner desingers
               </p>
               <p>
                  lorem ippsum poefoe 
                  loremcvb ippsum poefoe lorem ippsume lorem ippsum poe lorem isum dsgdgs
               </p>
               <div >
                  <button className='blueviolet bttn'>Let's start</button>
                  <button className='transparent bttn'>Read More</button>
               </div>
               <div className='edition'>
                  <p>edition</p>
                  <p>2022</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About;