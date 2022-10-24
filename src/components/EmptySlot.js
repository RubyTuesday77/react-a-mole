// Import hook to add image (no mole) to DOM:
import { useEffect } from "react"

// Import molehill.png file, designate molehillImg as path to image:
import molehillImg from '../molehill.png'

// Function to render component in MoleContainer.js:
function EmptySlot(props) {

    // Declare a useEffect function that takes a callback function:
    useEffect(() => {
        // Declare randSeconds variable, to represent number of seconds each molehill will exist:
        let randSeconds = Math.ceil(Math.random() * 5000)
        // Declare timer variable, to be a setTimeout function:
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    // Render div with molehill image:
    return (
        <div>
            <img
                style={ { 'width': '200px' } }
                src={ molehillImg }
                alt='molehill'
            />
        </div>
    )
}

export default EmptySlot