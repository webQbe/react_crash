import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader' /* Import specific spinner component */

const override = { /* Define custom CSS for the spinner */
    display: 'block', /*  spinner behaves like a block-level element */
    margin: '100px auto' /* Centers the spinner vertically and horizontally within its container. */
}

/* Pass loading state as a prop */
const Spinner = ({ loading }) => { 
  return (
    <ClipLoader 
        color='#4338ca' /* Sets the color of the spinner */
        loading={loading} /* true: The spinner is displayed, false: The spinner is hidden */
        cssOverride={override} /* Customizes the spinner's styles */
        size={150} /* Sets the size (diameter) of the spinner in pixels */
    />
  )
}

export default Spinner