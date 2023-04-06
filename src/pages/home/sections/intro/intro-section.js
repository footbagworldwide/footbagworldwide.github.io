import './intro-section.css';
import { freestyleData, hackySackData, netData } from "../../../../data/games/footbag-games-data.js";
import { ButtonLink, ImageLink } from "../../../../components/links/link-components";
import { useMobileDisplay, useDesktopDisplay } from '../../../../hooks/display-hook';

function IntroHeader() {
  if(useMobileDisplay()) {
    return (
      <div className="intro-header">
        <h1>FOOTBAG</h1>
        <h2>RECREATIONAL AND COMPETITIVE SPORTS</h2>
      </div>
    );
  } else {
    return (
      <h1 className="intro-header">FOOTBAG | RECREATIONAL AND COMPETITIVE SPORTS</h1>
    );
  }
}

function FootbagGames() {
  const className = useDesktopDisplay() ? "footbag-games-desktop-container" : "";

  return (
    <div id="footbag-games-container" className={className}>
      {
        [hackySackData, freestyleData, netData].map((footbagGame) =>
          <FootbagGameItem footbagGame={footbagGame} key={`footbag-game_${footbagGame.title}`}/>
        )
      }
    </div>
  );
}

function FootbagGameItem(props) {
  const footbagGame = props.footbagGame;

  return (
    <div key={`footbag-game_${footbagGame.title}`}>
      <div className="footbag-game">
        <ImageLink
          route={footbagGame.pageRoute}
          src={footbagGame.icon}
          className="footbag-game-icon"
        />
        <h3>{footbagGame.title}</h3>
        <div>{footbagGame.description.short}</div>
      </div>
      <ButtonLink route={footbagGame.pageRoute}><strong>MORE</strong></ButtonLink>
    </div>
  );
}

function IntroSection() {
	return (
		<div className="intro-container home-page-section">
			<IntroHeader />
			<p className="footbag-description">
					Footbag is a series of sports where players use their feet to kick
					a small bag in a variety of styles that range from light and casual to complex
					and competitive. Footbag is played all over the world, bonding together a dedicated
					community around their love for a unique and amazing sport.
			</p>
			<FootbagGames />
		</div>
	);
}

export default IntroSection;
