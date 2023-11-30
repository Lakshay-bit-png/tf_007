import React, { useEffect, useState } from 'react'
import index from './index.css'
import logo from '../../assets/logo.png';

export const Navbar = () => {
  const [selected,setSelected]=useState(null);
  useEffect(() => {
    // Perform actions after the component mounts
    const element = document.querySelector('.option1');
    element.classList.add('selected')
    setSelected(element);
    
  }, []); 
  const changecolor=(event)=>{
    selected.classList.remove('selected')
    if(event.target.classList[0]!='contact-pc'){
    event.target.classList.add('selected')}
    
    setSelected(event.target)



  
  }
  const opendrawer=()=>{
    document.querySelector('.Drawer').style.transform='translateY(0px)';
    console.log(0);
    ['c1', 'c2', 'c3', 'c4', 'c5'].forEach(className => {
      document.querySelector(`.${className}`).classList.add('animated');
  });
  }
  return (
   <>
    <div className='Navbar'>
      <div className='Nav-container'>
        <img className='logo' src={logo}/>
        <div className='nav-options'>
          <div onClick={changecolor} className='option1'>Home </div>
          <div onClick={changecolor} className='option2'>About Us</div>
          <div onClick={changecolor} className='option3'>Courses</div>
          <div onClick={changecolor} className='option4'>Mentors</div>
          <div onClick={changecolor} className='contact-pc'>Contact Us</div>
        </div>
        <div className='Hamburger' onClick={opendrawer}>
          <div className='l1'></div>
          <div className='l2'></div>
          <div className='l3'></div>
        </div>
      </div>
        
    </div>
   </>
  )
}