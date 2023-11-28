import styles, { layout } from "../style"
import { pounceWomen, pounceTitle } from "../assets"
import Button from './Button'

const Intro = ({pounces}) => {
   
  console.log(pounces)
  
  return (

  <section id="intro" className={layout.section}>
    
     <div className={`${layout.sectionInfo} z-[100]`}>
          <img src={pounceTitle} alt="discount" className="w-[210px] h-[61px]" />
        <h2 className={styles.heading2}>
          MARKETING
          </h2>
          {pounces.data.map((pounce) => 
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{pounce.attributes.marketingText1}</p>  
          )}

          {pounces.data.map((pounce) => 
                <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10`}>{pounce.attributes.marketingText1}</p>
          )}
                
          <Button styles={`mt-10`}/>
     </div>
     
     <div className={layout.sectionImgReverse}>
       <img src={pounceWomen} alt="card" className="w-[540px] h-[559px] z-[5]"/>
     </div>
   </section>
    
)}

export default Intro