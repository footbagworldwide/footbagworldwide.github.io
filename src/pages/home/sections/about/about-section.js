import './about-section.css';
import historyImage from '../../../../assets/images/wfc-logos/WFC2018.jpg';
import { ButtonLink } from '../../../../components/links/link-components';

function AboutSectionContainer(props) {
  const className = props.className ?? '';
  const containerClassName = props.containerClassName ?? '';

  return (
    <div className={`about-section-item ${className}`}>
      <h2 className="about-section-item-header">{props.title}</h2>
      <div className={`about-section-content ${containerClassName}`}>
        { props.children }
      </div>
      <div className="about-button-container">
        <ButtonLink route="/about">MORE</ButtonLink>
      </div>
    </div>
  );
}

function FootbagHistory() {
  return (
    <AboutSectionContainer title="HISTORY OF FOOTBAG" >
      <div className='about-section-image-container'>
        <img className="about-section-image" src={historyImage} alt="Footbag history" />
      </div>
      <p className="about-section-text">
        Footbag roots can be found deep in the ancient
        cultures of Asia and the Americas, with
        similar games being played as far back as
        3000 years ago. Its current form was established
        in North America in the 1970s, and it
        has spread globally and evolved into many
        forms since.
      </p>
    </AboutSectionContainer>
  );
}

function AboutIfpa(props) {
  return (
    <AboutSectionContainer title="ABOUT IFPA" className={props.className}>
      <div className='about-section-image-container'>
        <img className="about-section-image" src={historyImage} alt="Footbag history" />
      </div>
      <p className="about-section-text">
        IFPA (International Footbag Players' Association, Inc.) is a volunteer-run, charitable non-profit corporation,
        dedicated to the growth of footbag play world-wide as lifetime recreation and as an amateur, competitive sport.
      </p>
    </AboutSectionContainer>
  );
}

function AboutSection() {
  return (
    <div className='home-page-section page-subsection about-section-container'>
      <FootbagHistory />
      <AboutIfpa className="about-section-container-ifpa" />
    </div>
  );
}

export default AboutSection;
