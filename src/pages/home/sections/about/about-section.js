import './about-section.css';
import historyImage from '../../../../assets/images/icons/history.svg';
import ifpaImage from '../../../../assets/images/ifpa-logo.svg';

function AboutSectionItem(props) {
  const title = props.title;
  const description = props.description;
  const imageSrc = props.imageSrc;
  const imageAlt = props.imageAlt;
  const className = props.className ?? '';

  return (
    <div className="about-section-item">
      <div className="about-section-content">
        <div className='about-section-image-container'>
          <img className={`about-section-image ${className}`} src={imageSrc} alt={imageAlt} />
        </div>
        <h2>{title}</h2>
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
        description="Footbag roots can be found deep in the ancient cultures of Asia and the Americas, with similar games being played as far back as 3000 years ago. Its current form was established in North America in the 1970s, and has since spread worldwide and evolved into many forms."
        imageSrc={historyImage}
        imageAlt="Book icon"
      />
      <AboutSectionItem
        title="ABOUT IFPA"
        description="IFPA (International Footbag Players' Association, Inc.) is a volunteer-run, charitable non-profit corporation, dedicated to the growth of footbag play worldwide as lifetime recreation and as an amateur, competitive sport."
        imageSrc={ifpaImage}
        imageAlt="IFPA logo"
        className="about-ifpa-logo"
      />
    </div>
  );
}

export default AboutSection;
