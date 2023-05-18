import './about-section.css';
import historyImage from '../../../../assets/images/wfc-logos/WFC2018.jpg';
import { ButtonLink } from '../../../../components/links/link-components';

function AboutSectionItem(props) {
  const title = props.title;
  const description = props.description;
  const imageSrc = props.imageSrc;
  const imageAlt = props.imageAlt;

  return (
    <div className="about-section-item">
      <h2>{title}</h2>
      <div className="about-section-content">
        <div className='about-section-image-container'>
          <img className="about-section-image" src={imageSrc} alt={imageAlt} />
        </div>
        <p className="about-section-text">{description}</p>
      </div>
      {/* removing button to About page until design is finalized */}
      {/* <div className="about-button-container">
        <ButtonLink route="/about">MORE</ButtonLink>
      </div> */}
    </div>
  );
}

function AboutSection() {
  return (
    <div className='home-page-section page-subsection about-section-container'>
      <AboutSectionItem
        title="HISTORY OF FOOTBAG"
        description="Footbag roots can be found deep in the ancient cultures of Asia and the Americas, with similar games being played as far back as 3000 years ago. Its current form was established in North America in the 1970s, and it has spread globally and evolved into many forms since."
        imageSrc={historyImage}
        imageAlt="Footbag history"
      />
      <AboutSectionItem
        title="ABOUT IFPA"
        description="IFPA (International Footbag Players' Association, Inc.) is a volunteer-run, charitable non-profit corporation, dedicated to the growth of footbag play world-wide as lifetime recreation and as an amateur, competitive sport."
        imageSrc={historyImage}
        imageAlt="Footbag history"
      />
    </div>
  );
}

export default AboutSection;
