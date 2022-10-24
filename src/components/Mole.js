// Import hook to add image (mole) to DOM:
import { useEffect } from 'react'

// Import mole.png file, designate moleImg as path to image:
import moleImg from '../mole.png'

// Function to render component in MoleContainer.js:
function Mole(props) {

    // Declare a useEffect function that takes a callback function:
    useEffect(() => {
        // Declare randSeconds variable, to represent number of seconds each mole will exist:
        let randSeconds = Math.ceil(Math.random() * 5000)
        // Declare timer variable, to be a setTimeout function:
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    // Render div with mole image:
    return (
        <div>
            <img
                style={ { 'width': '200px' } }
                src={ moleImg }
                alt='mole'
                onClick={ props.handleClick }
            />
        </div>
    )
}

export default Mole