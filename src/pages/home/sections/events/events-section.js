import './events-section.css';
import { events } from '../../../../data/events/events-data';
import { ButtonLink } from '../../../../components/links/link-components';
import ColumnDivider from '../../../../components/column-divider/column-divider';

function EventsSectionItem(props) {
  const event = props.event;

  return (
    <div className="events-section-event">
      <div className="event-logo-container">
        <img src={event.imagePath} alt={`Logo for ${event.title}`} className="event-logo" />
      </div>
      <h2>{event.title}</h2>
      <strong>{event.location}</strong>
    </div>
  );
}

function EventsSectionContainer(props) {
  const className = props.className ?? '';

  return (
    <div className={`events-section-event-container ${className}`}>
      <h2 className="events-section-subheader"><strong>{props.title}</strong></h2>
      { props.children }
    </div>
  );
}

function UpcomingEvents() {
  const latestEvent = events[0];

  return (
    <EventsSectionContainer title="UPCOMING EVENTS">
      <EventsSectionItem event={latestEvent} />
    </EventsSectionContainer>
  );
}

function PastEvents(props) {
  const pastEvents = [events[1], events[2], events[3]];

  return (
    <EventsSectionContainer title="PAST EVENTS" className={props.className}>
      <div id="events-section-past-events-container">
        <EventsSectionItem event={pastEvents[0]} />
        <ColumnDivider />
        <EventsSectionItem event={pastEvents[1]} />
        <ColumnDivider />
        <EventsSectionItem event={pastEvents[2]} />
      </div>
    </EventsSectionContainer>
  );
}

function EventsSection() {
  return (
    <div className="home-page-section events-section">
      <h1>EVENTS</h1>
      <p>
        Every year the IFPA organizes the World Footbag Championships hosted by local clubs
        and attended by players around the world.
      </p>
      <div className='home-page-subsection events-section-events-container'>
        <UpcomingEvents />
        <PastEvents className="events-section-past-events" />
      </div>
      <ButtonLink route="/events"><strong>SEE ALL EVENTS</strong></ButtonLink>
    </div>
  );
}

export default EventsSection;
