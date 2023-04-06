import logo from '../../../assets/images/logo.svg';
import './header.css';
import { EmailLink, ImageLink } from '../../../components/links/link-components.js';
import Menu from './menu/menu.js';
import { useMobileDisplay } from '../../../hooks/display-hook';

function HeaderLogo() {
  return (
    <div><ImageLink className="logo-image" src={logo} route="/" /></div>
  );
}

function MobileHeader() {
  return (
    <nav id="mobile-header-container">
      <div></div>
      <HeaderLogo />
      <div></div>
		</nav>
  );
}

function DesktopHeader() {
	return (
		<nav id="header-container">
      <HeaderLogo />
      <Menu />
      <div><EmailLink><i id='email-icon' className="fa-regular fa-envelope"></i></EmailLink></div>
		</nav>
	);
}

function Header() {
  return (
    <>
    { useMobileDisplay() ? <MobileHeader /> : <DesktopHeader /> }
    </>
  );
}

export default Header;
