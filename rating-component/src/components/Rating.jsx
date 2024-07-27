import "../components-styles/Rating.css";

import { ThankYou } from "../components/ThankYou";
import { useState } from "react";

export function Rating() {
    const [currentRating, setCurrentRating] = useState(null);
    /* null determines that no rating is shown when the component mounts */
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleRatingClick = (item) => {
        setCurrentRating(item);
    };

    const handleSubmitRating = () => {
        setIsSubmitted(true);
    };

    const handleReset = () => {
        setIsSubmitted(false);
    };

    const ratingItems = [1, 2, 3, 4, 5];

    return (
        <>
            <main className="page-container">
                <article className="rating-container">
                    <section className="star-container">
                        <img className="icon-star" src="/images/icon-star.svg" alt="icon-star" />
                    </section>
                    <h1>How did we do?</h1>
                    <p>
                        Please let us know how we did with your support request. All feedback is appreciated
                        to help us improve our offering!
                    </p>

                    <section className="rating-circles-container">
                        {ratingItems.map(item => (
                            <div
                                key={item}
                                className={`rating-item ${currentRating === item ? 'selected' : ''}`}
                                onClick={() => handleRatingClick(item)}>
                                {item}
                            </div>
                        ))}
                    </section>

                    {isSubmitted ? (
                        <ThankYou
                            currentRating={currentRating}
                            onReset={handleReset} />
                    ) : (
                        <button
                            onClick={handleSubmitRating}
                            disabled={!currentRating}>
                            SUBMIT
                        </button>
                    )}

                </article>
            </main>
        </>
    );
}