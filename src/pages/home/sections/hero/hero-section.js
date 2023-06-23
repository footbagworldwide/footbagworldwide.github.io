import './hero-section.css';
import { Video, VideoType } from "../../../../components/video/video";
import { useTouchDisplay } from "../../../../hooks/display-hook";
import communityPhoto from '../../../../assets/images/ifpa-community.jpg';

function HeroSectionMobile() {
  // auto-play videos are not supported on a mobile device
  
  return (
    <div>
      <img className="hero-gif" src={communityPhoto} alt="Picture of Worlds 2016 attendees" />
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
