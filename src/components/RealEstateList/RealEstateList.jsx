//React
import { useState, useEffect } from "react";

//React Router (v6)
import { Link } from "react-router-dom";

//Utils
import { urlAPI } from "../../utils/constants/urlAPI";
import { useFetch } from "../../utils/hooks/useFetch";
import { log, formatText } from "../../utils/functions/helperFunctions";

function RealEstateList() {
  const urlTest =
    "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTkyODd8MHwxfHNlYXJjaHwxfHxyYW5kb218ZW58MHx8MXx8MTY3MjA0MTkxOQ&ixlib=rb-4.0.3&q=80&w=1080";

  log(useFetch(urlAPI));

  log(formatText("BRUH", "titlecase"));
  return (
    <section className="home__real-estate-list">
      {/* Will make it dynamic with JS  and react hooks later */}

      <template>
        <Link to={`/housing-file/${{}}`}>
          <div className="home__real-estate-item">
            <p className="home__real-estate-title">{""}</p>
            <img className="home__real-estate-thumbnail" alt="test" src={""} />
          </div>
        </Link>
      </template>

      <Link to="/housing-file/69">
        <div className="home__real-estate-item">
          <p className="home__real-estate-title">Titre de la location</p>
          <img
            className="home__real-estate-thumbnail"
            alt="test"
            src={urlTest}
          />
        </div>
      </Link>

      {/*        */}
    </section>
  );
}

export default RealEstateList;
