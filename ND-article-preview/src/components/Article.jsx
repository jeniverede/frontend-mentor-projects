import "../components-styles/ArticleStyle.css";
import { FooterOverlay } from "./FooterOverlay";

export function Article() {
    return (
        <>
            <main className="page-container">
                <section className="preview-container">

                    <img className="main-image" src="/images/drawers.jpg"
                        alt="image of green dresser with a vase and framed artwork" />
                    
                    <article className="content-container">
                        <div className="text-container">
                            <h1>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
                            <p>
                                Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I&apos;ve got some simple tips to help you make any room feel complete.
                            </p>
                        </div>

                        <FooterOverlay />
                    </article>
                </section>
            </main>
        </>
    );
}