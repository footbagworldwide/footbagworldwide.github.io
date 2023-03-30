import './about-single-sport.css';

function AboutSingleSport(props) {
  const singleSportGame = props.singleSportGame;
  
  return (
    <div className="single-sport-page-section single-sport-about-container single-sport-page-section-with-background">
      <h3 className="single-sport-page-section-title">WHAT IS {singleSportGame.title}?</h3>
      <div className="single-sport-about-content-container">
        <div className="single-sport-about-gif"><img src={singleSportGame.gif} /></div>
        <p className="single-sport-about-description">{singleSportGame.descriptionHtml}</p>
      </div>
    </div>
  );
}

export default AboutSingleSport;
