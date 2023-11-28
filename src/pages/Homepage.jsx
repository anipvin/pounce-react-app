import React from 'react'
import styles from '../style'
import { Navbar, Hero, Intro, Favorite, Work, Service, Testimonials, CTA, Footer } from '../components';

const Homepage = ({pounces}) => {

 //console.log(pounces)

  return (
    <div className='bg-violet-900 w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.navWidth}`}>
        <Navbar />
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Intro pounces={pounces}/>
          <Favorite pounces={pounces}/>
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.fullWidth}`}>
          <Work pounces={pounces}/>
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.halfWidth}`}>
          <Service />
        </div>
      </div>
      <div className={`bg-gradient-to-b from-testiFirst via-testiVia to-testiLast ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Testimonials pounces={pounces} />
          <CTA />
        </div>
      </div>
      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Homepage