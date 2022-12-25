import banner from "../../assets/images/photos/banner.png";

function PageBanner() {
  return (
    <section className="home__banner">
      <p className="home__banner-slogan">Chez vous, partout et ailleurs</p>
      <img
        src={banner}
        alt="Bannière de la page d'accueil de Kasa"
        className="home__banner-image"
      />
    </section>
  );
}

export default PageBanner;
