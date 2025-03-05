import Header from "../layout/Header.js";
import styles from './HomePage.module.css';

export default function HomePage(){
    return(
        <div>
            <Header />
            <div className={styles.banner}>
                <h1>HotelEasy</h1>
                <h2>
                    Encontre o lugar perfeito para sua próxima viagem.
                </h2>
            </div>
        </div>
    )
}