import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [visibleContent, setVisibleContent] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleContent(prevContent => (prevContent === 1 ? 2 : 1));
    }, 3000); // Change content every 3000 milliseconds (3 seconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="App container mt-5 text-center">
      <FaQuoteLeft size={64} className="mb-4" />
      <div className={visibleContent === 1 ? '' : 'd-none'}>
        <blockquote className="blockquote">
          <p>
            "Jeanna has been an excellent realtor from before our house was even ready for listing. We were almost prepared to put our house on the market, and out of the blue, Jeanna reached out to us! She went the extra mile by meeting with us the very next day. She did her research within the market, offered listings through various avenues, and promoted our property daily on various platforms.

            Jeanna ensured we were kept up to date with all clients, gave us preparation time when scheduling showings, and was even dedicated to having virtual showings done. The photographer she chose to take our property photos is one of the best, providing stunning images of our home. Her commitment to marketing and client outreach has been top-notch, and we are more than satisfied with her professionalism.

            Thank you, Jeanna, for being our agent!"
          </p>
          <footer className="blockquote-footer">
            Rachel & Eloy <cite title="Source Title">- Current Client</cite>
          </footer>
        </blockquote>
      </div>
      <div className={visibleContent === 2 ? '' : 'd-none'}>
        <blockquote className="blockquote">
          <p>
            "Professional, honest, thorough, persuasive, understanding, knowledgeable: these are just a few words to describe my realtor - Jeanna Williams. My experience with Jeanna continues to be positive, she works hard and I am kept informed - with clarity every step of the way. She maintains a keen interest in what she does hence radiating her passion for real estate. I intend to work with Jeanna for the foreseeable future."
          </p>
          <footer className="blockquote-footer">
            Michelle L. <cite title="Source Title">- Current Client</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default App;
