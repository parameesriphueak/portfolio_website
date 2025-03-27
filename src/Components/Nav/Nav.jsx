import React, { useRef } from "react";
import navcss from "./../Nav/Nav.module.css";
function Nav() {
  const menu = useRef();

  const menuHandler = () => {
    menu.current.classList.toggle(navcss.showMenu);
  };

  return (
    <nav>
      <div className={navcss.logo}>
        <span>Paramee</span>
      </div>
      <ul ref={menu}>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Expertise">Expertise</a>
        </li>
        <li>
          <a href="#Project">Project</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <div className={navcss.navBtns}>
        <div className={navcss.social}>
          <a
            href="https://www.facebook.com/paramee.sriphueak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-facebook-line"></i>
          </a>
          <a
            href="https://www.instagram.com/paramee_g/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a
            href="https://line.me/ti/p/~paramee1313"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-line-line"></i>
          </a>
          <a
            href="https://github.com/parameesriphueak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-github-line"></i>
          </a>
        </div>
        <div className={navcss.bars} onClick={menuHandler}>
          <i className="ri-menu-line"></i>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
