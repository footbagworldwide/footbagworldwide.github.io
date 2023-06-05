import './hero-section.css';
import { Video, VideoType } from "../../../../components/video/video";
import { useTouchDisplay } from "../../../../hooks/display-hook";

function HeroSectionMobile() {
  // auto-play videos are not supported on a mobile device
  
  return (
    <div>
      <img className="hero-gif" src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif" alt="Gif of footbag players" />
    </div>
  );
}

function HeroSectionDesktop() {
  const video = {
    type: VideoType.Youtube,
    // worlds 2022
    id: 'SzroZ78NKQs',
    viewOnly: true
  };

  return (
    <div className="hero-video-container">
      <Video video={video} className="hero-video" />
    </div>
	);
}

function HeroSection() {
	return (
    <>
      { useTouchDisplay() ? <HeroSectionMobile /> : <HeroSectionDesktop /> }
    </>
	);
}

export default HeroSection;
