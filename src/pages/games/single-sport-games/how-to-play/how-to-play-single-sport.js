import ColumnDivider from '../../../../components/column-divider/column-divider';
import { ImageLink } from '../../../../components/links/link-components';
import './how-to-play-single-sport.css';

function HowToPlayItem(props) {
  const item = props.item;

  return (
    <div className='how-to-play-item'>
      <div>
        <ImageLink
          className="how-to-play-icon"
          src={item.icon}
          alt={`Icon for ${item.description}`}
          external
          route={item.link}
        />
      </div>
      <a href={item.link} target='_blank' rel='noreferrer'><strong>{item.description}</strong></a>
    </div>
  );
}

function HowToPlaySingleSport(props) {
  const singleSportGame = props.singleSportGame;
  
  return (
    <div className="footbag-game-section page-subsection">
      <h2 className="footbag-game-section-header">HOW TO PLAY {singleSportGame.title}</h2>
      <div className="how-to-play-description">{ singleSportGame.howToPlay.description_html }</div>
      <div className="how-to-play-item-container">
        <HowToPlayItem item={singleSportGame.howToPlay.resources[0]} />
        <ColumnDivider className="how-to-play-divider" />
        <HowToPlayItem item={singleSportGame.howToPlay.resources[1]} />
        <ColumnDivider className="how-to-play-divider" />
        <HowToPlayItem item={singleSportGame.howToPlay.resources[2]} />
      </div>
    </div>
  );
}

export default HowToPlaySingleSport;
