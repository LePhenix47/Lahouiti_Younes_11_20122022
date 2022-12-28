function HousingProfile({ profileData }) {
  const { name, picture } = profileData;

  const splittedFullName = name.split(" ");

  const formattedName = (
    <p className="housing-profile__full-name">
      {splittedFullName[0]}
      <br />
      {splittedFullName[1]}
    </p>
  );

  return (
    <section className="housing-profile">
      {formattedName}
      <img
        src={picture}
        alt={`Profil de ${name}`}
        className="housing-profile__picture"
      />
    </section>
  );
}

export default HousingProfile;
