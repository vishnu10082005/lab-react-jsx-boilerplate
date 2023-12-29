import React from 'react'
import elephant from "../images/elephant.jpeg"

const imageData = ()=>{
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

const Functional = () => {
    let image_arr = imageData()

    return (
      <div>
        <h1>Kalvium Gallery</h1>
        <h1>Functional component</h1>
        {/* <div className="parent_div">
          <img src={image_arr[0].img} alt=""/>
          <img src={image_arr[1].img} alt=""/>
          <img src={image_arr[2].img} alt=""/>
          <img src={image_arr[3].img} alt=""/>
        </div> */}
  
        <div className='Main_div'>{
            image_arr.map(elem => {
              return(
                <img src={elem.img} />
              )
            })
  
          }  
  
  
        </div>
      
      </div>
    )
}

export default Functional
