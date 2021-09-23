import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Slider = () => {
  return (
    <section className="relative shadow-2xl max-w-screen-3xl mt-5 mx-auto opacity-80">
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/images/slider-1.png" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-2.png" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-3.png" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-4.png" alt="" />
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
