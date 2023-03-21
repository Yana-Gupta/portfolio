import React from 'react'
import './Index.scss'
import { IconContext } from 'react-icons'

const StyledIcon = ({ skill }) => {
  return (
    <IconContext.Provider value={{ size: '40' }}>
      <div style={{ color: skill.color, margin: '10px' }}>{skill.icon}</div>
    </IconContext.Provider>
  )
}

export default StyledIcon
