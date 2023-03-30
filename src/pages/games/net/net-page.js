import { netData, freestyleData, kickingGamesData } from '../../../data/games/footbag-games-data.js';
import SingleSportGamePage from '../single-sport-games/single-sport-game-page.js';

const netHeader = {
  title: netData.title,
  otherGames: [freestyleData, kickingGamesData],
};

function NetPage() {
  return (
    <SingleSportGamePage singleSportGame={netData} headerData={netHeader} />
  );
}

export default NetPage;
