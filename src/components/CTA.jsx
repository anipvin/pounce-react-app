import React from 'react'
import styles, {layout} from "../style"
import {readyBgr3, rightArrow, leftArrow, darkWhite} from '../assets'
import ButtonCTA from './ButtonCTA'

const CTA = () => {
  return (
    <section>
    <div class="w-full">
            <div class="flex flex-wrap justify-center relative">
                <img src={readyBgr3} className='w-[600px]' alt='Were Ready. Are You?'/>   
                
                <div className="absolute bottom-10 ss:flex hidden md:mr-4 mr-0 justify-center">
                    <ButtonCTA styles={``}/>
                </div>      
            </div>  
    </div>
  </section> 
  )
}

export default CTA