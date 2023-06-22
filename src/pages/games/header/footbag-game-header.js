import './footbag-game-header.css';
import { ButtonLink, ImageLink } from '../../../components/links/link-components.js';

function OtherGame(props) {
  const otherGame = props.otherGame;
  const arrowLeft = props.arrowLeft === true;
  const arrowRight = props.arrowRight === true;
  const short = props.short === true;

  const buttonText = short ? otherGame.title_short : otherGame.title;

  return (
    <div className='footbag-game-section'>
      { !short && <div><ImageLink src={otherGame.icon_withBackground} alt={`Icon for ${otherGame.title}`} route={otherGame.pageRoute} className="footbag-game-other-icon" /></div> }
      <ButtonLink route={otherGame.pageRoute} className="other-game-button">
        { arrowLeft && <i className="fa-solid fa-chevron-left"></i> } {buttonText} { arrowRight && <i className="fa-solid fa-chevron-right"></i> }
      </ButtonLink>
    </div>
  );
}

function FootbagGameHeader(props) {
  const headerData = props.headerData;

  const HeaderIcon = () => {
    return (
      <div><img className="footbag-game-icon" src={headerData.game.icon_withBackground} alt={`Icon for ${headerData.game.title}`} /></div>
    );
  }

  const HeaderContainerLong = () => {
    return (
      <div className="footbag-game-header-container_long">
        <OtherGame otherGame={headerData.otherGames[0]} arrowLeft={true} />
        <HeaderIcon />
        <OtherGame otherGame={headerData.otherGames[1]} arrowRight={true} />
      </div>
    );
  }

  const HeaderContainerShort = () => {
    return (
      <div className="footbag-game-header-container_short">
        <HeaderIcon />
        <div className="footbag-game-header-discover-others">
          <OtherGame otherGame={headerData.otherGames[0]} arrowLeft={true} short={true} />
          <OtherGame otherGame={headerData.otherGames[1]} arrowRight={true} short={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="footbag-game-section footbag-game-header">
      <h1 className="footbag-game-title">{headerData.game.title}</h1>
      <HeaderContainerLong />
      <HeaderContainerShort />
    </div>
  );
}

export default FootbagGameHeader;
