import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/Index'
import './Index.scss'
import { Skills } from '../../data.js'
import StyledIcon from '../StyledIcon/Index'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['Y', 'a', 'n', 'a']

  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
        console.log('inside setTimeout')
      }, 4000)
    }
  }, [letterClass])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _15`}>&nbsp;</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={21}
            />
          </h1>
          <h2>Full Stack Web Developer / Blockchain Enthusiast</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="skill-section" style={{ padding: '10px 20px' }}>
          <h1>TeachStacks</h1>
          <div className="skill-container">
            {' '}
            {Skills.map((skill, index) => {
              return (
                <StyledIcon
                  key={index}
                  style={{ margin: '10px' }}
                  skill={skill}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
