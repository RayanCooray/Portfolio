import React from 'react'
import('./Hero.css');


const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
                Im Rayan Cooray.
                Passionate Full Stack Developer | Transforming Ideas into
                seamless and visually Stunning Web Soultions
            </p>
        </div>

        <div className='hero-img'>   
            <div>
            <div className='tech-icon'>
                <img src="./assets/images/icons8-react-native-96.png" alt="" />
                </div>
                <img src="./assets/images/img.jpg" width={320} alt="" />
                </div>

                <div>
                    <div className='tech-icon'>
                      <img src="././assets/images/icons8-html-5-96.png" alt="" />
                    </div>
                    <div className='tech-icon'>
                      <img src="././assets/images/icons8-css-96.png" alt="" />
                    </div>
                    <div className='tech-icon'>
                      <img src="././assets/images/icons8-js-96.png" alt="" />
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Hero
