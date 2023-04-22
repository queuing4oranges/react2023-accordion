import React, {useState} from 'react';
import data from './data';
import Question from './Question';

const App = () => {

  const [questions, setQuestions] = useState(data)


  return(
    <main>
      <div className='container'>
        <h1>Questions</h1>

        {questions.map((question) => (
          <div className='question' key={question.id}>
          <Question question={question}/>
          </div>
        ))}
           
      </div>

    </main>
    ) 
  };
export default App;
