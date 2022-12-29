//React
import { useState } from "react";

//Utils
import { log } from "../../utils/functions/helperFunctions";

function Carousel({ pictures }) {
  const hasMoreThanOnePicture = pictures.length > 1;
  const amountOfPictures = pictures.length;

  const [indexOfImage, updateIndexOfImage] = useState(0);

  const [slideClass, setSlideClass] = useState("");

  const carouselData = {
    direction: 0,
    imageOutIndex: 0,
    imageInIndex: 0,
  };

  let imageUrl = pictures[indexOfImage];

  function changeImage(event) {
    resetSlideAnimation();

    const arrowDirection = event.currentTarget.dataset.arrowDirection;

    //We get the direction
    arrowDirection === "right"
      ? (carouselData.direction = 1)
      : (carouselData.direction = -1);

    log({ arrowDirection });

    carouselData.imageOutIndex = indexOfImage;

    //We add the different exceptions to the Image
    const userClicksNextOnLastImage =
      carouselData.imageOutIndex + carouselData.direction > pictures.length - 1;
    const userClicksPreviousOnFirstImage =
      carouselData.imageOutIndex + carouselData.direction < 0;

    if (userClicksNextOnLastImage) {
      carouselData.imageInIndex = 0;
    } else if (userClicksPreviousOnFirstImage) {
      carouselData.imageInIndex = pictures.length - 1;
    } else {
      //Just pass to the previous/next slide
      carouselData.imageInIndex =
        carouselData.imageOutIndex + carouselData.direction;
    }

    addSlideAnimations(arrowDirection);
  }

  function addSlideAnimations(direction) {
    const oppositeDirection = direction === "right" ? "left" : "right";
    setSlideClass(`carousel__image--out-${oppositeDirection}`);

    setTimeout(() => {
      updateIndexOfImage(carouselData.imageInIndex);
      log(carouselData);
    }, 1_000);

    setTimeout(() => {
      setSlideClass(`carousel__image--in-${direction}`);
    }, 1_000);
  }

  function resetSlideAnimation() {
    setSlideClass("");
  }
  return (
    <section className="carousel">
      {/*Left arrow*/}
      <svg
        data-arrow-direction="left"
        onClick={(e) => {
          changeImage(e);
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
          changeImage(e);
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
        <img
          src={imageUrl}
          alt="Test"
          className={`carousel__image ${slideClass}`}
        />
      </figure>
      <p className="carousel__image-index">
        {indexOfImage + 1}/{amountOfPictures}
      </p>
    </section>
  );
}

export default Carousel;
