import React from 'react'
import './Index.scss'
import { IconContext } from 'react-icons'

const StyledIcon = ({ skill }) => {
  return (
    <IconContext.Provider value={{ size: '44' }}>
      <div style={{ color: skill.color, margin: '15px' }}>{skill.icon}</div>
    </IconContext.Provider>
  )
}

export default StyledIcon
