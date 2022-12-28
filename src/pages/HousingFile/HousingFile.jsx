//React Router (v6)
import { useParams, Navigate } from "react-router-dom";

//Components
import Carousel from "../../components/Carousel/Carousel";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tag from "../../components/Tag/Tag";
import HousingProfile from "../../components/HousingProfile/HousingProfile";
import StarRating from "../../components/StarRating/StarRating";

//Utils
import { urlAPI } from "../../utils/constants/urlAPI";
import { useFetch } from "../../utils/hooks/useFetch";
import { log } from "../../utils/functions/helperFunctions";

//Page
function HousingFile() {
  const { id } = useParams();

  log({ id });

  const { data, isLoading, hasError } = useFetch(urlAPI); //async

  log({ data });

  const arrayOfIds = data.map((estateData) => {
    return estateData.id;
  });

  log({ arrayOfIds });
  const idInUrlParamsExists = arrayOfIds.some((idString) => {
    return idString === id;
  });

  log({ id, data, arrayOfIds, idInUrlParamsExists });

  if (!idInUrlParamsExists) {
    return <Navigate to="/404" replace={true} />;
  }
  //  const { data, isLoading, hasError } = useFetch(urlAPI);
  return (
    <main className="housing-file">
      <Carousel />

      <div className="housing-file__housing-profile-container">
        <section className="housing-file__title-location-container">
          <h1 className="housing-file__title">
            Cozy loft on the Canal Deez Nuts
          </h1>
          <h2 className="housing-file__location">Ohio, ohio</h2>
          <ul className="housing-file__tags">
            <li>
              <Tag textValue={""} />
            </li>
            <li>
              <Tag textValue={""} />
            </li>
            <li>
              <Tag textValue={""} />
            </li>
          </ul>
        </section>
        <section className="housing-file__profile-star-rating">
          <HousingProfile />
          <StarRating />
        </section>
      </div>
      <section className="housing-file__dropdown-menus">
        <Dropdown textType="text" />
        <Dropdown textType="list" />
      </section>
    </main>
  );
}

export default HousingFile;
