import './single-sport-header.css';
import { ButtonLink, ImageLink } from '../../../../components/links/link-components.js';

function OtherGame(props) {
  const otherGame = props.otherGame;
  const arrowLeft = props.arrowLeft === true;
  const arrowRight = props.arrowRight === true;

  const buttonText = `DISCOVER ${otherGame.title}`;

  return (
    <div className='single-sport-page-section'>
      <div><ImageLink src={otherGame.icon} route={otherGame.route} className="other-game-icon" /></div>
      <ButtonLink route={otherGame.route} className="other-game-button">
        { arrowLeft && <i className="fa-solid fa-chevron-left"></i> } {buttonText} { arrowRight && <i className="fa-solid fa-chevron-right"></i> }
      </ButtonLink>
    </div>
  );
}

function SingleSportHeader(props) {
  const singleSportGame = props.singleSportGame;

  const title = singleSportGame.title;
  const gameIcon = singleSportGame.icon;

  return (
    <div>
      <h2>{title}</h2>
      <div className="single-sport-header-container">
        <OtherGame otherGame={singleSportGame.otherGames[0]} arrowLeft={true} />
        <div><img className="single-sport-game-icon" src={gameIcon} /></div>
        <OtherGame otherGame={singleSportGame.otherGames[1]} arrowRight={true} />
      </div>
    </div>
  );
}

export default SingleSportHeader;
