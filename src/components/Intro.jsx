import styles, { layout } from "../style"
import { pounceWomen, pounceTitle } from "../assets"
import Button from './Button'

const Intro = () => (

  <section id="intro" className={layout.section}>
     <div className={`${layout.sectionInfo} z-[100]`}>
          <img src={pounceTitle} alt="discount" className="w-[210px] h-[61px]" />
        <h2 className={styles.heading2}>
          MARKETING
          </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We’re the strategic minds, the creative hearts, and the technological hands that allow your brand to stare down challenges with defiance.
          </p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10`}>
          Step forward with confidence and boldly scale the peaks that had previously been horizons. 
          </p>
          <Button styles={`mt-10`}/>
     </div>
     <div className={layout.sectionImgReverse}>
       <img src={pounceWomen} alt="card" className="w-[540px] h-[559px] z-[5]"/>
     </div>
   </section>
    
)

export default Intro