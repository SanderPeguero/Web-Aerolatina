import React from 'react';
import styles from './CajaInf.module.css'

const CajaInfExpecifica = (props) => {

    return (

        <div className={styles.contenedorInfEsp}>

            <div className={styles.contenedorTextoInf} >

                <p className={styles.nombreInf}>
                    <strong>
                        {props.name}
                    </strong>
                </p>

                <p className={styles.textoInfEsp}>
                    {props.text}
                </p>

            </div>

        </div>

    )
}

export default CajaInfExpecifica