import React from 'react'
import index from './index.css'
import logo from '../../assets/logo.png'
import { RxCross2 } from "react-icons/rx";

export const Drawer = () => {
    const closedrawer=()=>{
        document.querySelector('.Drawer').style.transform='translateY(-600px)';
        ['c1', 'c2', 'c3', 'c4', 'c5'].forEach(className => {
            document.querySelector(`.${className}`).classList.remove('animated');
        });
    }
  return (
   <>
   <div className='Drawer'>
    <div className='small-panel'>
        <div className='logo-plus-cross'>
            <img src={logo} className='logo' style={{cursor:'pointer'}}/>
            <RxCross2 onClick={closedrawer} style={{color:'white',position:'absolute',right:'20px',fontSize:'36px',cursor:'pointer'}}/>
        </div>
        
    </div>
    <div className='options-drawer'>
            <div className='option-list-drawer c1'>Home</div>
            <div className='partition-drawer'></div>
            <div className='option-list-drawer c2'>About Us</div>
            <div className='partition-drawer'></div>
            <div className='option-list-drawer c3'>Courses</div>
            <div className='partition-drawer'></div>
            <div className='option-list-drawer c4'>Mentors</div>
            <div className='partition-drawer'></div>
            <div className='option-list-drawer ctus c5'>Contact Us</div>
        </div>
   </div>
   </>
  )
}