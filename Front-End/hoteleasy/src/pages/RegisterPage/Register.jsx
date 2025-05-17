//Componentes
import Input from '../../components/Input.jsx';
import Button from '../../components/SubmitButton.jsx';
import styles from '../Auth.module.css';
import LinkButton from '../../components/LinkButton.jsx';
import stylesLinkButton from '../../components/LinkButton.module.css';

import { OrganizarImg } from '../../assets/OrganizarImg.js';

import { useState } from 'react';
import { useNavigate } from "react-router";
import { ToastContainer, toast, Bounce } from 'react-toastify';

//React Icons
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";

export default function Register() {
    const [usuario, setUsuario] = useState({});

    const navegate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        Register(usuario);
    }

    function handleEmail(e) {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }

    function Register(usuario) {
        fetch('http://localhost:3001/auth/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
            .then(async (res) => {
                if (!res.ok) {
                    const errorData = await res.json();

                    toast.warn(errorData.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                    });

                    throw new Error(`Erro na requisição: ${res.status}`);
                }

                return res.json();
            })
            .then((data) => {
                navegate("/login", { state: { executarFuncao: true } })
            })
            .catch((error) => {
                console.error('Erro na requisição: ', error)
            })
    }

    return (
        <div className={styles.container}>
            <figure className={styles.containerImg}>
                <img src={OrganizarImg.ImageHotel} alt="Imagem ilustrativa e minimalista de um hotel" />
                <div className={styles.textImg}>
                    <h2>
                        Bem-Vindo ao <br />HotelEasy
                    </h2>
                    <p>
                        Sua jornada começa com um clique.
                    </p>
                </div>
            </figure>
            <div className={styles.session}>
                <h1>REGISTRO</h1>
                <form onSubmit={submit} className={styles.form}>
                    <Input
                        icon={<FaRegUser />}
                        type='text'
                        text='Nome'
                        name='nome'
                        handleOnChange={handleEmail}
                        value={usuario.nome}
                        maxLength={100}
                        placeholder='Digite seu nome'
                    />

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

                    <Input
                        type='hidden'
                        name='role'
                        value={usuario.role = 'USER'}
                        handleOnChange={handleEmail}
                    />

                    <Button
                        tipo='submit'
                        text='Registrar'
                    />
                </form>
                <p className={styles.link}>
                    Já tem uma conta?
                    <LinkButton
                        caminho='/login'
                        text='Realizar Login'
                        className={stylesLinkButton.LinkLoginRegister}
                    />
                </p>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}
