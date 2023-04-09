import './kicking-games-page.css'
import '../footbag-games.css';
import { kickingGamesData, hackySackData, twoSquareData, golfData, netData, freestyleData } from '../../../data/games/footbag-games-data.js';
import FootbagGameHeader from '../header/footbag-game-header';

function KickingGameItem(props) {
  const kickingGame = props.kickingGame;
  const index = props.index;

  const isSingleColumnView = false;

  return (
    <div className={`kicking-game-container ${isSingleColumnView === false ? 'footbag-game-section' : ''} ${index % 2 == 0 ? 'kicking-game-odd footbag-game-section-with-background' : 'kicking-game-even'}`}>
      <div>
        { (isSingleColumnView === true || index % 2 == 0) && <img className="footbag-game-icon" src={kickingGame.icon} alt={`Icon for ${kickingGame.title}`} /> }
      </div>
      <div>
        <h2 className="footbag-game-section-header">{kickingGame.title}</h2>
        <p>{kickingGame.description.long_html}</p>
        <img src={kickingGame.gif} alt={`Gif of ${kickingGame.title}`} className="footbag-game-gif" />
        <div>
          <strong>MORE INFO</strong>
          <ul>
            {
              kickingGame.howToPlay.resources.map((resource, resourceIndex) => 
                <li key={`kicking-game-link_${resourceIndex}`}>
                  <a href={resource.link}>{resource.description}</a>
                </li>
              )
            }
          </ul>
        </div>          
      </div>
      <div>
        { (isSingleColumnView === false && index % 2 == 1) && <img className="footbag-game-icon" src={kickingGame.icon_withBackground} alt={`Icon for ${kickingGame.title}`} /> }
      </div>
    </div>
  );
}

function KickingGamesPage() {
  const kickingGameHeader = {
    game: kickingGamesData,
    otherGames: [netData, freestyleData],
  };

	return (
		<div>
      <FootbagGameHeader headerData={kickingGameHeader} />
			<div>
        <KickingGameItem kickingGame={hackySackData} index={0} />
        <KickingGameItem kickingGame={twoSquareData} index={1} />
        <KickingGameItem kickingGame={golfData} index={2} />
			</div>
		</div>
	);
}

export default KickingGamesPage;
