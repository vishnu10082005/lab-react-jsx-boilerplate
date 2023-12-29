import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here

  render (){
    let image_arr=this.imageData()
    return (
      <div>
        <h1>Kalvium Gallery</h1>
        <h1>Class Componentcd </h1>
       {/* <div className='parent'>
         <img src={image_arr[0].img} className='image'/>
         <img src={image_arr[0].img} className='image'/>
         <img src={image_arr[0].img} className='image'/>
         <img src={image_arr[0].img} className='image'/>
       </div> */}
       <div className='parent'>
       {
         image_arr.map((elem,i)=>{
           return(
             <img key={i} className='image' src={elem.img}/>
           )
         })
       }
   
       </div>
      </div>
     )
  }
}