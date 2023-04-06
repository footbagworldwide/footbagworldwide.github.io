import './about-section.css';
import historyImage from '../../../../assets/images/wfc-logos/WFC2018.jpg';
import { ButtonLink } from '../../../../components/links/link-components';
import { useDesktopDisplay, useMobileDisplay } from '../../../../hooks/display-hook.js';

function MoreButton() {
  return (
    <div className="about-button-container">
      <ButtonLink route="/about"><strong>MORE</strong></ButtonLink>
    </div>
  );
}

function FootbagHistory(props) {

  const HistoryTitleElement = () => <h2 className="about-section-item-header">HISTORY OF FOOTBAG</h2>;
  const HistoryImageElement = () => <img id="about-history-image" src={historyImage} />;
  const HistoryTextElement = () => 
    <p className="about-section-text">
      Footbag roots can be found deep in the ancient
      cultures of Asia and the Americas, with
      similar games being played as far back as
      3000 years ago. Its current form was established
      in North America in the 1970s, and it
      has spread globally and evolved into many
      forms since.
    </p>;

  const HistoryElement_Mobile = () => (
    <>
      <HistoryTitleElement />
      <div className="about-history-image-mobile"><HistoryImageElement /></div>
      <HistoryTextElement />
      <MoreButton />
    </>
  );

  const HistoryElement_Desktop = () => (
    <>
      <HistoryTitleElement />
      <div id="about-section-history-container">
        <HistoryImageElement />
        <div>
          <HistoryTextElement />
          <MoreButton />
        </div>
      </div>
    </>
  );

  return (
    <div className={`about-section-item ${props.className}`} >
      { useMobileDisplay() ? <HistoryElement_Mobile /> : <HistoryElement_Desktop /> }
    </div>
  );
}

function AboutIfpa() {
  //const 

  return (
    <div className="about-section-item">
      <h2 className="about-section-item-header">ABOUT IFPA</h2>
      <p className="about-section-text">
        IFPA (International Footbag Players' Association, Inc.) is a volunteer-run, charitable non-profit corporation,
        dedicated to the growth of footbag play world-wide as lifetime recreation and as an amateur, competitive sport.
      </p>
      <MoreButton />
    </div>
  );
}

function AboutSection() {
  const containerClassName = `home-page-section ${useDesktopDisplay() ? 'about-section-desktop-container' : ''}`;
  const historyClassName = useMobileDisplay() ? 'about-section-mobile-history' : '';

  return (
    <div id="about-section-container" className={containerClassName}>
      <FootbagHistory className={historyClassName} />
      <AboutIfpa />
    </div>
  );
}

export default AboutSection;
