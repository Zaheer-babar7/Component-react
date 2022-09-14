import React from 'react'
import NavBtn from './NavBtn'

const navlinks = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '9px',
        marginRight: '100px',
        paddingTop: '11px',
    }}>
        <NavBtn name={"Community"}/>
        <NavBtn name={"Portfolios"}/>
        <NavBtn name={"Inspiration"}/>
        <NavBtn name={"News"}/>
        <NavBtn name={"Features"}/>
        <NavBtn name={"Jobs"}/>
    </div>
  )
}

export default navlinks