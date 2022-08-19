// import video from '../../Videos/Historia2.mp4'
import video1 from '../../Videos/Cockpit.mp4'

import { useRef, useEffect } from 'react'
import CajaInf from './CajaInf/CajaInf.jsx'


// Cuerpo de Pagina
const Body = () => {

    const vidRef = useRef();

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

            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', fontSize: '4rem' }}>
                {/* <h1> */}
                    Cursos Disponibles
                {/* </h1> */}
            </div>

            <div 
                style={{
                    display: 'flex',
                    marginTop: '3rem',
                    marginBottom: '10rem'
                }}
                className='CajaInfContainer'
            >
                <CajaInf
                    name={"Piloto Privado"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                    alt={"piloto volando cessna"}
                    image={"https://images.unsplash.com/photo-1493673155827-a7617e74a0ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1962&q=80"}
                />

                <CajaInf
                    name={"Piloto Privado"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                    alt={"piloto volando cessna"}
                    image={"https://images.unsplash.com/photo-1493673155827-a7617e74a0ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1962&q=80"}
                />

                <CajaInf
                    name={"Piloto Privado"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                    alt={"piloto volando cessna"}
                    image={"https://images.unsplash.com/photo-1493673155827-a7617e74a0ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1962&q=80"}
                />
            </div>

            <div
                style={{ height: '100rem', background: "gray" }}
            >
                Sander
            </div>

        </>
    )

}

export default Body