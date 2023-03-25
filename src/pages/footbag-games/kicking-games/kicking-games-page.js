import { useState } from 'react';
import './kicking-games-page.css'
import '../footbag-games.css';
import { kickingGames } from './kicking-games-data'; 

function KickingGamesPage() {
  const [isSingleColumnView, setIsSingleColumnView] = useState(shouldUseSingleColumnView());

  window.addEventListener('resize', () => {
    if(shouldUseSingleColumnView() === true) {
      setIsSingleColumnView(true);
    } else {
      setIsSingleColumnView(false);
    }
  })

  function shouldUseSingleColumnView() {
    return window.innerWidth <= 750;
  }

  function HeaderIcons() {
    if(isSingleColumnView === false) {
      return (
        <div id="kicking-games-header-icons">
          { kickingGames.map(kickingGame =>
          <div key={`kicking-game-icon_${kickingGame.title}`}>
            <img className="footbag-game-icon" src={kickingGame.icon_green} />
            <h4 className="footbag-game-name">{kickingGame.title}</h4>
          </div>
          )}
        </div>
      );
    } else {
      return null;
    }
  }

  function KickingGameItem(kickingGame, index) {
    return (
      <div
        key={`kicking-game_${kickingGame.title}`}
        className={`footbag-game-container ${index % 2 == 0 ? 'footbag-game-odd' : 'footbag-game-even'}`}
      >
        <div>
          { (isSingleColumnView === true || index % 2 == 0) && <img className="footbag-game-icon" src={kickingGame.icon_white} /> }
        </div>
        <div>
          <h2 className="footbag-game-name">{kickingGame.title}</h2>
          <p>{kickingGame.description}</p>
          <div>
            <strong>MORE INFO</strong>
            <ul>
              { kickingGame.links.map((link, linkIndex) => 
              <li key={`kicking-game-link_${linkIndex}`}>
                <a href={link.value}>{link.label}</a>
              </li>
              )}
            </ul>
          </div>
          <img src={kickingGame.gifPath} className="footbag-game-gif" />
        </div>
        <div>
          { (isSingleColumnView === false && index % 2 == 1) && <img className="footbag-game-icon" src={kickingGame.icon_green} /> }
        </div>
      </div>
    );
  }

	return (
		<div>
			<h1 id="kicking-games-title">KICKING GAMES</h1>
			{ HeaderIcons() }
			<div>
				{ kickingGames.map((kickingGame, index) => KickingGameItem(kickingGame, index))}
			</div>
		</div>
	);
}

export default KickingGamesPage;
