import './menu.css';
import { Link } from 'react-router-dom';
import menuItems from './menu-data.js';

function Menu() {
  return (
    <div id="menu-container">
      {
        menuItems.map(menuItem => menuItem.menuItems ?
          Submenu(menuItem.label, menuItem.menuItems)
          : MenuItem(menuItem.label, menuItem.route)
        )
      }
    </div>
  );
}

function MenuItem(label, route) {
  return (
    <div className="menu-item" key={`menu-item_${label}`}>
      <strong><Link to={route}>{label}</Link></strong>
    </div>
  );
}

function Submenu(label, menuItems) {
  return (
    <div key={`submenu_${label}`}>
      <div className="submenu">
        <strong className="menu-item">{label}</strong> { SubmenuArrow() }
        <div className="submenu-items">
          {
            menuItems.map(menuItem =>
              <div className="menu-item submenu-item" key={`menu-item_${menuItem.label}`}>
                <Link to={menuItem.route}>{menuItem.label}</Link>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

function SubmenuArrow() {
  return (
    <>
      <i className="fa-solid fa-chevron-right submenu-arrow submenu-arrow-right"></i><i className="fa-solid fa-chevron-down submenu-arrow submenu-arrow-down"></i>
    </>
  );
}

export default Menu;
