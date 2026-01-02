import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";

export default function LinkButton({ text, caminho, className, icone }) {
  return (
    <Link className={`${styles.LinkButton} ${className}`} to={caminho}>
      {icone}
      {text}
    </Link>
  );
}
