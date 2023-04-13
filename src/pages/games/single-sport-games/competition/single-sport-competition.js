import { ButtonLink } from '../../../../components/links/link-components';
import { Video } from '../../../../components/video/video';
import './single-sport-competition.css';

function CompetitiveEvent(props) {
  const competitiveEvent = props.competitiveEvent;

  return (
    <div key={`single-sport-competitive-event_${competitiveEvent.title}`} className="competitive-event-item">
      <h3>{competitiveEvent.title}</h3>
      <p>{competitiveEvent.description}</p>
      <ButtonLink><strong>RULES</strong></ButtonLink>
      <div className="competitive-event-video-button"><ButtonLink><strong>VIDEO</strong></ButtonLink></div>
      <div className="competitive-event-video-container"><Video video={competitiveEvent.video} className="competitive-event-video" /></div>
    </div>
  );
}

function SingleSportCompetition(props) {
  const singleSportGame = props.singleSportGame;
  
  return (
    <div className="footbag-game-section footbag-game-section-with-background footbag-game-page-container">
      <h3 className="footbag-game-section-header">IS {singleSportGame.title} A HOBBY OR A SPORT?</h3>
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
