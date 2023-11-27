import styles from "../style"
import { scrollDown } from "../assets"

const Scroll = () => (
    <div className='w-[140px] h-[140px]'>
      <div>
          <img src={scrollDown} alt="Scroll" className="w-[40px] h-[40px] ml-2"/>
      </div>
      <p className="font-poppins font-thin text-[10px]">
            <span className="text-white">Scroll Down</span>
      </p>
    </div>
  )

export default Scroll