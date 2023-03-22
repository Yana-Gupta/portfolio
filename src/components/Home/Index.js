import { useEffect, useState } from 'react'
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
        <div className="home">
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
            <button className="flat-button">
              <a
                href="https://drive.google.com/file/d/1OJoICYxxNLNYVPw_Y92xWc576ZGvfG23/view?usp=sharing"
                style={{ textDecoration: 'none', color: '#fff' }}
              >
                View Resume
              </a>
            </button>
          </div>
          <div className="image-zone"></div>
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
