import styles from "./Banner.module.css";
import stylesLinkButton from "../../components/LinkButton.module.css";

// Componentes
import LinkButton from "../../components/LinkButton.jsx";

// React Icons
import { FaStar } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <h1>Encontre o hotel ideal para sua viagem</h1>
        <p>Compare preços, escolha data reserve em pouco tempo.</p>
      </div>
      <div className={styles.containerSaibaMais}>
        <h2>Reserve com confiança</h2>
        <ul>
          <li>
            <FaStar size="1.5em" color="var(--SecondaryColor)" />
            <p>
              Avaliações reais
              <small>Avaliações reais de hóspedes verificados</small>
            </p>
          </li>
          <li>
            <IoIosSearch size="1.5em" color="var(--SecondaryColor)" />
            <p>
              Procura fácil e rápida
              <small>Busque e compare hotéis em segundos</small>
            </p>
          </li>
          <li>
            <IoCloseCircleOutline size="1.5em" color="var(--SecondaryColor)" />
            <p>
              Cancelamento fácil
              <small>Cancelamento fácil em hotéis selecionados</small>
            </p>
          </li>
        </ul>
        <LinkButton
          className={stylesLinkButton.LinkButtonSaibaMais}
          text="Saiba Mais"
        />
      </div>
    </div>
  );
}
