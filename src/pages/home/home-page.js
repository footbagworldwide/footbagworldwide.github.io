import './home-page.css';
import HeroSection from './sections/hero/hero-section.js';
import IntroSection from './sections/intro/intro-section.js';
import EventsSection from './sections/events/events-section.js';
import AboutSection from'./sections/about/about-section.js';

function HomePage() {
	return (
		<>
			<HeroSection />
      <IntroSection />
      <AboutSection />
      <EventsSection />
		</>
	);
}

export default HomePage;
