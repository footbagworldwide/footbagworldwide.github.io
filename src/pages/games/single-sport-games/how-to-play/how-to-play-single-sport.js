import ColumnDivider from '../../../../components/column-divider/column-divider';
import './how-to-play-single-sport.css';

function HowToPlayItem(props) {
  const item = props.item;

  return (
    <div>
      <div><img className="how-to-play-icon" src={item.icon} /></div>
      <strong>{item.description}</strong>
    </div>
  );
}

function HowToPlaySingleSport(props) {
  const singleSportGame = props.singleSportGame;
  
  return (
    <div className="footbag-game-section">
      <h3 className="footbag-game-section-header">HOW TO PLAY {singleSportGame.title}</h3>
      <div className="single-sport-page-centered-container">{ singleSportGame.howToPlay.description_html }</div>
      <div className="how-to-play-item-container single-sport-page-centered-container">
        <HowToPlayItem item={singleSportGame.howToPlay.resources[0]} />
        <ColumnDivider />
        <HowToPlayItem item={singleSportGame.howToPlay.resources[1]} />
        <ColumnDivider />
        <HowToPlayItem item={singleSportGame.howToPlay.resources[2]} />
      </div>
    </div>
  );
}

export default HowToPlaySingleSport;
