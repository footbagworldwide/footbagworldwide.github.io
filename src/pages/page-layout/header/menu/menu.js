import './menu.css';
import { Link, useLocation } from 'react-router-dom';
import menuItems from './menu-data';
import { useDesktopDisplay } from '../../../../hooks/display-hook';
import { useEffect, useState, useRef } from 'react';

function MenuItem(props) {
  const menuItem = props.menuItem;

  return (
    <div className="menu-item">
      <strong><Link to={menuItem.route}>{menuItem.label}</Link></strong>
    </div>
  );
}

function closeOnOutsideClick(menuRef, menuVisible, setMenuVisible) {
  const closeOpenMenu = (e) => {
    if (menuRef.current && menuVisible && !menuRef.current.contains(e.target)){
      setMenuVisible(false)
    }
  };

  document.addEventListener('mousedown', closeOpenMenu);
}

function Submenu(props) {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const submenu = props.submenu;
  const submenuContainerClassName = props.submenuContainerClassName;

  const submenuRef = useRef();
  closeOnOutsideClick(submenuRef, showSubmenu, setShowSubmenu);

  const SubmenuContainer = () => {
    if(showSubmenu) {
      return (
        <div className={"submenu-item-container " + submenuContainerClassName}>
          {
            submenu.menuItems.map(menuItem =>
              <div className="menu-item submenu-item" key={`menu-item_${menuItem.label}`}>
                <Link to={menuItem.route}>{menuItem.label}</Link>
              </div>
            )
          }
        </div>
      );
    } else {
      return null;
    }
  }

  const SubmenuArrow = () =>{
    if(showSubmenu) {
      return (
        <>
          <i className="fa-solid fa-chevron-down submenu-arrow"></i>
        </>
      );
    } else {
      return (
        <>
          <i className="fa-solid fa-chevron-right submenu-arrow"></i>
        </>
      );
    }
  }

  return (
    <div ref={submenuRef}>
      <div
        className={`submenu ${showSubmenu ? "submenu-active" : ""}`}
        onClick={() => { setShowSubmenu(!showSubmenu) }}
      >
        <strong className="menu-item">{submenu.label}</strong> <SubmenuArrow />
        <SubmenuContainer />
      </div>
    </div>
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
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  // close mobile menu on page change
  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  const mobileMenuRef = useRef();
  closeOnOutsideClick(mobileMenuRef, showMenu, setShowMenu);

  const menu = () => (
    <div ref={mobileMenuRef} className="mobile-menu-container">
      <RawMenu mobile={true} />
    </div>
  );

  return (
    <div className="burger-menu">
      <i className="fa fa-bars burger-menu-icon" onClick={() => { setShowMenu(!showMenu) }}></i>
      { showMenu && menu() }
    </div>
  )
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
