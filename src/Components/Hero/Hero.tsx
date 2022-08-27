import "./Hero.css";
import { BannerMain, Profile } from "../assets";

const Hero: React.FC = () => {
  console.log("cargue de hero");
  return (
    <header className="hero">
      <div className="hero-banner" tabIndex={0}>
        <div>
          <figure>
            <img
              src={BannerMain}
              alt={"Banner" + BannerMain}
              aria-label={"Banner" + BannerMain}
            />
          </figure>
        </div>
      </div>
      <div className="hero-profile" tabIndex={0}>
        <div>
          <figure>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1648/1648338.png"
              alt={"Profile" + Profile}
              aria-label={"Profile" + Profile}
            />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Hero;
