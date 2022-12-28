//Components
import PageBanner from "../../components/PageBanner/PageBanner";
import Dropdown from "../../components/Dropdown/Dropdown";

//Images
import Banner from "../../assets/images/photos/banner-about.png";

function About() {
  const classNameForBanner = "about__banner";

  const sourceForAboutBanner = Banner;
  const textValues = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  ];

  return (
    <main className="about">
      <PageBanner
        classNameForBanner={classNameForBanner}
        source={sourceForAboutBanner}
      />
      <section className="about__dropdowns">
        <Dropdown textType="Fiabilité" textValue={textValues[0]} />
        <Dropdown textType="Respect" textValue={textValues[1]} />
        <Dropdown textType="Service" textValue={textValues[2]} />
        <Dropdown textType="Sécurité" textValue={textValues[3]} />
      </section>
    </main>
  );
}

export default About;
