import { useState } from 'react';
import "./Menu.css";

function Menu() {
  const [isOpen, setMenuState] = useState(false);
  const slideMenu = () => setMenuState(!isOpen);

  return (
    <div>
        <div>
          <div onClick={slideMenu}>Menu</div>
        </div>
        <div className={isOpen ? 'menu open' : 'menu'}>
          <div onClick={slideMenu}>Back</div>
          <hr/>
          <div>This is menu content</div>
        </div>
    </div>
  )
}

export default Menu