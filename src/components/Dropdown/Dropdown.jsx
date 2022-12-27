import { useState } from "react";

function Dropdown() {
  const [isCollapsed, setCollapsed] = useState(false);

  return (
    <section className="dropdown">
      <div className="dropdown__container">
        <label
          htmlFor="test"
          className={`dropdown__label ${
            isCollapsed && "dropdown__label--active"
          }`}
        >
          <svg
            className="dropdown__label-icon"
            width="28"
            height="17"
            viewBox="0 0 28 17"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.80001 13.9866L3.16001 16.3466L14 5.50662L24.84 16.3466Z"
              fill="currentColor"
            />
          </svg>
        </label>
        <button
          className="dropdown__button"
          type="button"
          id={"test"}
          onClick={() => {
            setCollapsed(!isCollapsed);
          }}
        >
          dropdown button
        </button>
      </div>
      <div className="dropdown__content">
        <p
          className={`dropdown__text ${
            isCollapsed && "dropdown__text--active"
          }`}
        >
          Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer
          l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec
          5 lignes de métro et de nombreux bus. Logement parfait pour les
          voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de
          la gare de l'est (7 minutes à pied).
        </p>
      </div>
    </section>
  );
}

export default Dropdown;
