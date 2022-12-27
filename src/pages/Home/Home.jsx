import PageBanner from "../../components/PageBanner/PageBanner";
import RealEstateList from "../../components/RealEstateList/RealEstateList";

import Banner from "../../assets/images/photos/banner.png";

function Home() {
  const classNameForBanner = "home__banner";
  const textForBanner = "Chez vous, partout et ailleurs";
  const sourceForHomeBanner = Banner;

  return (
    <main className="home">
      <PageBanner
        classNameForBanner={classNameForBanner}
        text={textForBanner}
        source={sourceForHomeBanner}
      />
      <RealEstateList />
    </main>
  );
}

export default Home;
