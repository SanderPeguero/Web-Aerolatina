import video from '../../Videos/Historia2.mp4'
import video1 from '../../Videos/Cockpit.mp4'
import { useRef, useEffect } from 'react'


// Cuerpo de Pagina
const Body = () => {

    const vidRef=useRef();
    
    // useEffect(() => { vidRef.current.play(); },[]);

    return (
        <>
        
        <video src={video1} width="100%" height="100%" muted autoPlay loop>
            {/* <source } type="video/mp4"/>
            <source src={video} type="video/mp4"/> */}
            Your browser does not support the video tag.
        </video>

        <div style={{
            position: 'absolute',
            top: '45%',
            left: '25%',
            margin: '5rem',
            transform: 'translate(-50%, -50%)',
            color: 'white'
        }}>
            <div style={{
                fontSize: '60px',
                fontWeight: '700',
                fontFamily: 'sans-serif'
            }}>Academia Aeronautica Latina</div>
            <div style={{
                fontSize: '16px',
                fontFamily: 'Poppins',
                fontWeight: '400',
                marginTop: '0.5rem',
                marginLeft: '0.5rem'
            }}>Enseñando a volar</div>
        </div>
        
        </>
    )
    
}

export default Body