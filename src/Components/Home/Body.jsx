// import video from '../../Videos/Historia2.mp4'
// import video1 from '../../Videos/Cockpit.mp4'

// import { useRef, useEffect } from 'react'
// import CajaInf from './CajaInf/CajaInf.jsx'


import React from "react"
import Item from "./Item/Item.jsx"
// import Model3 from '../../assets/Desktop-Model3.jpeg'
import Model3 from '../../Images/HI1070.png'
import Carrusel from "../Carrusel/Carrusel.jsx"
import video1 from '../../Videos/Cockpit.mp4'
// import Model3 from '../../Images/Imagotipo.png'

const Products = () => {
    return(
        <div>
            <video src={video1} width="100%" height="100%" muted autoPlay loop>
                Your browser does not support the video tag.
            </video>
            
            <Item 
                title = "Model 3"
                desc = "Order online for Touchless Delivery"
                backImg={Model3}
                FirstButton="Custom Order"
                SecondButton="Existing Inventory"
                twoButtons="true"
            />

            <div
                style={{ height: '100rem', background: "gray" }}
            >
                Sander
            </div>

        </div>
    )
}


export default Products;