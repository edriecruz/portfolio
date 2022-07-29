import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Signature from '../../assets/images/signature.gif'
import lsm from '../../assets/images/logo-lsm.png'
import pup from '../../assets/images/logo-pup.png'
import tesda from '../../assets/images/logo-tesda.png'
import { Button } from '@mui/material'

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
        <div className='text-zone about-area'>

            <Button>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}/>
            </h1>
            </Button>
            

            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
                idx={15}/>
            </h1>

            <img src={lsm} alt="LSM" />

            <img src={pup} alt="PUP" />

            <img src={tesda} alt="TESDA"/>

        </div>
    </div>
    <img src={Signature} alt='Signature' className='signature'/>
    </>
  )
}

export default About