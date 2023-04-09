import './kicking-games-page.css'
import '../footbag-games.css';
import { kickingGamesData, hackySackData, twoSquareData, golfData, netData, freestyleData } from '../../../data/games/footbag-games-data.js';
import FootbagGameHeader from '../header/footbag-game-header';

function FootbagGameIcon(props) {
  const kickingGame = props.kickingGame;
  const src = props.withBackground === true ? kickingGame.icon_withBackground : kickingGame.icon;
  
  return (
    <img className="footbag-game-icon kicking-game-icon" src={src} alt={`Icon for ${kickingGame.title}`} />
  );
};

function KickingGameItem(props) {
  const kickingGame = props.kickingGame;

  let withBackground = false;
  if(props.withBackground) { withBackground = true; }

  const className = withBackground === true ? 'footbag-game-section-with-background kicking-game-odd' : 'kicking-game-even';

  return (
    <div className={`kicking-game-container footbag-game-section ${className}`}>
      <div>
        { withBackground && <FootbagGameIcon kickingGame={kickingGame} withBackground={withBackground === false} /> }
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
        { !withBackground && <FootbagGameIcon kickingGame={kickingGame} withBackground={withBackground === false} /> }
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
        <KickingGameItem kickingGame={hackySackData} withBackground />
        <KickingGameItem kickingGame={twoSquareData} />
        <KickingGameItem kickingGame={golfData} withBackground />
			</div>
		</div>
	);
}

export default KickingGamesPage;
