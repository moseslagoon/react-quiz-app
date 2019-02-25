import React from 'react'; 
import Quiz from 'react-quiz-component';
import { quiz } from './quiz';

class App extends React.Component {
  render() {
    return(
      <div>
        {/* Hello, World! */}
        <Quiz quiz={quiz} shuffle={true}/>

      </div>
    );
  }
}

export default App;
