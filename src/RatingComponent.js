import { useState } from "react";

export default function RatingComponent() {
  const [rating, setRating] = useState(0);
  const [msgToggle, setMsgToggle] = useState(true);

  return (
    <div class="component">
      {msgToggle ? (
        <div class="rating">
          <img src="../images/icon-star.svg" alt="star" />
          <p>How did we do?</p>
          <p>
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
        <div class="thank-you">
          <img src="./images/illustration-thank-you.svg" alt="thank you" />"
          <p>You selected {rating} out of 5</p>
          <p>
            Thank you! We appreciate you taking the time to give a rating. If
            you ever need more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
}
