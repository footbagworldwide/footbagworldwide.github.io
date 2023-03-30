import './single-sport-game-page.css';

import SingleSportHeader from './header/single-sport-header.js';
import AboutSingleSport from './about-sport/about-single-sport';
import HowToPlaySingleSport from './how-to-play/how-to-play-single-sport';
import SingleSportCompetition from './competition/single-sport-competition';

function SingleSportGamePage(props) {
  const singleSportGame = props.singleSportGame;

  return (
    <div className='single-sport-page'>
      <SingleSportHeader singleSportGame={singleSportGame} />
      <AboutSingleSport singleSportGame={singleSportGame} />
      <HowToPlaySingleSport singleSportGame={singleSportGame} />
      <SingleSportCompetition singleSportGame={singleSportGame} />
    </div>
  );
}

export default SingleSportGamePage;
