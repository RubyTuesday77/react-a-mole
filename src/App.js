import './App.css';
// Import hook to track score:
import { useState } from 'react'
import MoleContainer from './components/MoleContainer'

function App() {
  // Set initial state (score = 0) and function to update the score:
  let [score, setScore] = useState(0)

  // Declare a function to display mole or molehills:
  const createMolehill = () => {
    // Define an empty array to hold molehill components:  
    let hills = []
    // Create for loop that iterates 9 times:
    for(let i = 0; i < 9; i++) {
        // Each molehill component (either a mole or molehill) to be pushed to hills array:
        hills.push(<MoleContainer key={ i } setScore={ setScore } score={ score } />)
    }
    // Hills array to be returned:
    return (
      <div>
        { hills }
      </div>
    )
  }

  // Display score and moleContainer array (which generates div with hillas array):
  return (
    <div className="App">
      <h1>React-a-Mole</h1>
      <h3>Score: { score }</h3>
      { createMolehill() }
    </div>
  );
}

export default App;