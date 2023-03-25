import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './hero-section.css';
import { VideoType, videos } from "./hero-data";

function getVideoLink(video) {
  switch(video.type) {
    case VideoType.Youtube: {
      return `https://www.youtube.com/embed/` +
        `${video.id}` +
        `?controls=0&rel=0&playsinline=1&enablejsapi=1&widgetid=1&autoplay=1&mute=1&loop=1&disablekb=1` +
        `&playlist=${video.id}` +
        `${video.start ? '&start=' + video.start : ''}`
    }
    case VideoType.Vimeo: {
      return `https://player.vimeo.com/video/${video.id}?autoplay=1&loop=1&autopause=0`
    }
  }
}

function HeroSection() {
	return (
    <div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
      >
        { videos.map((video, index) => 
        <div className="video-container" key={`hero-video_${index}`}>
          <iframe
            className={video.class ? video.class : 'hero-video_default'}
            src={getVideoLink(video)}
            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        )}
      </Carousel>
    </div>		
	);
}

export default HeroSection;
