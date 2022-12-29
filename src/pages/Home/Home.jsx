//Components
import PageBanner from "../../components/PageBanner/PageBanner";
import RealEstateList from "../../components/RealEstateList/RealEstateList";

//Assets
import Banner from "../../assets/images/photos/banner.png";

//Utils
import { urlAPI } from "../../utils/constants/urlAPI";
import { useFetch } from "../../utils/hooks/useFetch";
import {
  changeMetadataTitle,
  changeMetadataDescription,
} from "../../utils/functions/metadataFunctions";

function Home() {
  const classNameForBanner = "home__banner";
  const textForBanner = "Chez vous, partout et ailleurs";
  const sourceForHomeBanner = Banner;

  const { data, isLoading, hasError } = useFetch(urlAPI);
  changeMetadataTitle("Page d'accueil de Kasa");
  changeMetadataDescription("Bienvenue dans le site d'immobilier Kasa!");

  return (
    <main className="home">
      <PageBanner
        classNameForBanner={classNameForBanner}
        text={textForBanner}
        source={sourceForHomeBanner}
        isLoading={isLoading}
      />
      <RealEstateList data={data} isLoading={isLoading} hasError={hasError} />
    </main>
  );
}

export default Home;
