import { useState } from 'react';

import styles from './Header.module.css';
import LinkButton from './LinkButton.js';
import stylesLinkButton from './LinkButton.module.css';
import Menu from './Menu.js';

//ReactIcons
import { SlMenu } from "react-icons/sl";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu(){
        setIsMenuOpen((prev) => !prev);
    }

    return (
        <div className={styles.sectionHeader}>
            <div className={`maxSection ${styles.conteudoHeader}`}>
                <h2>HotelEasy</h2>
                <div className={styles.contentLink}>
                    <nav className={styles.LinksHeader}>
                        <LinkButton
                            text='Início'
                            caminho=""
                            className={stylesLinkButton.LinkHeader}
                        />
                        <LinkButton
                            text='Hoteis'
                            caminho=""
                            className={stylesLinkButton.LinkHeader}
                        />
                        <LinkButton
                            text='Contato'
                            caminho=""
                            className={stylesLinkButton.LinkHeader}
                        />
                    </nav>
                    <div className={styles.iconMenu}>
                        <SlMenu
                            onClick={toggleMenu}
                            size={23}
                            color='#696868'
                        />
                    </div>
                </div>
            </div>
            <Menu
                stateMenu={isMenuOpen}
                toggleMenu={toggleMenu}
            />
        </div>
    );
}