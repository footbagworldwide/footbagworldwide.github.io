import './single-sport-game-page.css';

import FootbagGameHeader from '../header/footbag-game-header';
import AboutSingleSport from './about-sport/about-single-sport';
import HowToPlaySingleSport from './how-to-play/how-to-play-single-sport';
import SingleSportCompetition from './competition/single-sport-competition';

function SingleSportGamePage(props) {
  const singleSportGame = props.singleSportGame;

  return (
    <div className='single-sport-page'>
      <FootbagGameHeader footbagGame={singleSportGame}>
        <img className="footbag-game-header-icon" src={singleSportGame.icon} />
      </FootbagGameHeader>
      <AboutSingleSport singleSportGame={singleSportGame} />
      <HowToPlaySingleSport singleSportGame={singleSportGame} />
      <SingleSportCompetition singleSportGame={singleSportGame} />
    </div>
  );
}

export default SingleSportGamePage;
