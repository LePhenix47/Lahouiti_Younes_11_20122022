//Components
import PageBanner from "../../components/PageBanner/PageBanner";
import RealEstateList from "../../components/RealEstateList/RealEstateList";

//Assets
import Banner from "../../assets/images/photos/banner.png";

//Utils
import { urlAPI } from "../../utils/constants/urlAPI";
import { useFetch } from "../../utils/hooks/useFetch";

function Home() {
  const classNameForBanner = "home__banner";
  const textForBanner = "Chez vous, partout et ailleurs";
  const sourceForHomeBanner = Banner;

  const { data, isLoading, hasError } = useFetch(urlAPI);

  return (
    <main className="home">
      <PageBanner
        classNameForBanner={classNameForBanner}
        text={textForBanner}
        source={sourceForHomeBanner}
      />
      <RealEstateList data={data} isLoading={isLoading} hasError={hasError} />
    </main>
  );
}

export default Home;
