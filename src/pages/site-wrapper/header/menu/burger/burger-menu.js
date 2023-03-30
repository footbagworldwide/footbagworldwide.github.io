import './burger-menu.css';
import { slide as Menu } from 'react-burger-menu'
import RawMenu from '../raw/raw-menu';

function BurgerMenu() {
  return (
    <Menu right>
      <RawMenu />
    </Menu>
  );
}

export default BurgerMenu;
