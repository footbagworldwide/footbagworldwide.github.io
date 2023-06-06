const VideoType = {
	Youtube: 1,
	Vimeo: 2
};

function getEmbedVideoLink(video) {
  switch(video.type) {
    case VideoType.Youtube:
    default: {
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

function getExternalVideoLink(video) {
  switch(video.type) {
    case VideoType.Youtube:
      default: {
        return `https://www.youtube.com/watch?v=${video.id}`;
      }
  }
}

function Video(props) {
  const video = props.video;
  const className = props.className;

  const src = getEmbedVideoLink(video);
  const title = `iframe_${src}`;

  return (
    <iframe
      className={className}
      src={src}
      allow="accelerometer; autoplay; encrypted-media; gyroscope;"
      allowFullScreen
      loading="lazy"
      title={title}
    ></iframe>
  );
}

export { Video, VideoType, getExternalVideoLink };
