import "./Header.css";
import { useRef } from "react";
function Header() {
  const BtnMenu = () => {
    navbar.current.classList.toggle("active");
    navbar.current.style.transition = ".5s";
    const lines = document.querySelectorAll(".line");
    lines.forEach((line) => {
      line.classList.toggle("activar");
    });
  };

  const navbar = useRef();

  return (
    <div>
      <header>
        <div className="logo">
          <span>
          
            Food<i className="fa-solid fa-pizza-slice"></i>
          </span>
        </div>
        <nav>
          <ul id="navbar" ref={navbar}>
            <li className="Navilist">
              <a href="#Home" className="Item">
                Home
              </a>
            </li>
            <li className="Navilist">
              <a href="#Cardapio" className="Item">
                Cardápios
              </a>
            </li>
            <li className="Navilist">
              <a href="#Contacto" className="Item">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <button className="menu" onClick={BtnMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </header>
    </div>
  );
}
export default Header;
