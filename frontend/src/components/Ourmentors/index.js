import React from 'react'
import index from './index.css'
import vr from '../../assets/vr.png'
import In from '../../assets/in.png'
import om from '../../assets/omm.png'


export const Ourmentors = () => {
  return (
    <>
     <img className='om' src={om}/>
    <div className='our-mentors'>
        <div className='our-mentors-head'>
            <span className='head-text'>Our Mentors </span>
        </div>
       
        <div className='mentors-flexbox'>
            <div className='mentor-1'>
               
                <div className='mentor-1-about'>
                <img src={vr}/>
                    <div className='mentor-details'>
                    <div className='mentor-1-name'>
                    <span style={{color:'white',fontWeight:'bold'}}>Vanshika</span> Rastogi
                    </div>
                    <div className='mentor-about'>
                    Trading in the markets since 5+ years, I am deeply passionate about trading, and dedicated my career into mastering it. My specialisation is 3 crucial areas Price action, risk management and psychology which are the essential for successful trading.My mantra is to treat trading like a business. This approach prevents excessive emotional highs from profits and demoralising lows from losses. My goal is to guide all my students towards achieving financial freedom through informed trading decisions.
                    </div>
                    </div>
                </div>
                <div className='triangle-1'></div>
            </div>
            
           
            <div className='mentor-2'>
               
                <div className='mentor-2-about'>
               
                    <div className='mentor-details'>
                    <div className='mentor-2-name'>
                    <span style={{color:'white',fontWeight:'bold'}}>Ishanbir</span> Narula
                    </div>
                    <div className='mentor-about'>
                    I’ve been trading & investing in the markets for the past 8 years. Initially, just like everyone I was also extremely impatient & had no impulse control so It took me a while to understand how it all works. I specialize majorly in trading with strategy, not emotions. I use advanced technical strategies & trade on fundamentals which all came with patience & time given to it! I strongly believe in crypto as well & have been an early age investor! My aim is to make all of my students financially independent & aware, and help them get out of 9-5’s!
                    </div>
                    </div>
                    <img src={In}/>
                </div>
                 <div className='triangle-2'></div>
            </div>
           
        </div>

    </div>
    </>
  )
}
