import { ButtonLink } from '../../../../components/links/link-components';
import { Video, getExternalVideoLink } from '../../../../components/video/video';
import './single-sport-competition.css';

function CompetitiveEvent(props) {
  const competitiveEvent = props.competitiveEvent;

  return (
    <div key={`single-sport-competitive-event_${competitiveEvent.title}`} className="competitive-event-item">
      <h3>{competitiveEvent.title}</h3>
      <p className='single-sport-competitive-event-description'>{competitiveEvent.description}</p>
      <div className="competitive-event-buttons-container">
        <ButtonLink external route={competitiveEvent.rulesLink}>RULES</ButtonLink>
        <div className="competitive-event-video-button"><ButtonLink external route={getExternalVideoLink(competitiveEvent.video)}>VIDEO</ButtonLink></div>
      </div>
      <div className="competitive-event-video-container"><Video video={competitiveEvent.video} className="competitive-event-video" /></div>
    </div>
  );
}

function SingleSportCompetition(props) {
  const singleSportGame = props.singleSportGame;
  
  return (
    <div className="footbag-game-section footbag-game-section-with-background page-subsection">
      <h2 className="footbag-game-section-header">IS {singleSportGame.title} A HOBBY OR A SPORT?</h2>
      <div>{singleSportGame.competition.description_html}</div>
      <div className="competitive-event-item-container">
        {
          singleSportGame.competition.events.map((competitiveEvent, index) =>
            <CompetitiveEvent competitiveEvent={competitiveEvent} key={`competitive-event-video_${index}`} />
          )
        }
      </div>
    </div>
  );
}

export default SingleSportCompetition;
