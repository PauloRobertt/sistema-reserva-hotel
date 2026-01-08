import styles from "./Menu.module.css";
import LinkButton from "../../components/LinkButton/LinkButton.jsx";
import stylesLinkButton from "../../components/LinkButton/LinkButton.module.css";

//React Icons
import { TfiClose } from "react-icons/tfi";
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { FaCalendarCheck } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function Menu({ stateMenu, toggleMenu }) {
  return (
    <div
      className={`${styles.menu} ${stateMenu ? styles.ativo : styles.fechado}`}
    >
      <div className={styles.iconMenu}>
        <TfiClose onClick={toggleMenu} size={22} />
      </div>
      <div className={styles.contentMenu}>
        <div className={styles.link}>
          <LinkButton
            icone={<FiUser size={24} />}
            text="Realizar Login"
            caminho=""
            className={stylesLinkButton.LinkMenu}
          />
        </div>
        <div className={styles.link}>
          <LinkButton
            icone={<CiHeart size={24} />}
            text="Meus Favoritos"
            caminho=""
            className={stylesLinkButton.LinkMenu}
          />
        </div>
        <div className={styles.link}>
          <LinkButton
            icone={<FaCalendarCheck size={24} />}
            text="Minhas Reservas"
            caminho=""
            className={stylesLinkButton.LinkMenu}
          />
        </div>
        <div className={styles.link}>
          <LinkButton
            icone={<IoIosHelpCircleOutline size={24} />}
            text="Ajuda"
            caminho=""
            className={stylesLinkButton.LinkMenu}
          />
        </div>
      </div>
    </div>
  );
}
