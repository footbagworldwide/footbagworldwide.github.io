import './events-page.css';
import locationIcon from '../../assets/images/icons/location.svg';
import videosIcon from '../../assets/images/icons/videos.svg';
import resultsIcon from '../../assets/images/icons/results.svg';
import emailIcon from '../../assets/images/icons/envelope.svg';
import { events } from '../../data/events/events-data';
import { ButtonLink, EmailLink } from '../../components/links/link-components';

function PastEventsSection() {
  const pastEvents = events.slice(1);

  return (
    <div id="past-events-container">
      { pastEvents.map((pastEvent, index) =>
          <div 
            key={`event_${pastEvent.title}`}
            className={ `event ${index % 2 === 0 ? 'event-odd' : ''}` }
          >
            <div className="event-logo-container">
              <img src={pastEvent.imagePath} alt={`Logo for ${pastEvent.title}`} className="event-logo" />
            </div>
            <h3>{pastEvent.title}</h3>
            <div className="event-icon-container">
              <PastEventIcons event={pastEvent} />
            </div>
          </div>
        )
      }
    </div>
  );
}

function PastEventIcons(props) {
  const event = props.event;

  return (
    <>
      <div><img className="event-page-link-icon" src={locationIcon} alt="Icon for location" /></div>
      <div><img className="event-page-link-icon" src={videosIcon} alt="Icon for videos" /></div>
      <div><img className="event-page-link-icon" src={resultsIcon} alt="Icon for results" /></div>
      <div><span>{event.location}</span></div>
      <div><a className="event-link" href={event.videoLink} target="_blank" rel="noreferrer">Video</a></div>
      <div><a className="event-link" href={event.resultsLink} target="_blank" rel="noreferrer">Results</a></div>
    </>
  );
}

function LatestEventSection() {
  const latestEvent = events[0];

  return (
    <div id="latest-event-container">
      <img src={latestEvent.imagePath} alt={`Logo for ${latestEvent.title}`} id="latest-event-logo" />
      <div>
        <h3 id="latest-event-title">{latestEvent.title}</h3>
        <p>{latestEvent.description}</p>
        <div id="latest-event-icon-container">
          <div>
            <img className="event-page-link-icon" src={locationIcon} alt="Icon for location" />
            <strong className="latest-event-icon">{latestEvent.location}</strong>
          </div>
          <div>
            <img className="event-page-link-icon" src={emailIcon} alt="Icon for email" />
            <strong className="latest-event-icon"><EmailLink>Contact for more info</EmailLink></strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventsPage() {
	return (
		<div id="events-page">
			<div id="events-page-header">
				<h1 id="events-title">EVENTS</h1>
				<p>
          Footbag events are where players, competitors, and friends gather to celebrate their love of footbag. The World
          Championships is the biggest event of the year, which is organized by IFPA. It has intense competition, amazing
          displays of skills, but most of all, fun times for all!
        </p>
			</div>
      <h3 className="events-section-header"><div>UPCOMING EVENTS</div></h3>
      <LatestEventSection />
      <h3 className="events-section-header"><div>PAST EVENTS</div></h3>
			<PastEventsSection />
      <div id="all-events-button-container">
        <ButtonLink external={true} route="http://footbag.org/events/list">SEE ALL EVENTS ON FOOTBAG.ORG</ButtonLink>
      </div>
		</div>
	);
}

export default EventsPage;
