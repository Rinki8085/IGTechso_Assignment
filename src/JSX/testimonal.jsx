import React from 'react';
import Carousel from 'react-elastic-carousel';
import '../CSS/testimonal.css';

const data = [
   {
      "id":1,
      "name":'Saurabh',
      "url":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhzm_6nI945XfzqETL7Korp8F08B6A-2tog&usqp=CAU',
      "details":"Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using."
   },
   {
      "id":2,
      "name":'Janhvi',
      "url":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0pb0zfc2oXIYEinBj5SCEKReMHgfcrycRg&usqp=CAU',
      "details":"Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using."
   },
   {
      "id":3,
      "name":'Mayank',
      "url":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhzm_6nI945XfzqETL7Korp8F08B6A-2tog&usqp=CAU',
      "details":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0pb0zfc2oXIYEinBj5SCEKReMHgfcrycRg&usqp=CAU"
   },
   {
      "id":4,
      "name":'prashant bhtt',
      "url":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0pb0zfc2oXIYEinBj5SCEKReMHgfcrycRg&usqp=CAU',
      "details":"Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using."
   }
]

function Testimonals(){

   return(
      <div className='testimonal'>
         <div className='testimonal_user'>
            <p>WHAT</p>
            <p>users think</p>
         </div>
         <div>
            <Carousel>
            {/* <div className='testimonal_slider'> */}
               {data.map((item)=>
               <div className='testimonal_slider' key={item.id}>
                  <div>
                  <div style={{textAlign:'center'}}><img className='img' src={item.url} alt="dummy_image"/></div>
                  <div style={{textAlign:'center'}}>{item.name}</div>
                  <div style={{textAlign:'justify'}}>{item.details}</div>
               </div>
               <div>
                  <div style={{textAlign:'center'}}><img className='img' src={item.url} alt="dummy_image"/></div>
                  <div style={{textAlign:'center'}}>{item.name}</div>
                  <div style={{textAlign:'justify'}}>{item.details}</div>
               </div>
               <div>
                  <div style={{textAlign:'center'}}><img className='img' src={item.url} alt="dummy_image"/></div>
                  <div style={{textAlign:'center'}}>{item.name}</div>
                  <div style={{textAlign:'justify'}}>{item.details}</div>
               </div>
               </div>
               )}       
            </Carousel>
         </div>
      </div>
   )
}

export default Testimonals;