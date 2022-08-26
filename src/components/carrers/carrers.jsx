import Carrusel from "./carrusel/carrusel.jsx"
import TablaInf from "../home/tablaInf/tablaInf.jsx"
import CajaInfExpecifica from "../home/CajaInf/CajaInfEspecifica.jsx"

const Carrers = () => {
    return (

        <div style={{ background: 'gray' }}>

            <div style={{ display: 'flex', justifyContent: 'center', fontSize: '5rem' }}>
                Carrers
            </div>

            <div className="card" style={{
                height: 'auto',
                width: 'auto',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'center',
                justifyItems:'center',
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
                    <CajaInfExpecifica
                        name='AEROLATINA'
                        text='Institución dedicada durante años a la formación de profesionales en el área de la aviación, Fue fundada en el año 1982 en el Aeropuerto Internacional del Cibao, Santiago, por el Capitán Piloto Robin Rodríguez. Desde su inicio la academia a graduado cientos de pilotos, Instructores y Despachadores de vuelos. Actualmente, la academia ofrece cursos teóricos y prácticos en las siguientes disciplinas: Piloto Privado, Piloto Comercial, Instructor de Vuelo, Habilitación Instrumentos'

                    />
                    <CajaInfExpecifica
                        name='Requisitos'
                        text='Desde los 17 años de edad en adelante, Grado escolar mínimo Bachiller y contar con un buen estado de salud física y mental. Cumplidos estos requisitos podrá iniciar el curso teórico o curso de tierra para piloto privado.'

                    />
                </div>
            </div>
            
            <br />

            <Carrusel />

            <br />

            <div className="" style={{
                height: 'auto',
                width: 'auto',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'center',
                justifyItems:'center',
                paddingTop: '2rem',
                borderRadius: '2rem',
                background: '#000',
                color: '#fff'
            }}
            >
                <TablaInf 
                    p1='El curso esta compuesto por 9 materias y un trabajo sobre la historia de la aviación, las materias son la siguientes: Aerodinámica, Sistemas e Instrumentos, Aeropuerto y Comunicaciones, Actuaciones, Peso y Balance, Regulaciones, Meteorología, Navegación y Aeromedicina.'

                    p2='Los cursos Teóricos son impartidos en dos modalidades tanto en grupo como
                    individual, Las clases de grupo se inician periódicamente, en relación con los cursos,
                    inmediatamente termina uno se comienza el siguiente en esta modalidad las clases son
                    impartidas tres días por semana siendo estos lunes, miércoles y viernes con horario de
                    7:00 a 9:00 PM y teniendo una duración de tres meses aproximadamente.'
                    
                    p3='La modalidad individual varia de la de grupo en que las clases inician en cualquier
                    momento y el estudiante elige los días y la hora convenientes para esta, terminada ya la
                    parte teórica usted obtiene la calificación de piloto aeronáutico ( categoría privado ) usted
                    adquiere en el todos los conocimientos teóricos. Para iniciar su entrenamiento práctico el
                    cual para el Instituto Dominicano de Aviación civil esta compuesto por un mínimo de 40
                    horas practicas terminado este programa usted adquiere la calificación de piloto privado.'
                    
                    p4='Para cualquier otro curso, especialidad, refrescamiento o información adicional consulte
                    nuestras oficinas de lunes a viernes en horario de 8:00 AM a 1:00 y de 2:00 a 5:00 PM y
                    los sábados de 8:00 a 12:00 PM al teléfono 809- 233-8200.'
                    
                    p5=''
                />
            </div>

        </div>

    )
}

export default Carrers