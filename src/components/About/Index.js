import './Index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/Index';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {

        return () => {

            setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 3000);
        }

    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className="text-zone">
                    <h1>
                        < AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>
                    <p>I am a 2nd year student at ABV-IIITM Gwalior having strong interest in technology.</p>
                    <p>I am learning web development.</p>

                </div>
                <div className='skill'>
                </div>
            </div>
        </>
    )
}

export default About;