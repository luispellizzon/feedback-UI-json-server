import React from 'react'

function Card({ children, reverse }) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>
        {children}
    </div>
  )
    // return (
    //     <div className="card" style={{
    //         backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : 'white',
    //         color: reverse ? 'white' : 'black',
    //     }}>
    //         {children}
    //     </div> )
    
}

export default Card