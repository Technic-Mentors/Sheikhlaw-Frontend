import React, { useState } from 'react';
import Calltoaction from './Calltoaction';

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>

<div
          className="background-image1"
          style={{ backgroundImage: `url(${"page-head.webp"})` }}
        >
          <div className="color-overlay1 d-flex align-items-center justify-content-center">
            <div >
              <h1
                className="head text-center text-white animate__animated animate__zoomIn"
                // style={{ fontSize: 60 }}
              >
                 Frequently Asked Questions
              </h1>
            </div>
          </div>
        </div>


      <section className='mt-5'>
        <div className='container'>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-md-10 text-center' data-aos="fade-up" data-aos-offset="200">
          <h2 className="title text-center" data-aos="fade-up" data-aos-offset="200">Frequently Asked Questions</h2>
          <p className='text-center'>Want to ask a question? Here's the list of very common questions our clients ask most of the time.</p>

          {faqsData.map((faq, index) => (
            <div className={`faq ${index === activeIndex ? 'active' : ''}`} key={index} onClick={() => handleToggle(index)}>
              <div className="question">
                <h4>{faq.question}</h4>
                <svg width="15" height="10" viewBox="0 0 42 25">
                  <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round" />
                </svg>
              </div>
              <div className="answer">
                <p style={{textAlign: "left"}}>{faq.answer}</p>
              </div>
              <hr />
            </div>
          ))}
          </div>
          </div>
        </div>
      </section>
      <Calltoaction />
    </div>
  );
}

const faqsData = [
  {
    question: 'How do I choose the right lawyer for my case?',
    answer: 'Selecting the right lawyer involves considering their expertise in the specific legal area related to your case, checking their experience, and reading client reviews. Consultations with potential attorneys can also help you assess their understanding of your situation.',
  },
  {
    question: "What should I do if I can't afford legal representation?",
    answer: 'If you can not afford a lawyer, explore options such as legal aid organizations, pro bono services, or contingency fee arrangements where the attorney only gets paid if you win your case. Some firms offer initial consultations for free.',
  },
  {
    question: 'How long will my case take to resolve?',
    answer: 'The duration of a case varies based on factors like its complexity, court schedules, and the cooperation of involved parties. Your attorney can provide a rough estimate, but unforeseen developments may impact the timeline.',
  },
  {
    question: 'What is the difference between mediation and litigation?',
    answer: 'Mediation involves a neutral third party helping parties reach a voluntary agreement, while litigation is the process of resolving disputes in court. Mediation is often quicker and less adversarial, while litigation may take longer but offers a binding resolution by a judge.',
  },
  {
    question: 'How much will my case cost in legal fees?',
    answer: "Legal fees depend on factors such as the complexity of the case, the attorney's hourly rate, and the amount of time and resources required. Some lawyers may offer fixed fees or contingency arrangements, where fees are contingent on winning the case.",
  },
  {
    question: 'What should I bring to my first meeting with a lawyer?',
    answer: "Bring any relevant documents, such as contracts, court papers, or correspondence related to your case. Be prepared to discuss the details of your situation openly so the lawyer can better assess your needs.",
  },
  {
    question: 'Can I handle my legal matter without a lawyer?',
    answer: "While you have the right to represent yourself (pro se), legal matters can be complex, and having professional guidance is often advisable. A lawyer can help you navigate the legal system, understand your rights, and present a stronger case.",
  },
  {
    question: 'How do I know if I have a strong case?',
    answer: "A lawyer can assess the strength of your case based on the facts, evidence, and applicable laws. Factors such as the credibility of witnesses and the clarity of documentation contribute to the strength of a case. Consult with an attorney to get a professional opinion.",
  },
];



export default Faqs;
