import { main } from "../../public/img/index";
import HomeCarousel from "../components/HomeCarousel";
import HomeHotCarousel from "../components/HomeHotCarousel";
import { carouselData } from "../constants/carouselData.js";
import { splatter } from "../../public/img/index";
import kids from "../../public/img/landing-page/kids.png";
import toystory from "../../public/img/landing-page/toy-story.png";
import wave1 from "../../public/img/landing-page/Intersect.png";
import wave2 from "../../public/img/landing-page/Intersect (1).png";
import wave3 from "../../public/img/landing-page/Rectangle 10.png";
import circle from "../../public/img/landing-page/circle.png";
import hiasan from "../../public/img/landing-page/Doodle stars.png";
const Home = () => {
  return (
    <div>
      <div className="banner">
        <img className="kids-img" src={kids} />
        <div className="banner-text">
          <h2>For kids, by kids</h2>
          <p> Welcome to 4Kiddos, where playtime never ends! </p>
          <p>
            We offer a wide range of toys and games that are perfect for kids of
            all ages.
          </p>
          <p> Shop with us today and discover the joy of play!</p>
        </div>
        <img className="toy-story-img" src={toystory} alt="toystory" />
      </div>

      <div className="wave-img">
        <img className="wave1" src={wave1} />
      </div>

      <div className="hottest-products">
        <div className="hottest-products-text">
          <h2>See some of our hottest products</h2>
          <img className="circle" src={circle} />
          <p>The hottest toys that every kids would love to buy!</p>
        </div>
        <div className="hottest-products-carousel">
          <HomeHotCarousel data={carouselData[1]} />
        </div>
      </div>

      <div className="wave-img">
        <img className="wave2" src={wave2} />
        <img className="ways-text-bg" src={wave3} />
      </div>

      <div className="ways-to-shop">
        <div className="ways-text">
          <h2>Shop as you like</h2>
        </div>
        <div className="based-on-age text">
          <img src={hiasan} className="hiasan" />
          <span>Based on age</span>
          <img src={hiasan} className="hiasan" />
        </div>
        <HomeCarousel data={carouselData[0]} color="blue" />
        <div style={{ marginTop: "20px" }}>
          <div className="based-on-category text">
            <img src={hiasan} className="hiasan" />
            <span>Based on category</span>
            <img src={hiasan} className="hiasan" />
          </div>
          <HomeCarousel data={carouselData[1]} color="orange" />
        </div>
        <div style={{ marginTop: "40px" }}>
          <div className="based-on-brand text">
            <img src={hiasan} className="hiasan" />
            <span>Based on brand</span>
            <img src={hiasan} className="hiasan" />
          </div>
          <HomeCarousel data={carouselData[2]} color="green" />
        </div>
      </div>
    </div>
  );
};

export default Home;
