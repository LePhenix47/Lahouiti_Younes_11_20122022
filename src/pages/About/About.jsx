//Components
import PageBanner from "../../components/PageBanner/PageBanner";
import Dropdown from "../../components/Dropdown/Dropdown";

//Images
import Banner from "../../assets/images/photos/banner-about.png";

function About() {
  const classNameForBanner = "about__banner";

  const sourceForAboutBanner = Banner;

  return (
    <main className="about">
      <PageBanner
        classNameForBanner={classNameForBanner}
        source={sourceForAboutBanner}
      />
      <section className="about__dropdowns">
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </section>
    </main>
  );
}

export default About;
