import './intro-section.css';
import { freestyleData, hackySackData, netData } from "../../../../data/games/footbag-games-data.js";
import { ButtonLink, ImageLink } from "../../../../components/links/link-components";

function FootbagGameItem(props) {
  const footbagGame = props.footbagGame;

  return (
    <div className='footbag-game-container'>
      <div className="footbag-game">
        <ImageLink
          route={footbagGame.pageRoute}
          src={footbagGame.icon}
          alt={`Icon for ${footbagGame.title}`}
          className="footbag-game-icon"
        />
        <h3>{footbagGame.title}</h3>
        <div>{footbagGame.description.short}</div>
      </div>
      <ButtonLink route={footbagGame.pageRoute}>MORE</ButtonLink>
    </div>
  );
}

function IntroSection() {
	return (
		<div className="intro-container home-page-section page-subsection">
			<div className="intro-header">
        <h1>FOOTBAG</h1>
        <h2>RECREATIONAL AND COMPETITIVE SPORTS</h2>
      </div>
			<p className="footbag-description">
					Footbag is a series of sports where players use their feet to kick
					a small bag in a variety of styles that range from light and casual to complex
					and competitive. Footbag is played all over the world, bonding together a dedicated
					community around their love for a unique and amazing sport.
			</p>
			<div className='footbag-games-container'>
        <FootbagGameItem footbagGame={hackySackData} />
        <FootbagGameItem footbagGame={freestyleData} />
        <FootbagGameItem footbagGame={netData} />
      </div>
		</div>
	);
}

export default IntroSection;
