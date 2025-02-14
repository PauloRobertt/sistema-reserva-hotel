import { useState } from 'react';

import styles from './Login.module.css';

import styleLinkButton from '../layout/LinkButton.module.css';

import Input from '../form/Input.js';
import Button from '../form/SubmitButton.js';
import LinkButton from '../layout/LinkButton.js';

//imagem
import photo from '../../img/photo_form.jpg';

//React Icons
import { MdOutlineEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";

export default function Login() {
    const [usuario, setUsuario] = useState({});

    const submit = (e) => {
        e.preventDefault();
        realizarLogin(usuario);
    }

    function handleEmail(e) {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }

    function realizarLogin(usuario) {
        fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
            .then((res) => res.json())
            .then((data) => {
                const token = data.token
                localStorage.setItem('token', token);
            })
            .catch((error) => { console.log(error) })
    }

    return (
        <div className={styles.container}>
            <div className={styles.sessionLogin}>
                <h2>Login</h2>
                <small>Por favor use seu email e senha para acessar</small>
                <form onSubmit={submit} className={styles.form}>

                    <Input
                        icon={<MdOutlineEmail />}
                        type='email'
                        text='E-mail'
                        name='email'
                        handleOnChange={handleEmail}
                        value={usuario.email}
                        maxLength={100}
                        placeholder='Digite seu endereço de e-mail'
                    />
                    <Input
                        iconCadeadoLock={<FaLock />}
                        iconCadeadoUnLock={<FaUnlock />}
                        icon={<FaKey />}
                        type='password'
                        text='Senha'
                        name='senha'
                        handleOnChange={handleEmail}
                        value={usuario.senha}
                        maxLength={32}
                        minLength={8}
                        placeholder='Digite sua senha'
                    />


                    <LinkButton
                        caminho='/register'
                        text='Esqueceu sua senha?'
                        className={styleLinkButton.LinkLoginRegister}
                    />

                    <Button
                        tipo='submit'
                        text='Login'
                    />

                </form>
                <p className={styles.linkRegister}>
                    Não tem uma conta?
                    <LinkButton
                        caminho='/register'
                        text='Cadastre-se'
                        className={styleLinkButton.LinkLoginRegister}
                    />
                </p>
            </div>
            <div className={styles.containerImagem}>
                <img src={photo} alt='' />
            </div>
        </div>
    );
}