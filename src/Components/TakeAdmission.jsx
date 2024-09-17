import React from 'react'
import ExploreBtn from './ExploreBtn'

const TakeAdmission = () => {
  return (
   <>
   <div>
   <h1 className='text-4xl mt-5 text-center'><b>Take Admission Now</b></h1>
   <div className='md:grid grid-cols-12 mt-10'>
    <div className='col-span-5 mt-8 text-2xl h-96 px-10'>
    Fill the following form to get one on one free consultation for 
    choosing right course for you
    <div className='mt-10'><ExploreBtn/></div>
    </div>
    <div className='col-span-7  text-2xl '>
        <form action="">
            Your Name:<br/>
            <input type="text" required style={{width:'600px',height:'50px', border:'0.5px solid gray'}}/><br/><br/>
            Your Email:<br/>
            <input type="text"  style={{width:'600px',height:'50px', border:'0.5px solid gray,'}}/><br/><br/>
            Your Phone Number:<br/>
            <input type="text"style={{width:'600px',height:'50px', border:'0.5px solid gray,'}} /><br/><br/>
            <button onClick={
              alert("submitted successfuly")}
            style={{width:'600px',height:'50px', backgroundColor:'blue',color:'white'}} className='rounded-md hover:bg-green-600'>Submit</button>
        </form>

    </div>
   </div>
   </div>
   </>
  )
}

export default TakeAdmission