import React from 'react'
import index from './index.css'

export const Faqs = () => {
  const display=()=>{
    if(!document.querySelector('.a-1').classList[1]){
    document.querySelector('.a-1').classList.add('active')
  console.log('1')}
  
  else{
    document.querySelector('.a-1').classList.remove('active')
  }}
  return (
    <>
   <div className='faq'>
    <div className='faq-head'>
      <span className='fa'>Frequently Asked<span className='ques' >&nbsp; Question</span></span>
    </div>
    <div className='questions'>
      <div className='Question-1'>
        <div className='q-1' onClick={display}>What will I learn in the course?
        
        </div>
        <div className='a-1'>baby</div>
       
       
      </div>
    </div>
   </div>
    </>
  )
}
