import './events-section.css';
import { events } from '../../../../data/events/events-data';
import { ButtonLink } from '../../../../components/links/link-components';

const latestEvent = events[0];
const pastEvents = [events[1], events[2], events[3]];

function EventsSectionItem(props) {
  const event = props.event;

  return (
    <div className="events-section-event" key={`previous-event_${event.title}`}>
      <div className="event-logo-container">
        <img src={event.imagePath} className="event-logo" />
      </div>
      <h3>{event.title}</h3>
      <strong>{event.location}</strong>
    </div>
  );
}

function EventsSection() {
  return (
    <div className="home-page-section events-section">
      <h2>EVENTS</h2>
      <p>Every year the IFPA organizes the World Footbag Championships hosted by local clubs and attended by players around the world.</p>
      <div id="events-section-events-container">
        <div className="events-section-event-container">
          <h3 className="events-section-subheader"><strong>UPCOMING EVENTS</strong></h3>
          <EventsSectionItem event={latestEvent} />
        </div>
        <div className="events-section-event-container">
          <h3 className="events-section-subheader"><strong>PAST EVENTS</strong></h3>
          <div id="events-section-past-events-container">
            <EventsSectionItem event={pastEvents[0]} />
            <div className="events-section-divider"></div>
            <EventsSectionItem event={pastEvents[1]} />
            <div className="events-section-divider"></div>
            <EventsSectionItem event={pastEvents[2]} />
          </div>
        </div>
      </div>
      <ButtonLink label="SEE ALL EVENTS" route="/events" />
    </div>
  );
}

export default EventsSection;
