import { useEffect, useState } from "react";

import styles from './QuartosCard.module.css';

export default function QuartosCard({ id, nomeQuarto, preco, disponibilidade, imagemUrl, idHotel }) {
    const [nomeHotels, setNomeHotels] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/hotel/${idHotel}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setNomeHotels(data.nomeHotel);
            })
            .catch((error) => { console.log(error) })
    }, []);

    return (
        <div className={styles.QuartoCard}>
            <figure className={styles.figure}>
                <img src={imagemUrl} alt="Imagem do hotel" />
            </figure>
            <div className={styles.contentCard}>
                <small>{nomeQuarto}</small>
                <h3>{nomeHotels}</h3>
                <p>Preço: R$ {preco}</p>
                <span className={disponibilidade? styles.spanDisponivel: styles.spanIndisponivel}>{disponibilidade ? "Quarto Disponivel" : "Indisponivel"}</span>
            </div>
        </div>
    )
}
