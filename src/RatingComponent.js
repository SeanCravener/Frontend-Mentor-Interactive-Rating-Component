import { useState } from "react";
import "./RatingComponent.css";

export default function RatingComponent() {
  const [rating, setRating] = useState(0);
  const [msgToggle, setMsgToggle] = useState(true);

  return (
    <div class="component">
      {msgToggle ? (
        <div class="rating">
          <div class="rating__star"></div>
          <p class="rating__title">How did we do?</p>
          <p class="rating__text">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div class="rating__buttons">
            {[1, 2, 3, 4, 5].map((item) => (
              <button
                class="rating__button"
                onClick={() => {
                  setRating(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            class="rating__submit"
            onClick={() => {
              setMsgToggle(false);
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <div class="rating__submitted">
          <img
            class="rating__image"
            src="./images/illustration-thank-you.svg"
            alt="thank you"
          />
          <p class="rating__selected">You selected {rating} out of 5</p>
          <p class="rating__title">Thank you!</p>
          <p class="rating__text">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
}
