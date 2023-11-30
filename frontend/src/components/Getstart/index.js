import React, { useEffect, useRef, useState } from "react";
import index from "./index.css";
import { FaPlay } from "react-icons/fa";
import s1 from "../../assets/s11.jpg";
import s2 from "../../assets/s22.jpg";
import s3 from "../../assets/s3.webp";
import vr from "../../assets/vr.png";
import In from "../../assets/in.png";
import logo2 from "../../assets/logo2.png";
import herobg from '../../assets/herobg.jpeg'

export const Getstart = () => {
  useEffect(() => {
    // Add the 'active' class after a slight delay to trigger the animation
    const timeout = setTimeout(() => {
      const flexPC = document.querySelector(".flex-pc");
      if (flexPC) {
        flexPC.classList.add("active");
      }
    }, 10); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []);
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delayTimer = setTimeout(() => {
            const interval = setInterval(() => {
              const increment = Math.ceil(5000 / 250);
              setCount((prevCount) => {
                const newCount = prevCount + increment;
                return newCount >= 5000 ? 5000 : newCount;
              });
            }, 10);

            return () => clearInterval(interval);
          }, 10);

          return () => clearTimeout(delayTimer);
        }
      });
    }, {
      threshold: 0.5, // Adjust this threshold as needed
    });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="hero-section">
        <div ref={countRef} className={`flex-pc fade-in`}>
          <div className="flex-col-1">
            <div className="hero-tagline">
              <div style={{position:'reltive'}}>
                
                <span className="tagline">TRADING </span>
                <span className="tiers">TIERS</span>
              </div>
              <span className="enroll-pc">ENROLL NOW</span>
            </div>
            <div className="welcome">
              Welcome to the dynamic realm of trading and investment mastery at
              Trade Triumph, the premier reality program empowering aspiring
              traders and investors with the ultimate platform to hone their
              skills in the financial markets.
            </div>

            <div className="btn-getstarted">
              <FaPlay />
              <div>Get Started</div>
            </div>
            <div className="happy-users">
              <div className="users-img">
                <img src={s1} />
                <img src={s2} />
                <img src={s3} />
              </div>
              <div className="users-number">
                <div>+{count}</div>
                <div>Happy Users</div>
              </div>
            </div>
          </div>
          <div className="flex-col-2">
            <div className="images-flex-col-2">
              <img src={vr} />
              <img src={logo2} />
              <img src={In} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
