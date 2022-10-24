// Import hook to display component images rendered to DOM:
import { useState } from 'react'

// One of the below components will render:
import Mole from './Mole'
import EmptySlot from './EmptySlot'

// Function to render components in App.js:
function MoleContainer(props) {

    // Declare state variables for mole/molehill image, with initial state set to false
    let [theMole, setTheMole] = useState(false)

    // Define function to respond to mole being clcked on, adjusting score and removing mole image:
    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    // Define component to render (mole or molehill) with ternary operator:
    let displayMole = theMole
        ? <Mole
            setScore={ props.setScore }
            toggle={ setTheMole }
            handleClick={ handleClick } />
        : <EmptySlot
            toggle={ setTheMole } />

    // Return displayMole to the DOM
    return (
        <div style={ { 'display': 'inline-block', 'width': '30vw' } }>
            { displayMole }
        </div>
    )
}

export default MoleContainer