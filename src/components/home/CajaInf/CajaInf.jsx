import React from 'react';
import styles from './CajaInf.module.css'

const CajaInf = (props) => {

    return (

        <div className={styles.contenedorInf}>

            <img
                className={styles.imgInf}
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

                <p className={styles.textoInf}>
                    {props.text1}
                </p>
            </div>
            
        </div>

    )
}

export default CajaInf