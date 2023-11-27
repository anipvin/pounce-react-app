import React from 'react'
import styles, { layout } from "../style"
import { banner, girlBgrTransparent } from "../assets";
import Scroll from './Scroll'

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-[100]`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[60px] leading-[60px]">
            UNLEASH <br className="sm:block hidden" />{" "}
            <span>YOUR</span>{" "}
          </h1>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[60px] leading-[60px] w-full pb-20">
          MARKETING
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
            <Scroll />
          </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={girlBgrTransparent} alt="billing" className="w-[97%] h-[98%] relative z-[5]" />
      </div>

      <div className=' absolute top-0 -left-0 w-full z-5 flex justify-end '>
          <img src={banner} alt="Banner"/>
      </div>
    </section>
  )

export default Hero