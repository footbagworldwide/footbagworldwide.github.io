import './menu.css';
import { Link } from 'react-router-dom';
import { slide as BurgerMenu } from 'react-burger-menu'
import menuItems from './menu-data';
import { useDesktopDisplay } from '../../../../hooks/display-hook';

function MenuItem(props) {
  const menuItem = props.menuItem;

  return (
    <div className="menu-item">
      <strong><Link to={menuItem.route}>{menuItem.label}</Link></strong>
    </div>
  );
}

function Submenu(props) {
  const submenu = props.submenu;
  const submenuContainerClassName = props.submenuContainerClassName;

  return (
    <div>
      <div className="submenu">
        <strong className="menu-item">{submenu.label}</strong> <SubmenuArrow />
        <div className={"submenu-item-container " + submenuContainerClassName}>
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

function RawMenu(props) {
  const submenuContainerClassName = props.submenuContainerClassName;
  const menuItemsToRender = menuItems.filter(menuItem => props.mobile || !menuItem.mobileOnly);

  return (
    <>
      {
        menuItemsToRender.map(menuItem => menuItem.menuItems ?
          <Submenu submenu={menuItem} submenuContainerClassName={submenuContainerClassName} key={`submenu_${menuItem.label}`} />
          : <MenuItem menuItem={menuItem} key={`menu-item_${menuItem.label}`}/>
        )
      }
    </>
  );
}

function MobileMenu() {
  return (
    <BurgerMenu right>
      <RawMenu mobile={true} />
    </BurgerMenu>
  );
}

function DesktopMenu() {
  return (
    <div className="desktop-menu-container">
      <RawMenu submenuContainerClassName="desktop-submenu-item-container" />
    </div>
  );
}

function Menu() {
  return (
    <>
      { useDesktopDisplay() ? <DesktopMenu /> : <MobileMenu /> }
    </>
  );
}

export default Menu;
