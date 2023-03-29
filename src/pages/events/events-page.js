import './events-page.css';
import locationIcon from '../../assets/images/icons/location.svg';
import videosIcon from '../../assets/images/icons/videos.svg';
import resultsIcon from '../../assets/images/icons/results.svg';
import emailIcon from '../../assets/images/icons/envelope.svg';
import { events } from '../../data/events/events-data';
import { ButtonLink, EmailLink } from '../../components/links/link-components';

const latestEvent = events[0];
const pastEvents = events.slice(1);

function PastEventsSection() {
  return (
    <div id="past-events-container">
      { pastEvents.map((pastEvent, index) =>
          <div 
            key={`event_${pastEvent.title}`}
            className={ `event ${index % 2 == 0 ? 'event-odd' : ''}` }
          >
            <div className="event-logo-container">
              <img src={pastEvent.imagePath} className="event-logo" />
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

function EventIcon(props) {
  const icon = props.icon;

  return (
    <img src={icon} width="25" height="25" />
  );
}

function PastEventIcons(props) {
  const event = props.event;

  return (
    <>
      <div><EventIcon icon={locationIcon} /></div>
      <div><EventIcon icon={videosIcon} /></div>
      <div><EventIcon icon={resultsIcon} /></div>
      <div><span>{event.location}</span></div>
      <div><a className="event-link" href={event.videoLink} target="_blank">Video</a></div>
      <div><a className="event-link" href={event.resultsLink} target="_blank">Results</a></div>
    </>
  );
}

function LatestEventSection() {
  return (
    <div id="latest-event-container">
      <img src={latestEvent.imagePath} id="latest-event-logo" />
      <div>
        <h3 id="latest-event-title">{latestEvent.title}</h3>
        <p>{latestEvent.description}</p>
        <div id="latest-event-icon-container">
          <div>
            <EventIcon icon={locationIcon} />
            <strong className="latest-event-icon">{latestEvent.location}</strong>
          </div>
          <div>
            <EventIcon icon={emailIcon} />
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
        <ButtonLink label="SEE ALL EVENTS ON FOOTBAG.ORG" external={true} route="http://footbag.org/events/list" />
      </div>
		</div>
	);
}

export default EventsPage;
