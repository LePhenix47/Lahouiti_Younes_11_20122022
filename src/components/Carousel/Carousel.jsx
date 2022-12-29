//Utils
import { log } from "../../utils/functions/helperFunctions";

function Carousel({ pictures }) {
  const hasMoreThanOnePicture = pictures.length > 1;
  const amountOfPictures = pictures.length;

  const sliderData = {
    direction: 0,
    slideOutIndex: 0,
    slideInIndex: 0,
  };

  log({ hasMoreThanOnePicture });

  function changeSlider(event) {
    const arrowDirection = event.target.dataset.arrowDirection;

    //We get the direction
    arrowDirection === "right"
      ? (sliderData.direction = 1)
      : (sliderData.direction = -1);

    //We get the index of the image the carousel is currently displaying

    //We add the different exceptions to the slider
    const userClicksNextOnLastSlide =
      sliderData.slideOutIndex + sliderData.direction > pictures.length - 1;
    const userClicksPreviousOnFirstSlide =
      sliderData.slideOutIndex + sliderData.direction < 0;

    if (userClicksNextOnLastSlide) {
      sliderData.slideInIndex = 0;
    } else if (userClicksPreviousOnFirstSlide) {
      sliderData.slideInIndex = pictures.length - 1;
    } else {
      //Just pass to the previous/next slide
      sliderData.slideInIndex = sliderData.slideOutIndex + sliderData.direction;
    }
  }
  return (
    <section className="carousel">
      {/*Left arrow*/}
      <svg
        data-arrow-direction="left"
        onClick={(e) => {
          log({ e, type: e.target.dataset.arrowDirection });
        }}
        className={`carousel__arrow carousel__arrow--left ${
          hasMoreThanOnePicture ? "show" : "hide"
        }`}
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
        data-arrow-direction="right"
        onClick={(e) => {
          log({ e, type: e.target.dataset.arrowDirection });
        }}
        className={`carousel__arrow carousel__arrow--right ${
          hasMoreThanOnePicture ? "show" : "hide"
        }`}
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
        {pictures.map((imageUrl, index) => {
          return (
            <img
              src={imageUrl}
              alt="Test"
              className={"carousel__image"}
              key={`${imageUrl} - ${index}`}
              data-index={index}
            />
          );
        })}
      </figure>
      <p className="carousel__image-index">1/{amountOfPictures}</p>
    </section>
  );
}

export default Carousel;
