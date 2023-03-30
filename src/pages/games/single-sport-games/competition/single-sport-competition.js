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
      <div className="competitive-event-video-container"><Video video={competitiveEvent.video} className="competitive-event-video" /></div>
    </div>
  );
}

function SingleSportCompetition(props) {
  const singleSportGame = props.singleSportGame;
  
  return (
    <div className="single-sport-page-section single-sport-page-section-with-background">
      <h3 className="single-sport-page-section-title">IS {singleSportGame.title} A HOBBY OR A SPORT?</h3>
      <div className="single-sport-page-centered-container">{singleSportGame.competitionDescriptionHtml}</div>
      <div className="competitive-event-item-container">
        {
          singleSportGame.competitiveEvents.map((competitiveEvent, index) =>
            <CompetitiveEvent competitiveEvent={competitiveEvent} key={`competitive-event-video_${index}`} />
          )
        }
      </div>
    </div>
  );
}

export default SingleSportCompetition;
