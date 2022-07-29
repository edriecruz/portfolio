import { useRef, useEffect } from 'react'
import './index.scss'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)
    
        gsap
          .timeline()
          .to(bgRef.current, {
            duration: 1,
            opacity: 1,
          })
          .from(outlineLogoRef.current, {
            drawSVG: 5,
            duration: 10,
          })
    
        gsap.fromTo(solidLogoRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 2,
            duration: 3,
          }
        )
      }, [])

  return (
    <div className='logo-container' ref={bgRef}>

        

        
    
    </div>
  )
}

export default Logo