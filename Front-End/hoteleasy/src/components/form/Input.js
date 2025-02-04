import styles from './Input.module.css';
import { useState } from 'react';

export default function Input({ icon, iconCadeadoLock, iconCadeadoUnLock, type, text, handleOnChange, value, placeholder, maxLength, minLength, name }) {
  const [showPassword, setShowPassword] = useState(true);
  const [inputType, setInputType] = useState(type);

  function handleShowPassword() {
    if (inputType === 'email') {
      setInputType('email');
    } else if (!showPassword) {
      setShowPassword(true)
      setInputType('password');
    } else {
      setShowPassword(false)
      setInputType('text');
    }
  }

  return (
    <div className={styles.container}>
      <label className={styles.icon}>{icon}</label>
      <input
        type={inputType}
        text={text}
        onChange={handleOnChange}
        value={value}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        name={name}
        required
      />
      <button className={!iconCadeadoLock ? styles.buttonPasswordHidden : styles.buttonPasswordShow} type='button' onClick={handleShowPassword}>
        {showPassword ? iconCadeadoLock : iconCadeadoUnLock}
      </button>
    </div>
  );
}
