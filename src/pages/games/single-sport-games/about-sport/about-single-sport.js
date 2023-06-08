import './about-single-sport.css';

function AboutSingleSport(props) {
  const singleSportGame = props.singleSportGame;
  
  return (
    <div className="footbag-game-section page-subsection footbag-game-section-with-background">
      <h2 className="footbag-game-section-header">WHAT IS {singleSportGame.title}?</h2>
      <div className="single-sport-about-content-container">
        <div className="single-sport-about-gif"><img src={singleSportGame.gif} alt={`Gif of ${singleSportGame.title}`} /></div>
        <div className="single-sport-about-description">{singleSportGame.description.long_html}</div>
      </div>
    </div>
  );
}

export default AboutSingleSport;
