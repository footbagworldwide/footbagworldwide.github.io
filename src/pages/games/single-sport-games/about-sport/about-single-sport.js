import './about-single-sport.css';

function AboutSingleSport(props) {
  const singleSportGame = props.singleSportGame;
  
  return (
    <div className="footbag-game-section footbag-game-page-container footbag-game-section-with-background">
      <h3 className="footbag-game-section-header">WHAT IS {singleSportGame.title}?</h3>
      <div className="single-sport-about-content-container">
        <div className="single-sport-about-gif"><img src={singleSportGame.gif} alt={`Gif of ${singleSportGame.title}`} /></div>
        <p className="single-sport-about-description">{singleSportGame.description.long_html}</p>
      </div>
    </div>
  );
}

export default AboutSingleSport;
