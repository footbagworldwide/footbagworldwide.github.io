import logo from '../../../assets/images/logo.svg';
import './header.css';
import { ImageLink } from '../../../components/links/link-components.js';
import Menu from './menu/menu.js';

function Header() {
	return (
		<nav id="header-container">
        <span><ImageLink id="logo-image" src={logo} route="/" width="300" height="35" /></span>
        <Menu />
		</nav>
	);
}

export default Header;
