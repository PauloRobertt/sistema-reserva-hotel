import styles from './Menu.module.css';
import LinkButton from '../components/LinkButton.jsx';
import stylesLinkButton from '../components/LinkButton.module.css';

//React Icons
import { TfiClose } from "react-icons/tfi";
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { FaCalendarCheck } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function Menu({stateMenu, toggleMenu}) {

    return (
        <div className={`${styles.menu} ${stateMenu ? styles.ativo : styles.fechado}`}>
            <div className={styles.iconMenu}>
                <TfiClose
                    onClick={toggleMenu}
                    size={22}
                />
            </div>
            <div className={styles.contentMenu}>
                <div className={styles.link}>
                    <FiUser
                        size={24}
                    />
                    <LinkButton
                        text='Realizar Login'
                        caminho=""
                        className={stylesLinkButton.LinkHeader}
                    />
                </div>
                <div className={styles.link}>
                    <CiHeart
                        size={24}
                    />
                    <LinkButton
                        text='Meus Favoritos'
                        caminho=""
                        className={stylesLinkButton.LinkHeader}
                    />
                </div>
                <div className={styles.link}>
                    <FaCalendarCheck
                        size={24}
                    />
                    <LinkButton
                        text='Minhas Reservas'
                        caminho=""
                        className={stylesLinkButton.LinkHeader}
                    />
                </div>
                <div className={styles.link}>
                    <IoIosHelpCircleOutline
                        size={24}
                    />
                    <LinkButton
                        text='Ajuda'
                        caminho=""
                        className={stylesLinkButton.LinkHeader}
                    />
                </div>
            </div>
        </div>
    );
}