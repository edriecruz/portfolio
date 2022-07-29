import { useRef, useEffect } from 'react'
import './index.scss'
import LogoS from '../../../assets/images/logo-e.png'
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
        <img 
        ref={solidLogoRef}
        className='solid-logo' 
        src={LogoS}
        alt="E"/>

        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="559" 
        zoomAndPan="magnify" 
        viewBox="0 0 419.25 672.749985" 
        height="897" 
        preserveAspectRatio="xMidYMid meet" 
        version="1.0">
            <defs>
              <clipPath id="id1">
                  <path 
                    d="M 0 0.476562 L 418.5 0.476562 L 418.5 672.023438 L 0 672.023438 Z M 0 0.476562 " 
                    clip-rule="nonzero"/>
              </clipPath>
            </defs>

            <g 
            className="svg-container"
            fill="none">
                <path 
                stroke-linecap="butt" 
                transform="matrix(0.748661, 0, 0, 0.748661, -63.739179, -312.08995)" 
                stroke-linejoin="miter" 
                d="M 86.087219 482.241515 L 579.802207 482.241515 L 579.802207 592.923541 L 232.16057 592.923541 L 232.16057 825.082913 L 518.609598 825.082913 L 500.013891 936.964999 L 232.16057 936.964999 L 232.16057 1203.320854 L 598.397914 1203.320854 L 598.397914 1313.997662 L 86.087219 1313.997662 Z M 86.087219 482.241515 " 
                />
                <path 
                stroke-linecap="butt" 
                transform="matrix(0.748661, 0, 0, 0.748661, -29.135825, -359.976628)" 
                stroke-linejoin="miter" 
                d="M 86.084826 482.241461 L 579.799814 482.241461 L 579.799814 592.923487 L 232.158177 592.923487 L 232.158177 825.082859 L 518.612423 825.082859 L 500.016716 936.964944 L 232.158177 936.964944 L 232.158177 1203.320799 L 598.395521 1203.320799 L 598.395521 1313.997608 L 86.084826 1313.997608 Z M 86.084826 482.241461 "
                />
            </g>
        </svg>

        
    
    </div>
  )
}

export default Logo