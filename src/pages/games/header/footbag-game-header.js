import './footbag-game-header.css';
import { ButtonLink, ImageLink } from '../../../components/links/link-components.js';

function OtherGame(props) {
  const otherGame = props.otherGame;
  const arrowLeft = props.arrowLeft === true;
  const arrowRight = props.arrowRight === true;

  const buttonText = `DISCOVER ${otherGame.title}`;

  return (
    <div className='footbag-game-section'>
      <div><ImageLink src={otherGame.icon_green} route={otherGame.route} className="footbag-game-other-icon" /></div>
      <ButtonLink route={otherGame.route} className="other-game-button">
        { arrowLeft && <i className="fa-solid fa-chevron-left"></i> } {buttonText} { arrowRight && <i className="fa-solid fa-chevron-right"></i> }
      </ButtonLink>
    </div>
  );
}

function FootbagGameHeader(props) {
  const footbagGame = props.footbagGame;

  return (
    <div className="footbag-game-section">
      <h1 className="footbag-game-title">{footbagGame.title}</h1>
      <div className="footbag-game-header-container">
        <OtherGame otherGame={footbagGame.otherGames[0]} arrowLeft={true} />
        <div>
          { props.children }
        </div>
        <OtherGame otherGame={footbagGame.otherGames[1]} arrowRight={true} />
      </div>
    </div>
  );
}

export default FootbagGameHeader;
