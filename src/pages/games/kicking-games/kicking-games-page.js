import './kicking-games-page.css'
import '../footbag-games.css';
import { kickingGamesData, hackySackData, twoSquareData, golfData, netData, freestyleData } from '../../../data/games/footbag-games-data.js';
import FootbagGameHeader from '../header/footbag-game-header';
import { Video } from '../../../components/video/video';

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
    <div className={`page-subsection kicking-game-container footbag-game-section ${className}`}>
      <div className="kicking-game-icon-container">
        { withBackground && <FootbagGameIcon kickingGame={kickingGame} withBackground={withBackground === false} /> }
      </div>
      <div>
        <h2 className="footbag-game-section-header">{kickingGame.title}</h2>
        <div className="footbag-game-video">
          <Video internal sources={kickingGame.videos} poster={kickingGame.videoThumbnail} alt={`Demonstration of ${kickingGame.title.toLowerCase()}`} />
        </div>
        <p>{kickingGame.description.long_html}</p>
        <KickingGameMoreInfo kickingGame={kickingGame} />
      </div>
      <div className="kicking-game-icon-container">
        { !withBackground && <FootbagGameIcon kickingGame={kickingGame} withBackground={withBackground === false} /> }
      </div>
    </div>
  );
}

function KickingGameMoreInfo(props) {
  const kickingGame = props.kickingGame;

  if(kickingGame.howToPlay && kickingGame.howToPlay.resources && kickingGame.howToPlay.resources.length > 0) {
    return (
      <div>
        <strong>MORE INFO</strong>
        <div>
          <ul className="kicking-game-more-info-list">
            {
              kickingGame.howToPlay.resources.map((resource, resourceIndex) => 
                <li key={`kicking-game-link_${resourceIndex}`}>
                  <a href={resource.link} target="_blank" rel="noreferrer">{resource.description}</a>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  } else {
    return null;
  }
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
