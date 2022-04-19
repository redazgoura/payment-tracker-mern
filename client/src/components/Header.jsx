import React from 'react'

const Header = ( {title} ) => {
  return (
    <div className='container'> 
        <h1>{title}</h1> 
    </div>
  )
}

Header.defaultProps ={
    title : 'Payments Tracker',
}

export default Header