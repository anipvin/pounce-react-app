import styles, {layout} from "../style"
import { rightArrow, leftArrow, darkWhite } from "../assets"

const Testimonials = ({pounces}) => {
  return (

    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col w-full`}>
    <div class="w-[700px] text-center">
        <h2 class="mb-12 text-3xl font-bold text-white">TESTIMONIALS</h2>
        <div class="flex flex-wrap justify-center overflow-hidden relative">
              <div class="w-full px-3 lg:w-8/12">  
              {pounces.data.map((pounce) =>             
              <p class="mb-4 text-white font-light">
              {pounce.attributes.testimonial1}
              </p>
              )}
              {pounces.data.map((pounce) =>
              <h5 class="mb-2 text-lg text-white font-medium">{pounce.attributes.testimonial2}</h5>
              )}
              <div className="flex justify-center mt-20">
                <img src={darkWhite} />
              </div>
              </div>
              <div className="absolute w-full justify-between flex">
                <button><img src={leftArrow} /></button>
                <button><img src={rightArrow} /></button>
              </div>
        </div>
    </div>
  </section>    
    
  )
}

export default Testimonials