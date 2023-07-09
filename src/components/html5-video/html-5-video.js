function Html5Video(props) {
  const src = props.src;
  const alt = props.alt;

  return (
    <video width="100%" loop={true} autoPlay="autoplay" muted>
      <source src={src} type="video/webm"></source>
      <p>{alt}</p>
    </video>
  );
}

export default Html5Video;
