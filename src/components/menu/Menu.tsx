import { useState } from 'react';
import "./Menu.css";
import menu from "../../asserts/images/menu.png";
import back from "../../asserts/images/back.png";

function Menu() {
  const [isMenuOpen, setMenuState] = useState(false);
  const slideMenu = () => setMenuState(!isMenuOpen);

  return (
    <div className="menuContainer">
        <div className="menuIcon">
          <img className="icon" src={menu} alt="Menu" onClick={slideMenu}/>
        </div>
        <div className={isMenuOpen ? 'menu open' : 'menu'}>
          <div className="menuTitleBar">
            <img className="icon" src={back} alt="Back" onClick={slideMenu}/>
            <h2 className="menuTitle">Menu</h2>
            {/* <div>Menu</div> */}
          </div>
          <hr/>
          <div>This is menu content</div>
        </div>
    </div>
  )
}

export default Menu