import './header.css';
import { useDesktopDisplay } from '../../../hooks/display-hook';
import logo from '../../../assets/images/logo.svg';
import { EmailLink, ImageLink } from '../../../components/links/link-components.js';
import Menu from './menu/menu';
import emailIcon from '../../../assets/images/icons/envelope.svg';

function Header() {
  const headerClassName = useDesktopDisplay() ? 'header-container_desktop' : 'header-container_mobile fixed-header-space';

  return (
    <nav
      className={`header-container ${headerClassName}`}
    >
      <div></div>
      <div><ImageLink className="logo-image" src={logo} alt="Logo for footbagworldwide" route="/" /></div>
      <Menu />
      { useDesktopDisplay() && <div><EmailLink><img id='email-icon' src={emailIcon} alt="Envelope icon" /></EmailLink></div> }
    </nav>
  );
}

export default Header;
