import './single-sport-game-page.css';

import FootbagGameHeader from '../header/footbag-game-header';
import AboutSingleSport from './about-sport/about-single-sport';
import HowToPlaySingleSport from './how-to-play/how-to-play-single-sport';
import SingleSportCompetition from './competition/single-sport-competition';

function SingleSportGamePage(props) {
  const singleSportGame = props.singleSportGame;
  const headerData = props.headerData;

  return (
    <div className='single-sport-page'>
      <FootbagGameHeader headerData={headerData}>
        <img className="footbag-game-icon" src={singleSportGame.icon_withBackground} />
      </FootbagGameHeader>
      <AboutSingleSport singleSportGame={singleSportGame} />
      <HowToPlaySingleSport singleSportGame={singleSportGame} />
      <SingleSportCompetition singleSportGame={singleSportGame} />
    </div>
  );
}

export default SingleSportGamePage;
