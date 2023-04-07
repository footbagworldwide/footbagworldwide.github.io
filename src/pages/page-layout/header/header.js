import './header.css';
import { useDesktopDisplay, useMobileDisplay } from '../../../hooks/display-hook';
import logo from '../../../assets/images/logo.svg';
import { EmailLink, ImageLink } from '../../../components/links/link-components.js';
import Menu from './menu/menu';

function SiteLogo() {
  if(useDesktopDisplay()) {
    return <ImageLink className="logo-image" src={logo} route="/" />
  } else {
    return <img className="logo-image" src={logo} />
  }
}

function Header() {
  const headerClassName = useDesktopDisplay() ? 'header-container_desktop' : 'header-container_mobile fixed-header-space';

  return (
    <nav
      className={`header-container ${headerClassName}`}
    >
      <div></div>
      <div><SiteLogo /></div>
      <Menu />
      { useDesktopDisplay() && <div><EmailLink><i id='email-icon' className="fa-regular fa-envelope"></i></EmailLink></div> }
    </nav>
  );
}

export default Header;
