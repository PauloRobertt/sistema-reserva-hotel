import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <h1>Encontre o hotel ideal para sua viagem</h1>
        <p>Compare preços, escolha data reserve em pouco tempo.</p>
      </div>
    </div>
  );
}
