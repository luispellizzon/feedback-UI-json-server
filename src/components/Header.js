import React from "react"
import { Link } from 'react-router-dom'

function Header({text}){
  // const styles = {
  //   'text-decoration':'none',
  //   'color': '#ff6a95',
  //   'font-size': '1.5em',
  //   'font-weight': 'bold',
  // }

  return (
    <header>
        <div className="container">
            <Link to='/' className="header-link">{text}</Link>
        </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
}



export default Header