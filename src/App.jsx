import styles from './style'
import { Navbar, Hero, Intro, Favorite, Work, Service, Testimonials, CTA, Footer } from './components';

const App = () =>  (
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
          <Intro />
          <Favorite />
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.workWidth}`}>
          <Work />
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Service />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
);

export default App