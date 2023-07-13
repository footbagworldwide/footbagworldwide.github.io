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

function ExternalVideo(props) {
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

function InternalVideo(props) {
  let sources;
  if(props.sources) {
    sources = props.sources;
  } else {
    sources = [props.src];
  }

  const alt = props.alt;

  return (
    <video width="100%" loop={true} autoPlay="autoplay" muted playsInline>
      {
        sources.map(src => {
          let videoType = src.substr(src.lastIndexOf('.') + 1);
          if(videoType === 'ogv') {
            videoType = 'ogg';
          }

          return (
            <source src={src} type={`video/${videoType}`} key={`video-source_${src}`} />
          );
        })
      }
      <p>{alt}</p>
    </video>
  );
}

function Video(props) {
  const internal = props.internal ? true : false;

  if(internal) {
    return InternalVideo(props);
  } else {
    return ExternalVideo(props);
  }
}

export { Video, VideoType, getExternalVideoLink };
