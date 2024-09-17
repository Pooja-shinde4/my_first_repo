import React from 'react'
import Vedioimg from './vedioimg.jpg'
import star from './star5.jpg'
import r from './R.png'

const Cources = () => {
  return (
    <>
    <h1 className='text-4xl mt-5 text-center'><b>Our Cources</b></h1>
    
    <div className=' p-10'>
      <div className="h-110  w-80 border-solid border-2 border-light-blue-100">
     <img src={Vedioimg} alt="" style={{height:'200px',width:'320px'}} />
    <div className=' p-5'>
      <div className='md:flex  space-x-2'>
      <img src={star} alt="" style={{height:'25px',width:'25px'}}/>
      <img src={star} alt="" style={{height:'25px',width:'25px'}}/>
      <img src={star} alt="" style={{height:'25px',width:'25px'}}/>
      <img src={star} alt="" style={{height:'25px',width:'25px'}}/>
      <img src={star} alt="" style={{height:'25px',width:'25px'}}/></div>
      
     <a href="" className='text-2xl mt-5'>Cpp for beginers</a><br/>
     <div className="text-xl mt-5 ">
     <button className='hover:bg-blue-900' style={{borderRadius:'100%', width:'50px',height:'50px',backgroundColor:'blue',color:'white'}}>
      A</button>
      By <a href="" className='hover:text-blue-900' style={{color:'blue'}}>admin</a></div>
<div className="md:flex">
      <img src={r}  alt="" style={{height:'17px',width:'23px',marginTop:'3px'}}/> 499.00  </div> 
      <span className='flex justify-end'>30% Booked</span>
<div className='bg-slate-500 mt-3 hover:bg-slate-700'><button style={{color:'white',height:'40px',width:'275px'}}>Add to cart</button></div>
</div>
    
     </div>
    </div>
    </>
  )
}

export default Cources