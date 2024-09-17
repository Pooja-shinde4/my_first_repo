import React from 'react'
import cs from './cs.jpg' 

const Navbar = () => {
    const img={
        height:100,
        width:100,
       
    }
    const btn={
      height:50,
      width:200,
      
      
    }
  return (
    <>
     <div className='md:flex p-5 px-16 h-54 justify-between items-center border-light-gray'>
    <img src={cs} alt="No img" style={img}/>
    <ul className='md:flex  justify-between items-center'>
      <li className='space-x-5 text-blue-600 text-xl'>
      <a href="" className='hover:text-blue-900 hover:underline'>Home</a>
      <a href="" className='hover:text-blue-900 hover:underline'>Cources</a>
      <a href=""className='hover:text-blue-900 hover:underline'>Contact Us</a></li>
</ul>

     <button className=' text-blue-800 text-xl rounded-full border-2 h-11 w-44 justify-between items-center hover:bg-blue-600 hover:text-white'>Explore Cources</button>
    
    </div>
    </>
  )
}

export default Navbar