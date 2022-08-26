// import video from '../../Videos/Historia2.mp4'
// import video1 from '../../Videos/Cockpit.mp4'

// import { useRef, useEffect } from 'react'
// import CajaInf from './CajaInf/CajaInf.jsx'


import React from "react"
import Item from "./item/item.jsx"
// import Model3 from '../../assets/Desktop-Model3.jpeg'
import Model3 from '../../images/HI1070.png'
// import Carrusel from "../carrusel/Carrusel.jsx"
import video1 from '../../videos/Cockpit.mp4'
import Carrousel from "./carrousel/carrousel.jsx"
// import Model3 from '../../Images/Imagotipo.png'

const Products = () => {
    return(
        <>
            {/* <video src={video1} width="100%" height="100%" muted autoPlay loop style={{
                minHeight: '100%',
                minWidth: '100%',
                // position: 'fixed',
                right: '0',
                bottom: '0',

            }}>
                Your browser does not support the video tag.
            </video> */}
            
            <video src={video1} muted autoPlay loop style={{
                // minHeight: '100vh',
                // minWidth: '100vw',
                width: '-webkit-fill-available',
                position: 'fixed',
                zIndex: '-1',
                right: '0',
                bottom: '0',
                top: '-80px'      
              }}
            >
                Your browser does not support the video tag.
            </video>

            <Item 
                title = "Aprende a Volar"
                // desc = "Conviertete en el piloto que siempre soñaste ser"
                desc = "Con mas de 30 años de experiencia formando pilotos Aerolatina se ha destacado por sus altos estandares de seguridad"
                backImg={Model3}
                FirstButton="Vuelo de Prueba"
                SecondButton="Cursos"
                twoButtons="true"
            />


            <div
                style={{ height: '100rem', width: '100%', background: "white", marginLeft: '0%' }}
                >
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10rem', fontSize: '5rem'}}>
                    Home
                </div>
            </div>
            <Carrousel/>

        </>
    )
}


export default Products