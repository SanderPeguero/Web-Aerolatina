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

export default CajaInf