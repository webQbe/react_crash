import React from 'react'

/* Default bg class for Card */
const Card = ({ children, bg = 'bg-gray-100' }) => {
  return (
    /* Adding background color dynamically */
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        { children }
    </div>
  )
}

export default Card