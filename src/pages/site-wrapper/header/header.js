import logo from '../../../assets/images/logo.svg';
import './header.css';
import { ImageLink } from '../../../components/links/link-components.js';

function menu() {
  return (
    <div>
      <span>GAMES</span>
      <span>NEW PLAYERS</span>
      <span>EVENTS</span>
      <span>OTHER</span>
    </div>
  );
}

function Header() {
	return (
		<nav id="header-container">
        <ImageLink id="logo-image" src={logo} route="/" width="300" height="35" />
        {/* { menu() } */}
		</nav>
	);
}

export default Header;
