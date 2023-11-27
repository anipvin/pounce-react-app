import styles, { layout } from "../style"
import { favouriteWork } from "../assets"

const Favorite = () =>  (
  <section id="intro" className={layout.section}>
  <div className={`${layout.sectionInfo} z-[100]`}>
     <h2 className={`${styles.heading2}`}>OUR</h2>
      <img src={favouriteWork} alt="discount" className="w-[450px] h-[61px]" />       
     <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
     We could point out the hard work and creativity that went into each of these projects. But we’d rather let the work speak for itself.
       </p>
  </div>
</section>
)


export default Favorite