function PageBanner({ classNameForBanner, text, source }) {
  return (
    <section className={`${classNameForBanner}`}>
      {text && <p className="home__banner-slogan">{text}</p>}
      <img
        src={`${source}`}
        alt="Bannière de la page d'accueil de Kasa"
        className="home__banner-image"
      />
    </section>
  );
}

export default PageBanner;
