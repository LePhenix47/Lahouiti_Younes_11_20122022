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

//Page
function HousingFile() {
  const { id } = useParams();

  const { data, isLoading, hasError } = useFetch(urlAPI);

  const arrayOfIds = data.map((estateData) => {
    return estateData.id;
  });

  const idInUrlParamsExists = arrayOfIds.some((idString) => {
    return idString === id;
  });

  log({ id, data, isLoading, hasError, arrayOfIds, idInUrlParamsExists });
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
