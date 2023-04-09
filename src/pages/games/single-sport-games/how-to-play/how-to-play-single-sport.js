import ColumnDivider from '../../../../components/column-divider/column-divider';
import './how-to-play-single-sport.css';

function HowToPlayItem(props) {
  const item = props.item;

  return (
    <div className='how-to-play-itme'>
      <div><img className="how-to-play-icon" src={item.icon} alt={`Icon for ${item.description}`} /></div>
      <strong>{item.description}</strong>
    </div>
  );
}

function HowToPlaySingleSport(props) {
  const singleSportGame = props.singleSportGame;
  
  return (
    <div className="footbag-game-section single-sport-page-container">
      <h3 className="footbag-game-section-header">HOW TO PLAY {singleSportGame.title}</h3>
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
