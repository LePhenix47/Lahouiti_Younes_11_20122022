//React Router (v6)
import { Link } from "react-router-dom";

//Utils
import {
  changeMetadataTitle,
  changeMetadataDescription,
} from "../../utils/functions/metadataFunctions";

function Error404() {
  changeMetadataTitle("Erreur 404 - Page non trouvée");
  changeMetadataDescription(
    "Aïe! Nous n'avons pas trouvé la page en question..."
  );

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
