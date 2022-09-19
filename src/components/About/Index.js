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
                    <p>Hello, I am an undergradte Information Technology currently having a deep interest into web technologies.</p>
                    <p></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>


            </div>
        </>
    )
}

export default About;