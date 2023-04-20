import './footer.css';
import ifpaLogo from '../../../assets/images/ifpa-logo.svg';
import { EmailLink } from '../../../components/links/link-components';
import { useState } from 'react';

function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  window.addEventListener('scroll', () => {
    setShowBackToTop(document.documentElement.scrollTop > 0);
  });

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  if(showBackToTop) {
    return (
      <div className="back-to-top" onClick={scrollToTop}>
        <i className="fa-solid fa-chevron-up"></i>
      </div>
    )
  } else {
    return null;
  }
}

function IfpaSection() {
  return (
    <div>
      <EmailLink className="footer-link">
        <img src={ifpaLogo} className="ifpa-logo" alt="Logo for IFPA" />
      </EmailLink>
    </div>
  );
}

function SocialSection() {
  return (
    <div id="social-container">
      <span>
        <a href="https://www.instagram.com/footbag_official/" target="_blank" rel="noreferrer"><i className="footer-link social fa-brands fa-instagram fa-xl"></i></a>
        <a href="https://www.facebook.com/footbag.org/" target="_blank" rel="noreferrer"><i className="footer-link social fa-brands fa-facebook-square fa-xl"></i></a>
        <a href="https://www.youtube.com/channel/UCs3hULDHOVOknWExWBVlLBw" target="_blank" rel="noreferrer"><i className="footer-link social fa-brands fa-youtube fa-xl"></i></a>
      </span>
    </div>
  );
}

function DonateSection() {
  return (
    <div id="donate-container">
      <a href="https://www.justgiving.com/internationalfootbagplayersassociationincorporated" target="_blank" rel="noreferrer"><i className="footer-link fa-brands fa-cc-paypal fa-2x"></i></a>
    </div>
  );
}

function Footer() {
	return (
    <>
      <BackToTop />
      <footer>
        <div id="footer-container">
          <IfpaSection />
          <SocialSection />
          <DonateSection />
        </div>

        <div className="copyright">Footbag.org 2023, International Footbag Players' Association, Inc. (a non-profit corporation)</div>
      </footer>
    </>
	);
}

export default Footer;
