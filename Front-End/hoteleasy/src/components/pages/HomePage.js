<<<<<<< HEAD
import Header from "../layout/Header.js"
=======
import Header from "../layout/Header.js";
>>>>>>> 1205d97 (feat(front-end): adiciona seção de banner na HomePage)
import styles from './HomePage.module.css';

export default function HomePage(){
    return(
        <div>
            <Header />
<<<<<<< HEAD
            <div className={styles.sectionBanner}>
                <h1>HotelEasy</h1>
                <h3>Encontre o lugar perfeito para sua próxima viagem.</h3>
=======
            <div className={styles.banner}>
                <h1>HotelEasy</h1>
                <h2>
                    Encontre o lugar perfeito para sua próxima viagem.
                </h2>
>>>>>>> 1205d97 (feat(front-end): adiciona seção de banner na HomePage)
            </div>
        </div>
    )
}