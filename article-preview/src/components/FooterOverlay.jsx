import "../components-styles/FooterOverlay.css";

import { useState } from "react";

export function FooterOverlay() {
    const [isSelected, setIsSelected] = useState(false);

    const handleIsSelected = () => {
        setIsSelected(!isSelected); // Toggle isSelected state
        console.log("handleIsSelected function called");
    };

    return (
        <>
            <div className="footer-container">
                <div className="footer-main">
                    <img className="img-avatar" src="/images/avatar-michelle.jpg" alt="image of article author" />
                    <div className="footer-text">
                        <h3>Michelle Appleton</h3>
                        <p className="footer-paragraph-text">
                            28 June 2020
                        </p>
                    </div>
                    <div className="share-icon-container">
                        <img className="share-icon" src="/images/icon-share.svg"
                            alt="share arrow icon"
                            onClick={handleIsSelected} // Toggle isSelected when the arrow is clicked
                        />
                    </div>
                </div>

                <div className={`footer-overlay ${isSelected ? 'show' : ''}`}>
                    {/* Social media icons within the overlay */}
                    <div className="footer-content">
                        <p className="text-share">SHARE</p>

                        <div className="icon-container">
                        <img className="icon-facebook" src="/images/icon-facebook.svg" alt="Facebook icon" />
                        <img className="icon-twitter" src="/images/icon-twitter.svg" alt="Twitter icon" />
                        <img className="icon-pinterest" src="/images/icon-pinterest.svg" alt="Pinterest icon" />
                        </div>
                        <div className="share-icon-container-reverse">
                            <img className="share-icon-reverse" src="/images/icon-share-reverse.svg"
                                alt="share arrow icon"
                                onClick={handleIsSelected}
                            // Toggle isSelected when the arrow is clicked
                            />
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
