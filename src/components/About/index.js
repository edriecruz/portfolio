import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { Collaps } from './collaps'
import Signature from '../../assets/images/signature.gif'
import lsm from '../../assets/images/logo-lsm.png'
import pup from '../../assets/images/logo-pup.png'
import tesda from '../../assets/images/logo-tesda.png'
import IMG from '../../assets/images/picture.png'

const About = () => {
const [letterClass, setLetterClass] = useState('text-animate');
 
useEffect(() => {
    setTimeout(() => {
     setLetterClass('text-animate-hover')
   }, 4000)
 }, [])

return (
    <>
    <div className='container about-page'>
        <div className='text-zone'>

            <Collaps 
            label={
            <h1>
            <AnimatedLetters 
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}/>
            </h1>
            }>
                <div className=''>
                    <p>
                    I'm Edrie Cruz, living in Taytay, Rizal and I'm studying Information and Communication Technology aiming to be a Software Developer where I can improve myself through coding and programming and hone my skills through experience.
                    </p>
                </div>
            </Collaps>

            <Collaps 
            label={
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
                idx={15}/>
            </h1>
            }>
                <div className='edu-area'>

                    <div className='edu-item'>
                        <img src={lsm} alt="LSM" className='edu-pic'/>
                        <p>2016 - 2019 | Lourdes School of Mandaluyong</p>
                    </div>
                    
                    <div className='edu-item'>
                        <img src={pup} alt="PUP" className='edu-pic'/>
                        <p>2019 - current | Polytechnic University of the Philippines</p>
                    </div>

                    <div className='edu-item'>
                        <img src={tesda} alt="TESDA" className='edu-pic'/>
                        <p>2022 - 2022 | TESDA</p>
                    </div>

                </div>
            </Collaps>

            <Collaps 
            label={
            <h1>
            <AnimatedLetters 
                letterClass={letterClass}
                strArray={['A', 'c', 'h', 'i', 'e', 'v', 'e', 'm', 'e', 'n', 't', 's']}
                idx={15}/>
            </h1>
            }>
                <div className=''>
                    <h2>2016</h2>
                    <p>COCC with a Leadership Award Medal</p>
                </div>

                <div className=''>
                    <h2>2017</h2>
                    <p>CSTP with an Outstanding Cadet Medal</p>
                </div>

                <div className=''>
                    <h2>2019</h2>
                    <p>Loyalty Award upon Graduating Senior High School</p>
                </div>

            </Collaps>

        </div>

        <div className=" profile">
        <Collaps 
            label={
                <div className='image'>
                <img src={IMG} alt="picture"/>
                <h2>Click to View More</h2>
                </div>
            }>
                <p>
                <h2>
                    Hobbies
                </h2>
                    <ul>
                        <li>Dance</li>
                        <li>Singing</li>
                        <li>Play Games</li>
                        <li>Work Out</li>
                    </ul>
                </p>
        </Collaps>
        </div>
        

    </div>
    <img src={Signature} alt='Signature' className='signature'/>
    </>
  )
}

export default About