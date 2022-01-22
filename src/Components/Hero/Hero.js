import './Hero.css';
import { BannerMain, Profile } from '../assets';

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='hero-banner'>
          <div>
            <figure>
              <img src={BannerMain} alt="Banner brand" />
            </figure>
          </div>
        </div>
        <div className='hero-profile'>
          <div>
            <figure>
              <img src={Profile} alt="Profile brand" />
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;