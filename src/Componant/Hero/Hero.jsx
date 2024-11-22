import React from 'react'

import myPic from "../../Assests/Person Pic/pic3.png"
import Style from "./Hero.module.css"
import { Helmet } from 'react-helmet'
import { Slide  } from 'react-awesome-reveal';
import Lottie from "lottie-react";
import developerAnimate from "../../Assests/animation/developer.json"

export  function Hero() {
  return <>
   <Helmet>
        <meta name="Hero" content="This is hero page about me and my cv and links" />
      </Helmet>

      <section className={` mx-auto ${Style.hero} `}>
        <div className="row ">
          <div className={`${Style.heroFlex} align-items-center`}>
          <div className='col-md-8 '>
            <div className="d-flex mt-3 ">
              <img src={myPic} className={`${Style.imgStyle} ms-3 cursor-pointer`} alt="my photo" />
              <i  className="text-primary fa-solid fa-certificate fs-4 align-content-end mb-2 ms-2"></i>
            </div>
            <Slide  direction='left' duration={1000}>
            <div className={`${Style.aboutMe}`}>
            <h1 className=' fw-bolder my-5'>Software, Website, App & Game Developer  </h1>
            <p>🚀 Hi, I'm <span className='px-2 py-1 rounded-4 cursor-pointer'>Gideon Bett</span>🚀 —passionate about coding and innovation.</p>
                🌱 Always learning and growing, embracing new challenges.
                🔥 Turning bugs 🐛 into breakthroughs 💡 and ideas into reality.
                ❤️ Coding isn't just a skill—it's a lifestyle I love.
                🌐 Exploring infinite possibilities in the tech world 🌌.
                💻 Focused on clean, efficient, and impactful code.
                🌟 Striving to create solutions that make a difference ✨.
                🔧 From debugging 🛠️ to deployment 🚢, I'm all in.
          </div>

          <div className={`${Style.socialIcons} mt-5 d-flex justify-content-center`}>
            <a href="https://www.linkedin.com/in/karkibo12/" target="_blank">
            <i className='fa fa-brands fa-linkedin fs-3 me-3 cursor-pointer '></i>
            </a>
            <a href="https://github.com/MinaMedhat86" target="_blank">
            <i className='fa fa-brands fa-github fs-3 me-3 cursor-pointer'></i>
            </a>
            <a href="mailto:minamidhat15@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope fs-3 me-3 cursor-pointer "></i>
            </a>
            <a href="https://www.instagram.com/karkibo/" target="_blank">
            <i className='fa fa-brands  fa-instagram fs-3 me-3 cursor-pointer'></i>
            </a>
            <a href="https://www.facebook.com/mina.medhatrizkallatadross/" target="_blank">
            <i className='fa fa-brands fa-facebook-f fs-3 me-3 cursor-pointer'></i>
            </a>
            <a href="https://iwtsp.com/201125994899" target="_blank">
            <i className='fa fa-brands fa-whatsapp fs-3 me-3 cursor-pointer'></i>
            </a>
            <a href="https://www.tiktok.com/@karkibo" target="_blank"> 
            <i className='fa fa-brands fa-tiktok fs-3 me-3 cursor-pointer d-flex '></i>
            </a>
            
            
            
            
           
            
          </div>
            </Slide>
        
          </div>
          <div className={`col-md-4 ${Style.developerAnimate} justify-content-center`}>
          <Lottie animationData={developerAnimate}   />
          </div> 
          </div>

        </div>
      </section>
  </>
}
