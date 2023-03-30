import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './hero-section.css';
import { videos } from "./hero-data";
import { Video } from "../../../../components/video/video";

function HeroSection() {
	return (
    <div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
      >
        {
          videos.map((video, index) => 
            <div className="hero-video-container" key={`hero-video_${index}`}>
              <Video video={video} className={video.className} />
            </div>
          )
        }
      </Carousel>
    </div>		
	);
}

export default HeroSection;
