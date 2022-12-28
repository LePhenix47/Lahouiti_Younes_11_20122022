function Carousel({ pictures }) {
  const urlTest1 =
    "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTkyODd8MHwxfHNlYXJjaHwxfHxyYW5kb218ZW58MHx8MXx8MTY3MjA0MTkxOQ&ixlib=rb-4.0.3&q=80&w=1080";

  /*
Will contain 3 images :

1st one - For the previous image

2nd one - For the current image

3rd one - For the next image
*/
  return (
    <section className="carousel">
      {/*Left arrow*/}
      <svg
        className="carousel__arrow carousel__arrow--left"
        width="28"
        height="17"
        viewBox="0 0 28 17"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.80001 13.9866L3.16001 16.3466L14 5.50662L24.84 16.3466Z"
          fill="currentColor"
        />
      </svg>
      {/*Right arrow*/}
      <svg
        className="carousel__arrow carousel__arrow--right"
        width="28"
        height="17"
        viewBox="0 0 28 17"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.80001 13.9866L3.16001 16.3466L14 5.50662L24.84 16.3466Z"
          fill="currentColor"
        />
      </svg>
      {/*Carousel*/}
      <figure className="carousel__images-container">
        <img
          src={urlTest1}
          alt="Test"
          className={"carousel__image carousel__image"}
        />
      </figure>
      <p className="carousel__image-index">1/4</p>
    </section>
  );
}

export default Carousel;
