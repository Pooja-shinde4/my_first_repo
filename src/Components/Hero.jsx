import React from 'react'
import star from './star.jpg'
import student from './students.jpg'
import ExploreBtn from '../Components/ExploreBtn'

const Hero = () => {
    const imgs={
        height:100,
        width:200,
         
      
    }
    const std={
        height:400,
        width:400
    }
  return (
   <>
   <div className='md:grid grid-cols-12 h-90'>
    <div className='col-span-7  p-14'>
        <b className='text-5xl'>Hey! Welcome to <br/>Codeseed</b>
        <div className='text-gray-600 mt-10'><h4>Please click the button below to access our latest selection of 
            <br/>dynamic and popular courses. Explore exciting opportunities for <br/>personal 
            and professional development.</h4></div>
            
            <div className='place-content-center  mt-10'>
                What our students says
                <img src={star} alt="no img" style={imgs}/>

                It was the best decision i've ever made to take admission to codeseed , i've learned a lot of things including web development as well as software engineering fundamentals , must join codeseed.
Shadap Chaudhary


Web Development Student<br/>


                <ExploreBtn/></div>
    </div>
    <div className='col-span-5 mt-10'>
<img src={student} alt="" style={std}/>
    </div>

   </div>
   </>
  )
}

export default Hero