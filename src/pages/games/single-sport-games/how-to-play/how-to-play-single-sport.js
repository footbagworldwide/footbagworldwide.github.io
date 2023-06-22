import { Fragment } from 'react';
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

function HowToPlayResources(props) {
  const singleSportGame = props.singleSportGame;

  const resources = singleSportGame.howToPlay.resources;
  const resourcesCount = resources.length;

  return (
    <div className={`how-to-play-item-container how-to-play-item-container_${resourcesCount}`}>
      { resources.map((resource, index) => {
          return (
            <Fragment key={`howToPlay_${singleSportGame.title}_Resource_${index}`}>
              <HowToPlayItem item={resource} />
              { index < resourcesCount - 1 && <ColumnDivider className="how-to-play-divider" /> }
            </Fragment>
          )
        })
      }
    </div>
  );
}

function HowToPlaySingleSport(props) {
  const singleSportGame = props.singleSportGame;
  
  return (
    <div className="footbag-game-section page-subsection">
      <h2 className="footbag-game-section-header">HOW TO PLAY {singleSportGame.title}</h2>
      <div className="how-to-play-description">{ singleSportGame.howToPlay.description_html }</div>
      <HowToPlayResources singleSportGame={singleSportGame} />
    </div>
  );
}

export default HowToPlaySingleSport;
