// import video from '../../Videos/Historia2.mp4'
// import video1 from '../../Videos/Cockpit.mp4'

// import { useRef, useEffect } from 'react'
// import CajaInf from './CajaInf/CajaInf.jsx'


import React from "react"
import Item from "./Item/Item.jsx"
// import Model3 from '../../assets/Desktop-Model3.jpeg'
import Model3 from '../../Images/Model3.jpeg'
// import Model3 from '../../Images/Imagotipo.png'

const Products = () => {
    return(
        <div>
            {/* <div
                className="item"
                // style={{
                //     backgroundImage: `url(${backImg})`,
                // }}
            >
                <div className="item-container">

                    <div className="item-text">
                        <p>{title}</p>
                    </div>

                    <div className="item-desc">
                        <p>{desc}</p>
                    </div>
                    
                    <div className="item-third">
                        <button className="firstB">{FirstButton}</button>
                        {twoButtons && (
                        <button className="secondB">{SecondButton}</button>
                        )}
                    </div>
                </div>
            </div> */}
                <Item 
                    title = "Model 3"
                    desc = "Order online for Touchless Delivery"
                    backImg={Model3}
                    FirstButton="Custom Order"
                    SecondButton="Existing Inventory"
                    twoButtons="true"
                />
        </div>
    )
}


export default Products;