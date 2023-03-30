import './video.css';

const VideoType = {
	Youtube: 1,
	Vimeo: 2
};

function getVideoLink(video) {
  switch(video.type) {
    case VideoType.Youtube: {
      return `https://www.youtube.com/embed/` +
        `${video.id}` +
        `?playlist=${video.id}` +
        `${video.viewOnly ? `&controls=0&rel=0&playsinline=1&enablejsapi=1&widgetid=1&autoplay=1&mute=1&loop=1&disablekb=1` : ''}` +
        `${video.start ? '&start=' + video.start : ''}`
    }
    case VideoType.Vimeo: {
      return `https://player.vimeo.com/video/${video.id}?autoplay=1&loop=1&autopause=0`
    }
  }
}

function Video(props) {
  const video = props.video;
  const className = props.className;

  return (
    <iframe
      className={className}
      src={getVideoLink(video)}
      allow="accelerometer; autoplay; encrypted-media; gyroscope;"
      allowFullScreen
      loading="lazy"
    ></iframe>
  );
}

export { Video, VideoType };