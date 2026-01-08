//Componentes
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/SubmitButton/SubmitButton.jsx";
import styles from "../Auth.module.css";
import LinkButton from "../../components/LinkButton/LinkButton.jsx";
import stylesLinkButton from "../../components/LinkButton/LinkButton.module.css";

import { OrganizarImg } from "../../assets/OrganizarImg.js";

import { useState } from "react";
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
  };

  function handleEmail(e) {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  }

  function Register(usuario) {
    fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro na requisição: ${res.status}`);
        }

        return res.json();
      })
      .then((data) => {
        navegate("/login", {
          state: { message: "Usuario criado com sucesso!" },
        });
      })
      .catch((error) => {
        console.error("Erro na requisição: ", error);
      });
  }

  return (
    <div className={styles.container}>
      <figure className={styles.containerImg}>
        <img
          src={OrganizarImg.ImageHotel}
          alt="Imagem ilustrativa e minimalista de um hotel"
        />
        <div className={styles.textImg}>
          <h2>
            Bem-Vindo ao <br />
            HotelEasy
          </h2>
          <p>Sua jornada começa com um clique.</p>
        </div>
      </figure>
      <div className={styles.session}>
        <h1>REGISTRO</h1>
        <form onSubmit={submit} className={styles.form}>
          <Input
            icon={<FaRegUser />}
            type="text"
            text="Nome"
            name="nome"
            handleOnChange={handleEmail}
            value={usuario.nome}
            maxLength={100}
            placeholder="Digite seu nome"
          />

          <Input
            icon={<MdOutlineEmail />}
            type="email"
            text="E-mail"
            name="email"
            handleOnChange={handleEmail}
            value={usuario.email}
            maxLength={100}
            placeholder="Digite seu endereço de e-mail"
          />

          <Input
            iconCadeadoLock={<FaLock />}
            iconCadeadoUnLock={<FaUnlock />}
            icon={<FaKey />}
            type="password"
            text="Senha"
            name="senha"
            handleOnChange={handleEmail}
            value={usuario.senha}
            maxLength={32}
            minLength={8}
            placeholder="Digite sua senha"
          />

          <Button tipo="submit" text="Registrar" />
        </form>
        <p className={styles.link}>
          Já tem uma conta?
          <LinkButton
            caminho="/login"
            text="Realizar Login"
            className={stylesLinkButton.LinkLoginRegister}
          />
        </p>
      </div>
    </div>
  );
}
