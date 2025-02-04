import styles from './SubmitButton.module.css';

export default function SubmitButton({tipo,text}){
    return(
        <button className={styles.button} type={tipo}>{text}</button>
    )
}