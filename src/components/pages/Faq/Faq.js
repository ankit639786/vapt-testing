import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import "./ind.css"
function Faq() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container12'>
        <h3>FAQ's</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <Question key={question.id} {...question}></Question>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Faq;
