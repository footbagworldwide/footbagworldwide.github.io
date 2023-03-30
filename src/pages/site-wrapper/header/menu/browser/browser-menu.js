import './browser-menu.css';
import RawMenu from '../raw/raw-menu';

function BrowserMenu() {
  return (
    <div className="browser-menu-container">
      <RawMenu submenuContainerClassName="browser-submenu-item-container" />
    </div>
  );
}

export default BrowserMenu;
