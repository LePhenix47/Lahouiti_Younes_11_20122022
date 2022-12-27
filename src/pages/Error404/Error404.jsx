import { Link } from "react-router-dom";

function Error404() {
  return (
    <main className="error-404">
      <h1 className="error-404__title error-404__text">404</h1>
      <h2 className="error-404__sub-title error-404__text">
        Oups ! La page que vous demandez n'existe pas.
      </h2>

      <Link to="/" className="error-404__link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default Error404;
