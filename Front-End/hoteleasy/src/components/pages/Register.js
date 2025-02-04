//Componentes
import Input from '../form/Input.js';
import Button from '../form/SubmitButton.js';
import styles from './Register.module.css';
import LinkButton from '../layout/LinkButton.js';

//imagem
import photo from '../../img/photo_form.jpg';

import { useState } from 'react';
import { useNavigate } from "react-router";

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
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                navegate("/login", { state: { message: 'Usuario criado com sucesso!' } })
            })
            .catch((error) => { console.log(error) })
    }

    return (
        <div className={styles.container}>
            <div className={styles.sessionRegister}>
                <h2>Registro</h2>
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
                <p className={styles.linkLogin}>
                    Já tem uma conta?
                    <LinkButton
                        caminho='/login'
                        text='Realizar Login'
                    />
                </p>
            </div>
            <div className={styles.containerImagem}>
                <img src={photo} alt='' />
            </div>
        </div>
    );
}