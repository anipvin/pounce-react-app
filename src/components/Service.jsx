import styles, { layout } from "../style"
import { ourServices, our, pounceTitle } from "../assets"
import Button from './Button'


const Service = () => {
  return (
    <section id="intro" className={layout.section}>
    <div className={`${layout.sectionInfo} z-[100]`}>
      <div className="flex">
        <img src={our} alt="discount" className="w-[100px] h-[65px]" />
       <h2 className={styles.heading2}>
         MARKETING
         </h2>
      </div>         
       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         We are not just creatives. We are conduits. We digest our networks, our cultures, our experiences. We distil them. And we produce potent, creative solutions for your business that encompass everything we are. 
         </p>
         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         Every job we take involves some, or all, of the following: <strong>Discover, Deliver, and Drive.</strong>
         </p>
         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         Put simply, we take the time to <strong>discover </strong> your current state and create a <strong>strategic roadmap</strong> for you. We can <strong>deliver</strong> any creative concepts and develop any technical solutions needed, broadly categorised into creative, marketing, and technology. Once all the moving parts have been put together, we like to stick around and take it for a <strong>drive</strong>. That is, we like to make sure it’s all working smoothly, adjust the course if needed, and optimise some more.
         </p>
         <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10`}>
         Engage us for one option or all three, the choice is yours.
         </p>
         <Button styles={`mt-10`}/>
    </div>
    <div className={layout.sectionImgReverse}>
      <img src={ourServices} alt="card" className="w-[460px] h-[472px] z-[5]"/>
    </div>
  </section>
  )
}

export default Service