import React from 'react'
import Img from '../../src/images/header.jpg'
import Navlinks from '../components/Navlinks'

const Header = () => {
  return (
    <div style={{
      width: '100%',
      height: '400px',
      backgroundImage: `url(${Img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
  }}>
    <Navlinks />
    </div>
  )
}

export default Header
