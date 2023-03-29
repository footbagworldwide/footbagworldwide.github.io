import './menu.css';
import { Link } from 'react-router-dom';
import menuItems from './menu-data.js';

function MenuItem(props) {
  const menuItem = props.menuItem;

  return (
    <div className="menu-item" key={`menu-item_${menuItem.label}`}>
      <strong><Link to={menuItem.route}>{menuItem.label}</Link></strong>
    </div>
  );
}

function Submenu(props) {
  const submenu = props.submenu;

  return (
    <div key={`submenu_${submenu.label}`}>
      <div className="submenu">
        <strong className="menu-item">{submenu.label}</strong> <SubmenuArrow />
        <div className="submenu-items">
          {
            submenu.menuItems.map(menuItem =>
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

function Menu() {
  return (
    <div id="menu-container">
      {
        menuItems.map(menuItem => menuItem.menuItems ?
          <Submenu submenu={menuItem} />
          : <MenuItem menuItem={menuItem} />
        )
      }
    </div>
  );
}

export default Menu;
