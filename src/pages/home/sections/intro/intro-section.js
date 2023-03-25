import './intro-section.css';
import { footbagGames } from "./intro-data";
import { ButtonLink, ImageLink } from "../../../../components/links/link-components";

function FootbagGameItem(footbagGame) {
  return (
    <div key={`footbag-game_${footbagGame.title}`}>
      <div className="footbag-game">
        <ImageLink
          route={footbagGame.route}
          src={footbagGame.imagePath}
          className="footbag-game-icon"
        />
        <h3>{footbagGame.title}</h3>
        <div>{footbagGame.description}</div>
      </div>
      <ButtonLink label='MORE' route={footbagGame.route} />
    </div>
  );
}

function IntroSection() {
	return (
		<div className="intro-container home-page-section">
			<h1 className="intro-header">FOOTBAG | RECREATIONAL AND COMPETITIVE SPORTS</h1>
			<p className="footbag-description">
					Footbag is a series of sports where players use their feet to kick
					a small bag in a variety of styles that range from light and casual to complex
					and competitive. Footbag is played all over the world, bonding together a dedicated
					community around their love for a unique and amazing sport.
			</p>
			<div id="footbag-games-container">
			  { footbagGames.map((footbagGame) => FootbagGameItem(footbagGame) )}
			</div>
		</div>
	);
}

export default IntroSection;
