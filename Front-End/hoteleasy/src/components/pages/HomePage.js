import Header from "../layout/Header.js"
import styles from './HomePage.module.css';

export default function HomePage(){
    return(
        <div>
            <Header />
            <div className={styles.sectionBanner}>
                <h1>HotelEasy</h1>
                <h3>Encontre o lugar perfeito para sua próxima viagem.</h3>
            </div>
        </div>
    )
}