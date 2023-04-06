import './about-section.css';
import historyImage from '../../../../assets/images/wfc-logos/WFC2018.jpg';
import { ButtonLink } from '../../../../components/links/link-components';
import { useDesktopDisplay, useMobileDisplay } from '../../../../hooks/display-hook.js';

function AboutSectionContainer(props) {
  return (
    <div className={`about-section-item ${props.className}`}>
      <h2 className="about-section-item-header">{props.title}</h2>
      <div className={`about-section-content ${props.containerClassName}`}>
        { props.children }
      </div>
      <div className="about-button-container">
        <ButtonLink route="/about"><strong>MORE</strong></ButtonLink>
      </div>
    </div>
  );
}

function FootbagHistory() {
  const containerClassName = useDesktopDisplay() ? "about-section-content-history" : ""

  return (
    <AboutSectionContainer title="HISTORY OF FOOTBAG" containerClassName={containerClassName}>
      <div className='about-section-image-container'><img className="about-section-image" src={historyImage} /></div>
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
    <AboutSectionContainer title="About IFPA" className={props.className}>
      <p className="about-section-text">
        IFPA (International Footbag Players' Association, Inc.) is a volunteer-run, charitable non-profit corporation,
        dedicated to the growth of footbag play world-wide as lifetime recreation and as an amateur, competitive sport.
      </p>
    </AboutSectionContainer>
  );
}

function AboutSection() {
  const containerClassName = useDesktopDisplay() ? 'about-section-container_desktop' : '';

  return (
    <div className={`home-page-section home-page-subsection ${containerClassName}`}>
      <FootbagHistory/>
      <AboutIfpa className={useMobileDisplay() ? 'about-section-item_mobile' : ''}/>
    </div>
  );
}

export default AboutSection;
