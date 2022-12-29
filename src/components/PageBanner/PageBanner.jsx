import SpinLoader from "../SpinLoader/SpinLoader";

function PageBanner({ classNameForBanner, text, source, isLoading }) {
  return (
    //We're using a react fragment to write this expression
    <>
      {isLoading ? (
        <SpinLoader />
      ) : (
        <section className={`${classNameForBanner}`}>
          {text && <h1 className="home__banner-slogan">{text}</h1>}
          <img
            src={`${source}`}
            alt="Bannière de la page d'accueil de Kasa"
            className="home__banner-image"
          />
        </section>
      )}
    </>
  );
}

export default PageBanner;

// <section className={`${classNameForBanner}`}>
//   {text && <h1 className="home__banner-slogan">{text}</h1>}
//   <img
//     src={`${source}`}
//     alt="Bannière de la page d'accueil de Kasa"
//     className="home__banner-image"
//   />
// </section>
