import { useState } from "react";

import styles from "./Header.module.css";

//Components
import Menu from "../Menu/Menu.jsx";
import LinkButton from "../../components/LinkButton/LinkButton.jsx";
import stylesLinkButton from "../../components/LinkButton/LinkButton.module.css";

import { OrganizarImg } from "../../assets/OrganizarImg.js";

//ReactIcons
import { SlMenu } from "react-icons/sl";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <div className={styles.sectionHeader}>
      <div className={`maxSection ${styles.conteudoHeader}`}>
        <div className={styles.headerLogo}>
          <img src={OrganizarImg.LogoAzul} alt="" />
          <h1>
            Hotel<span>Easy</span>
          </h1>
        </div>
        <div className={styles.contentLink}>
          <nav className={styles.LinksHeader}>
            <LinkButton
              text="Início"
              caminho=""
              className={stylesLinkButton.LinkHeader}
            />
            <LinkButton
              text="Hoteis"
              caminho=""
              className={stylesLinkButton.LinkHeader}
            />
            <LinkButton
              text="Contato"
              caminho=""
              className={stylesLinkButton.LinkHeader}
            />
          </nav>
          <div className={styles.iconMenu}>
            <SlMenu onClick={toggleMenu} size={23} color="#696868" />
          </div>
        </div>
      </div>
      <Menu stateMenu={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}
