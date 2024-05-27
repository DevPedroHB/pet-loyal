import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

export function NotFound() {
  const navigate = useNavigate();

  function navigateToBack() {
    navigate(-1);
  }

  return (
    <main className={style.container}>
      <div>
        <h1>Pagina não encontrada.</h1>
        <button onClick={navigateToBack}>Voltar</button>
      </div>
    </main>
  );
}
