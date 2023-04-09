import './footbag-game-header.css';
import { ButtonLink, ImageLink } from '../../../components/links/link-components.js';

function OtherGame(props) {
  const otherGame = props.otherGame;
  const arrowLeft = props.arrowLeft === true;
  const arrowRight = props.arrowRight === true;
  const short = props.short === true;

  const OtherGameButton = (buttonProps) => {
    return (
      <ButtonLink route={otherGame.pageRoute} className="other-game-button">
        { arrowLeft && <i className="fa-solid fa-chevron-left"></i> } {buttonProps.title} { arrowRight && <i className="fa-solid fa-chevron-right"></i> }
      </ButtonLink>
    );
  };

  if(short) {
    return (
      <div className='footbag-game-section'>
        <OtherGameButton title={otherGame.title_short} />
      </div>
    );
  } else {
    return (
      <div className='footbag-game-section'>
        <div><ImageLink src={otherGame.icon_withBackground} alt={`Icon for ${otherGame.title}`} route={otherGame.pageRoute} className="footbag-game-other-icon" /></div>
        <OtherGameButton title={`DISCOVER ${otherGame.title}`} />
      </div>
    );
  }
}

function FootbagGameHeader(props) {
  const headerData = props.headerData;

  return (
    <div className="footbag-game-section">
      <h1 className="footbag-game-title">{headerData.title}</h1>
      <div className="footbag-game-header-container_long">
        <OtherGame otherGame={headerData.otherGames[0]} arrowLeft={true} />
        <div>{ props.children }</div>
        <OtherGame otherGame={headerData.otherGames[1]} arrowRight={true} />
      </div>
      <div className="footbag-game-header-container_short">
        <div>{ props.children }</div>
        <h2>DISCOVER OTHER FOOTBAG GAMES</h2>
        <div className="footbag-game-header-discover-others">
          <OtherGame otherGame={headerData.otherGames[0]} arrowLeft={true} short={true} />
          <OtherGame otherGame={headerData.otherGames[1]} arrowRight={true} short={true} />
        </div>
      </div>
    </div>
  );
}

export default FootbagGameHeader;
