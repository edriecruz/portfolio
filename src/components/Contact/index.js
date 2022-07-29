import { useState, useEffect, useRef} from 'react'
import './index.scss'
import Signature from '../../assets/images/signature.gif'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
const [letterClass, setLetterClass] = useState('text-animate')
const refForm = useRef();

useEffect(() => {
   setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000)
}, [])

const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .sendForm(
        'service_p3df9cb',
        'template_cf90ihe',
        refForm.current,
        'BANAk5aUGHICmPaId'
    )
    .then (
        () => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the message, please try again')
        }
    )
}

  return (
    <>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                letterClass ={letterClass}
                idx={15}/>
            </h1>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder='Name' 
                                required
                                autoComplete='off'/>
                        </li>
                        <li className='half'>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder='Email' 
                                required
                                autoComplete='off'/>
                        </li>
                        <li>
                            <input 
                                type="text" 
                                name="subject" 
                                placeholder='Subject' 
                                required />
                        </li>
                        <li>
                            <textarea 
                                name="message" 
                                placeholder='Message' 
                                required />
                        </li>
                        <li>
                            <input 
                                type="submit" 
                                className="flat-button" 
                                value="SEND" />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        
        <div className='info-map'>
            12 Aquarius St.,
            <br />
            Monpert Subd., Brgy. San Isidro,
            <br />
            Taytay, Rizal, 
            <br />
            Philippines,
            <span>cruz.edrie.6@gmail.com</span>
        </div>

        <div className="map-wrap">
          <MapContainer center={[14.5730988,121.1370356]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[14.5730988,121.1370356]}>
              <Popup>Edrie Cruz lives here, you may ask for a conversation.</Popup>
            </Marker>
          </MapContainer>
        </div>
    </div>

    <img src={Signature} alt='Signature' className='signature'/>
    </>
  )
}

export default Contact