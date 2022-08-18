import React from 'react';
import './CajaInf.module.css'

const CajaInf = (props) => {

    return (

        <div className='contenedor-inf'>

            {
                /*
                <img 
                    className='img-inf' 
                    src={require(`../../../Images/${props.imagen}`)} 
                    alt='Foto Inf'
                />
                */
            }

            <div className='contenedor-texto-inf' >

                <p className='nombre-inf'>
                    <strong>
                        {props.nombre}
                    </strong>
                </p>

                <p className='texto-inf'>
                    {props.texto}
                </p>

            </div>
        </div>

    )
}

export default CajaInf