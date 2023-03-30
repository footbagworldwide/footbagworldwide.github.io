import './footbag-game-header.css';
import { ButtonLink, ImageLink } from '../../../components/links/link-components.js';

function OtherGame(props) {
  const otherGame = props.otherGame;
  const arrowLeft = props.arrowLeft === true;
  const arrowRight = props.arrowRight === true;

  const buttonText = `DISCOVER ${otherGame.title}`;

  return (
    <div className='footbag-game-section'>
      <div><ImageLink src={otherGame.icon_withBackground} route={otherGame.pageRoute} className="footbag-game-other-icon" /></div>
      <ButtonLink route={otherGame.pageRoute} className="other-game-button">
        { arrowLeft && <i className="fa-solid fa-chevron-left"></i> } {buttonText} { arrowRight && <i className="fa-solid fa-chevron-right"></i> }
      </ButtonLink>
    </div>
  );
}

function FootbagGameHeader(props) {
  const headerData = props.headerData;

  return (
    <div className="footbag-game-section">
      <h1 className="footbag-game-title">{headerData.title}</h1>
      <div className="footbag-game-header-container">
        <OtherGame otherGame={headerData.otherGames[0]} arrowLeft={true} />
        <div>
          { props.children }
        </div>
        <OtherGame otherGame={headerData.otherGames[1]} arrowRight={true} />
      </div>
    </div>
  );
}

export default FootbagGameHeader;
