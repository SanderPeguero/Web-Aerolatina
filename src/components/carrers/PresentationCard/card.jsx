import React from "react"
import CajaInfExpecifica from '../../home/CajaInf/CajaInfEspecifica.jsx'
import styles from './Card.module.css'

const Card = () => {

    return (
        <div className={styles.containerBox}>
            <div className={styles.container}>
                <div className={styles.box}>

                    <div className={styles.content}>
                        <div>
                            <CajaInfExpecifica
                                name='¿Te Gustaría aprender a Volar?'
                                text='Aprender Quizás no es tan difícil como tú piensas. En esencia miles de hombres y mujeres de todas las edades y ramas de la vida, estudiantes de bachillerato, profesionales, abuelas y abuelos, aprenden a volar. Hoy en día de los pilotos activos en los Estados Unidos y Latinoamérica el 80 % son pilotos generales, esto quiere decir que no son pilotos de líneas aéreas o de las fuerzas de áreas militares, la gran mayoría de los pilotos obtienen un certificado de piloto privado, el cual es la primera meta de un estudiante piloto.'

                            />
                        </div>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.content}>
                        <div>
                            <CajaInfExpecifica
                                name='AEROLATINA'
                                text='Institución dedicada durante años a la formación de profesionales en el área de la aviación, Fue fundada en el año 1982 en el Aeropuerto Internacional del Cibao, Santiago, por el Capitán Piloto Robin Rodríguez. Desde su inicio la academia a graduado cientos de pilotos, Instructores y Despachadores de vuelos. Actualmente, la academia ofrece cursos teóricos y prácticos en las siguientes disciplinas: Piloto Privado, Piloto Comercial, Instructor de Vuelo, Habilitación Instrumentos'
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <div>
                            <CajaInfExpecifica
                                name='Requisitos'
                                text='Desde los 17 años de edad en adelante, Grado escolar mínimo Bachiller y contar con un buen estado de salud física y mental. Cumplidos estos requisitos podrá iniciar el curso teórico o curso de tierra para piloto privado.'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;

{/*
<div className="card" style={{
                        height: 'auto',
                        width: 'auto',
                        padding: '1rem',
                        display: 'flex',
                        justifyContent: 'center',
                        justifyItems: 'center',
                        paddingTop: '2rem',
                        borderRadius: '2rem'
                    }}
                    >
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            justifyItems: "center"
                        }}>
                            <CajaInfExpecifica
                                name='¿Te Gustaría aprender a Volar?'
                                text='Aprender Quizás no es tan difícil como tú piensas. En esencia miles de hombres y
                        mujeres de todas las edades y ramas de la vida, estudiantes de bachillerato, profesionales,
                        abuelas y abuelos, aprenden a volar.
                        Hoy en día de los pilotos activos en los Estados Unidos y Latinoamérica el 80 % son
                        pilotos generales, esto quiere decir que no son pilotos de líneas aéreas o de las fuerzas de
                        áreas militares, la gran mayoría de los pilotos obtienen un certificado de piloto privado, el
                        cual es la primera meta de un estudiante piloto.'

                            />
                            


                            
                        </div>

                    </div>
*/}