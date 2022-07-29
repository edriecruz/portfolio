import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Signature from '../../assets/images/signature.gif'
import lsm from '../../assets/images/logo-lsm.png'
import pup from '../../assets/images/logo-pup.png'

const About = () => {

const [letterClass, setLetterClass] = useState('text-animate')
 
useEffect(() => {
    setTimeout(() => {
     setLetterClass('text-animate-hover')
   }, 4000)
 }, [])

return (
    <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}/>
            </h1>

            <p>
            Open and willing to learn any kind of programming language and an initiative kind of person. Most focused-on web development, frontend to be specific, but willing to learn more languages that reach the capabilities. In terms of initiative, whenever there are projects or any urgent things needed, tasks will be delivered soon as possible.
            </p>

            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                idx={15}/>
            </h1>

            <p>...</p>

            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
                idx={15}/>
            </h1>

            <img src={lsm} alt="LSM" />
            <img src={pup} alt="PUP" />


        </div>
    </div>
    <img src={Signature} alt='Signature' className='signature'/>
    </>
  )
}

export default About