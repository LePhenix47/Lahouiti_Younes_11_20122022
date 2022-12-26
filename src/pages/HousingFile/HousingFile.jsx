//Components
import Carousel from "../../components/Carousel/Carousel";

import Dropdown from "../../components/Dropdown/Dropdown";

import Tag from "../../components/Tag/Tag";

import HousingProfile from "../../components/HousingProfile/HousingProfile";

import StarRating from "../../components/StarRating/StarRating";

//Page
function HousingFile() {
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
            {/*Add condition here*/}
            <li>
              <Tag />
            </li>
            <li>
              <Tag />
            </li>
            <li>
              <Tag />
            </li>
          </ul>
        </section>
        <section className="housing-file__profile-star-rating">
          <HousingProfile />
          <StarRating />
        </section>
      </div>
      <section className="housing-file__dropdown-menus">
        <Dropdown />
        <Dropdown />
      </section>
    </main>
  );
}

export default HousingFile;
