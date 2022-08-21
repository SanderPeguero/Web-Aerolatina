import React from 'react';
import styles from './CajaInf.module.css'

const CajaInf = (props) => {

    return (

        <div className={styles.contenedorInf}>

            <img
                className={styles.imgInf}
                // src={require(`../../../Images/${props.imagen}`)}
                src={props.image}
                alt={props.alt}
            />

            <div className={styles.contenedorTextoInf} >

                <p className={styles.nombreInf}>
                    <strong>
                        {props.name}
                    </strong>
                </p>

                <p className={styles.textoInf}>
                    {props.text}
                </p>

            </div>
        </div>

    )
}

const CajaInfExpecifica = (props) =>{

    return (
        <div className=''>
            
            <div className=''>
                Generalidades
                <br />
                {props.text}
            </div>

            <div className=''>
                Requisitos
                <br />
                {props.requisitos} 
            </div>

            <div className=''>
                Precio
                <br />
                {props.precio}
            </div>

            <div className= ''>
                Horarios
                <br />
                {props.horarios}
            </div>
        </div>
    )
}

export default CajaInf