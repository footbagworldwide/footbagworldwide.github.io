import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './hero-section.css';
import { videos } from "./hero-data";
import { Video } from "../../../../components/video/video";
import { useTouchDisplay } from "../../../../hooks/display-hook";

function HeroSectionMobile() {
  // auto-play videos are not supported on a mobile device
  
  return (
    <div>
      <img className="hero-gif" src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif" alt="Gif of footbag players" />
    </div>
  );
}

function HeroSectionDesktopMultiVid() {
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

function HeroSectionDesktopSingleVid() {
  const video = videos[0];

  return (
    <div className="hero-video-container">
      <Video video={video} className={video.className} />
    </div>
	);
}

function HeroSectionDesktop() {
  const useMultiVid = false;

  if(useMultiVid) {
    return <HeroSectionDesktopMultiVid />;
  } else {
    return <HeroSectionDesktopSingleVid />;
  }
}

function HeroSection() {
	return (
    <>
      { useTouchDisplay() ? <HeroSectionMobile /> : <HeroSectionDesktop /> }
    </>
	);
}

export default HeroSection;
