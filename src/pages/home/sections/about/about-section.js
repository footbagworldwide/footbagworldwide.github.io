import './about-section.css';
import historyImage from '../../../../assets/images/wfc-logos/WFC2018.jpg';
import { ButtonLink } from '../../../../components/links/link-components';

function MoreButton() {
  return (
    <div className="about-button-container">
      <ButtonLink label="MORE" route="/about" />
    </div>
  );
}

function FootbagHistory() {
  return (
    <div className="about-section-item">
      <h2 className="about-section-item-header">HISTORY OF FOOTBAG</h2>
      <div id="about-section-history-container">
        <img id="about-history-image" src={historyImage} />
        <div>
          <p className="about-section-text">
            Footbag roots can be found deep in the ancient
            cultures of Asia and the Americas, with
            similar games being played as far back as
            3000 years ago. Its current form was established
            in North America in the 1970s, and it
            has spread globally and evolved into many
            forms since.
          </p>
          { MoreButton() }
        </div>
      </div>
    </div>
  );
}

function AboutIfpa() {
  return (
    <div className="about-section-item">
      <h2 className="about-section-item-header">ABOUT IFPA</h2>
      <p className="about-section-text">
        IFPA (International Footbag Players' Association, Inc.) is a volunteer-run, charitable non-profit corporation,
        dedicated to the growth of footbag play world-wide as lifetime recreation and as an amateur, competitive sport.
      </p>
      { MoreButton() }
    </div>
  );
}

function AboutSection() {
  return (
    <div id="about-section-container" className="home-page-section">
      { FootbagHistory() }
      { AboutIfpa() }
    </div>
  );
}

export default AboutSection;
