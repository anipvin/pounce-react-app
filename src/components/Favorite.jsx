import React from 'react'
import styles, { layout } from "../style"
import { favouriteWork } from "../assets"

const Favorite = ({pounces}) =>  {

  //console.log(pounces);  
  
  return (
  <section id="intro" className={layout.section}>
  <div className={`${layout.sectionInfo} z-[100]`}>
     <h2 className={`${styles.heading2}`}>OUR</h2>
      <img src={favouriteWork} alt="discount" className="w-[450px] h-[61px]" />   

        {pounces.data.map((pounce) => 

          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{pounce.attributes.workText}</p>

        )}
  </div>
</section>
)
}

export default Favorite