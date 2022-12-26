function HousingProfile() {
  const urlTest1 =
    "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTkyODd8MHwxfHNlYXJjaHwxfHxyYW5kb218ZW58MHx8MXx8MTY3MjA0MTkxOQ&ixlib=rb-4.0.3&q=80&w=1080";

  return (
    <section className="housing-profile">
      <p className="housing-profile__full-name">
        Quandale
        <br /> Dingle
      </p>
      <img src={urlTest1} alt="" className="housing-profile__picture" />
    </section>
  );
}

export default HousingProfile;
