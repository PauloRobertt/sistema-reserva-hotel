import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { OrganizarImg } from '../../assets/OrganizarImg.js';

import styles from '../Auth.module.css';

import styleLinkButton from '../../components/LinkButton.module.css';

import Input from '../../components/Input.jsx';
import Button from '../../components/SubmitButton.jsx';
import LinkButton from '../../components/LinkButton.jsx';

//React Icons
import { MdOutlineEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";

export default function Login() {
    const navegate = useNavigate();

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
            credentials: 'include',
            body: JSON.stringify(usuario)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Erro na requisição: ${res.status}`)
                }

                return res.json();
            })
            .then((data) => {
                localStorage.setItem('AcessToken', data.token);
                navegate('/');
            })
            .catch((error) => { console.log(error) })
    }

    return (
        <div className={styles.container}>
            <figure className={styles.containerImg}>
                <img src={OrganizarImg.Image6} alt="" />
                <div className={styles.textImg}>
                    <h2>
                        Bem-Vindo ao <br />HotelEasy
                    </h2>
                </div>
            </figure>
            <div className={styles.session}>
                <h1>Login</h1>
                <small>Por favor use seu email e senha para acessar.</small>
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
                <p className={styles.link}>
                    Não tem uma conta?
                    <LinkButton
                        caminho='/register'
                        text='Cadastre-se'
                        className={styleLinkButton.LinkLoginRegister}
                    />
                </p>
            </div>
        </div>
    );
}
