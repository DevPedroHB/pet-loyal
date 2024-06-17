import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/hero.png";
import logoImg from "../../../assets/images/logo.svg";
import style from "./style.module.css";

export function Home() {
  return (
    <>
      <header className={style.hero__header}>
        <div>
          <img src={logoImg} alt="PteLoyal logo" className={style.hero__logo} />
          <h1>PetLoyal</h1>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <main className={style.hero__main}>
        <div className={style.hero__presentation}>
          <h2>Adote um pet</h2>
          <p>
            Bem-vindo ao PetLoyal, o site para adoção de pets. Aqui, acreditamos
            que cada animal merece um lar cheio de amor e carinho. Navegue por
            nossa seleção de animais que estão esperando por uma família. Adotar
            é um ato de amor que transforma vidas — tanto a sua quanto a deles.
          </p>
          <Link to="/sign-in">
            <button>Adotar</button>
          </Link>
        </div>
        <div className={style.hero__container_image}>
          <img src={heroImage} alt="Hero image" className={style.hero__image} />
        </div>
      </main>
    </>
  );
}
