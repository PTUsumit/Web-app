import React from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: 'What is this application about?',
      answer: 'This application provides weather information for various cities.'
    },
    {
      question: 'How can I search for weather in different cities?',
      answer: 'You can use the search bar on the homepage to enter the name of the city you want to check the weather for.'
    },
    {
      question: 'Is the weather data real-time?',
      answer: 'Yes, the weather data is fetched in real-time from the OpenWeatherMap API.'
    },
    {
      question: 'Do I need to create an account to use this application?',
      answer: 'No, you do not need to create an account to use this application.'
    },
    {
      question: 'How often is the weather data updated?',
      answer: 'The weather data is updated every time you perform a new search.'
    }
  ];

  return (
    <div  className="section" id='faq'style={{ padding: '20px' }}>
      <h2 className="mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqData.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="true"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
