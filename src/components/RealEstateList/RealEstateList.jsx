//React
// import { useState, useEffect } from "react";

//React Router (v6)
import { Link } from "react-router-dom";

//Components
import SpinLoader from "../SpinLoader/SpinLoader";

//Utils
import { urlAPI } from "../../utils/constants/urlAPI";
import { useFetch } from "../../utils/hooks/useFetch";
import { log } from "../../utils/functions/helperFunctions";

function RealEstateList() {
  const { data, isLoading, hasError } = useFetch(urlAPI);

  return (
    <section className="home__real-estate-list">
      <template>
        <Link to={`/housing-file/${{}}`}>
          <div className="home__real-estate-item">
            <p className="home__real-estate-title">{""}</p>
            <img className="home__real-estate-thumbnail" alt="test" src={""} />
          </div>
        </Link>
      </template>

      {
        //
        isLoading ? (
          <SpinLoader />
        ) : (
          data.map((estateBuilding, index) => {
            const { id, title, cover } = estateBuilding;
            return (
              <Link
                to={`/housing-file/${id}`}
                key={`${id}-${index}`}
                className="home__real-estate-link"
              >
                <div className="home__real-estate-item">
                  <p className="home__real-estate-title">{title}</p>
                  <img
                    className="home__real-estate-thumbnail"
                    alt="test"
                    src={cover}
                  />
                </div>
              </Link>
            );
          })
        )
        //
      }
    </section>
  );
}

export default RealEstateList;
