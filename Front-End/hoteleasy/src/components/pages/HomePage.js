import { useEffect, useState } from "react";

import Header from "../layout/Header.js";
import QuartosCard from "../layout/QuartosCard.js";

import styles from './HomePage.module.css';

export default function HomePage() {
    const [quartos, setQuartos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/quarto", {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setQuartos(data);
            })
            .catch((error) => { console.log(error) })
    }, []);

    return (
        <div>
            <Header />
            <div className={styles.banner}>
                <h1>HotelEasy</h1>
                <h2>
                    Encontre o lugar perfeito para sua próxima viagem.
                </h2>
            </div>
            <div className={styles.containerHotels}>
                <div className={styles.filters}></div>
                <div className={styles.conteudoHotels}>
                    <div className={styles.search}></div>
                    <div className={styles.hotels}>
                        {quartos.length > 0
                            ? quartos.map((quarto) => {
                                return (<QuartosCard
                                    id={quarto.id}
                                    imagemUrl={quarto.imagemUrl}
                                    nomeQuarto={quarto.nomeQuarto}
                                    preco={quarto.preco}
                                    idHotel={quarto.idHotel}
                                    disponibilidade={quarto.disponibilidade}
                                />)
                            })
                            : <p>Nenhum quarto encontrado!</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}