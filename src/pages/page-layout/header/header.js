import './header.css';
import { useDesktopDisplay } from '../../../hooks/display-hook';
import logo from '../../../assets/images/logo.svg';
import { EmailLink, ImageLink } from '../../../components/links/link-components.js';
import Menu from './menu/menu';

function Header() {
  return (
    <nav
      className={
        `header-container
        ${useDesktopDisplay() ? 'header-container_desktop' : 'header-container_mobile'}`
      }
    >
      <div></div>
      <div><ImageLink className="logo-image" src={logo} route="/" /></div>
      <Menu />
      { useDesktopDisplay() && <div><EmailLink><i id='email-icon' className="fa-regular fa-envelope"></i></EmailLink></div> }
    </nav>
  );
}

export default Header;
