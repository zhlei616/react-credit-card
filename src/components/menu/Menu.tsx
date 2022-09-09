import { useState } from 'react';
import "./Menu.css";
import menu from "../../asserts/images/menu.png";
import back from "../../asserts/images/back.png";

function Menu() {
  const [isMenuOpen, setMenuState] = useState(false);
  const slideMenu = () => setMenuState(!isMenuOpen);

  return (
    <div>
        <div>
          <img className="icon" src={menu} alt="Menu" onClick={slideMenu}/>
        </div>
        <div className={isMenuOpen ? 'menu open' : 'menu'}>
          <img className="icon" src={back} alt="Back" onClick={slideMenu}/>
          <hr/>
          <div>This is menu content</div>
        </div>
    </div>
  )
}

export default Menu