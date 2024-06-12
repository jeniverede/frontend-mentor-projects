import faqData from './faqData.json';
import "./Accordion.css";

import { useState } from 'react';


export function Accordion() {
    const [openIndex, setOpenIndex] = useState(null);
    /* null determines that no accordion is open when the component mounts */

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
        /* if the openIndex is equal to index the item is open, if it is null the item is closed */
    };
    return (
        <>
            <div className='page-container'>
                <div className='background-img-top'>
                    <img src="/images/background-pattern-mobile.svg" alt="background image purple with bright purple lines" />
                </div>

                <div className='faq-container'>
                    <div className='icon-star'>
                        <img src='/images/icon-star.svg' alt='icon star'>
                        </img>
                        <h1 className='title'>FAQ&apos;s</h1>
                    </div>

                    {faqData.map((item, index) => (
                        <div key={index} className='faq-item'>
                            {/* The key attribute is a special attribute used in React to uniquely identify elements in a list. It helps React identify which items have changed, are added, or are removed. In this case, index is used as the key, which is typically used when rendering a list of items where each item has a unique index. */}
                            <div className={`faq-header ${openIndex === index ? 'open' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                {item.question}
                                {openIndex === index ? <img className="icon-minus" src="/images/icon-minus.svg" alt="icon minus" /> : <img className="icon-plus" src="/images/icon-plus.svg" alt="icon plus" />}

                            </div>
                            {openIndex === index && (
                                <div className="faq-content">{item.answer}</div>
                            )}
                            <hr />
                        </div>

                    ))}
                </div >
                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                    Coded by <a href="#">Jennifer Rothrock</a>.
                </div>
            </div>
        </>
    );
}
