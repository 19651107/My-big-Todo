import React, { useState, useEffect, useRef } from 'react'
import RINGS from 'vanta/dist/vanta.rings.min'
import * as THREE from 'three'


const Vanta = () => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(RINGS({
                el: myRef.current,
                THREE: THREE,
                backgroundColor: 0xb8c3e1,
                color: 0xd40f64
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return <div ref={myRef} className="vanta"> </div>
}

export default Vanta