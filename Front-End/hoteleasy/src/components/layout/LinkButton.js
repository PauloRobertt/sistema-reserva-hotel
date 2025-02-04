import {Link} from 'react-router-dom';
import styles from './LinkButton.module.css';

export default function LinkButton({text, caminho}){
    return(
        <Link className={styles.button} to={caminho}>
            {text}
        </Link>
    );
}