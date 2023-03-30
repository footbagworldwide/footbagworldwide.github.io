import { freestyleData, kickingGamesData, netData } from '../../../data/games/footbag-games-data.js';
import SingleSportGamePage from '../single-sport-games/single-sport-game-page.js';

const freestyleHeader = {
  title: freestyleData.title,
  otherGames: [kickingGamesData, netData],
};

function FreestylePage() {
  return (
    <SingleSportGamePage singleSportGame={freestyleData} headerData={freestyleHeader} />
  );
}

export default FreestylePage;
