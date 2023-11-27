import styles from "../style"
import { whitelogo, facebook, instagram, linkedIn } from "../assets";
import Submit from './Submit'
import Button from "./Button";

const Footer = () => (
    
      <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className="w-[550px] flex py-12 items-center flex-col justify-start mr-10">
                  <img src={whitelogo} alt="Pounce" className="w-[123px] h-[25px] "/>
                  <p>sdfsdf</p>
                </div>

            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 py-8 text-white'>
            <div>
                <h2 className='font-bold py-2'>Company</h2>
                <ol>
                    <li className='py-1'>Service</li>
                    <li className='py-1'>About Us</li>
                    <li className='py-1'>Our Work</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Contact Us</li> 
                </ol>
            </div>
            <div className='flex flex-col'>
                <h6 className='font-bold py-2'>Stalk Us</h6>
                <div className='flex  sm:w-[300px] pt-4 text-2xl gap-2'>
                    <img className=' w-[32px] object-cover' src={facebook} />
                    <img className=' w-[32px] object-cover' src={instagram} />
                    <img className=' w-[32px] object-cover' src={linkedIn} />
                </div>
            </div>

            <div className='col-span-2 pt-2 md:pt-2'>
                <p className='font-bold'>Stay in touch</p>
                <p className='py-4'>Get actionable tips, easy explanations, and cutting-edge creativity in your inbox. Your time is valuable, so is ours. We promise only to reach out when we’ve got something useful to say.
                </p>
                <form>
                    <div className="flex flex-col sm:flex-row">
                      <input className='w-[300px] p-2 mr-4 border border-slate-300 bg-black mb-10' type="email" placeholder="Email" />
                        <div>
                          <Submit />
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>  



        </div>               
        
        {/* footer */}
        <div className="w-full flex justify-center items-center md:flex-row flex-col pt-6">
          <p className="font-poppins font-thin text-[12px] leading-[27px] text-white">
            Ⓒ 2019 Pounce Marketing. All Rights Reserved. Privacy Policy
          </p>
        </div>
    </section>


  )


export default Footer