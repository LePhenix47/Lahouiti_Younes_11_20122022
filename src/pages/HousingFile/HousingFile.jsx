//React Router (v6)
import { useParams, Navigate } from "react-router-dom";

//Components
import Carousel from "../../components/Carousel/Carousel";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tag from "../../components/Tag/Tag";
import HousingProfile from "../../components/HousingProfile/HousingProfile";
import StarRating from "../../components/StarRating/StarRating";

//Utils
import { log } from "../../utils/functions/helperFunctions";
import { urlAPI } from "../../utils/constants/urlAPI";
import { useFetch } from "../../utils/hooks/useFetch";

import {
  changeMetadataTitle,
  changeMetadataDescription,
} from "../../utils/functions/metadataFunctions";

//Page
function HousingFile() {
  const { id } = useParams();

  // const { data, isLoading, hasError } = useFetch(urlAPI);

  //TEMPORARY FIX
  const data = [
    {
      id: "c67ab8a7",
      title: "Appartement cosy",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
      ],
      description:
        "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
      host: {
        name: "Nathalie Jean",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
      },
      rating: "5",
      location: "Ile de France - Paris 17e",
      equipments: [
        "Équipements de base",
        "Micro-Ondes",
        "Douche italienne",
        "Frigo",
        "WIFI",
      ],
      tags: ["Batignolle", "Montmartre"],
    },
  ];

  const arrayOfIds = data.map((estateData) => {
    return estateData.id;
  });

  const idInUrlParamsExists = arrayOfIds.some((idString) => {
    return idString === id;
  });

  //If the id doesn't not exist in the array of ids → redirect the user to the error page
  if (!idInUrlParamsExists) {
    return <Navigate to="/Error_Page_404" replace={true} />;
  }

  const indexOfHousing = arrayOfIds.findIndex((idString) => {
    return idString === id;
  });

  const dataOfHousing = data.filter((idString, index) => {
    return index === indexOfHousing;
  });

  log({ indexOfHousing, dataOfHousing });
  const {
    title,
    pictures,
    description,
    rating,
    host,
    location,
    equipments,
    tags,
  } = dataOfHousing[0];

  //TEMPORARY FIX

  changeMetadataTitle(title);
  changeMetadataDescription(description);

  return (
    <main className="housing-file">
      <Carousel pictures={pictures} />

      <div className="housing-file__housing-profile-container">
        <section className="housing-file__title-location-container">
          <h1 className="housing-file__title">{title}</h1>
          <h2 className="housing-file__location">{location}</h2>
          <ul className="housing-file__tags">
            {tags.map((tag, index) => {
              return (
                <li key={`${tag}-${index}`}>
                  <Tag textValue={tag} />
                </li>
              );
            })}
          </ul>
        </section>
        <section className="housing-file__profile-star-rating">
          <HousingProfile profileData={host} />
          <StarRating fullStars={rating} />
        </section>
      </div>
      <section className="housing-file__dropdown-menus">
        <Dropdown textType="Description" textValue={description} />
        <Dropdown textType="Équipements" textValue={equipments} />
      </section>
    </main>
  );
}

export default HousingFile;
