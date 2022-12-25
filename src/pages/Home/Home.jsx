import PageBanner from "../../components/PageBanner/PageBanner";
import RealEstateList from "../../components/RealEstateList/RealEstateList";

function Home() {
  return (
    <main className="home">
      <PageBanner />
      <RealEstateList />
    </main>
  );
}

export default Home;
