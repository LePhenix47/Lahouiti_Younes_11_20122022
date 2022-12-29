import { log } from "../../utils/functions/helperFunctions";

function StarRating({ fullStars }) {
  const arrayOfFullStars = [];
  const arrayOfEmptyStars = [];

  for (let i = 1; i <= 5; i++) {
    i <= fullStars ? arrayOfFullStars.push(i) : arrayOfEmptyStars.push(i);
  }

  return (
    //star-rating__star star-rating__star--full
    //star-rating__star star-rating__star--empty
    <section className="star-rating">
      {arrayOfFullStars.map((number, index) => {
        return (
          <svg
            key={`${number} - ${index}`}
            className={"star-rating__star star-rating__star--full"}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
              fill="currentColor"
            />
          </svg>
        );
      })}

      {arrayOfEmptyStars.map((number, index) => {
        return (
          <svg
            key={`-${number} - ${index}`}
            className={"star-rating__star star-rating__star--empty"}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
              fill="currentColor"
            />
          </svg>
        );
      })}
    </section>
  );
}

export default StarRating;

/*
<svg
        className={"star-rating__star star-rating__star--full"}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
          fill="currentColor"
        />
      </svg>
*/
