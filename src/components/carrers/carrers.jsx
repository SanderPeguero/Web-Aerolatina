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
                        name='Lorem, ipsum dolor sit amet consectetur adipisicing elit. '
                        text='Facilis ut sequi, doloremque repudiandae soluta quidem illum quaerat accusantium ipsa similique molestiae exercitationem minima porro accusamus distinctio odio, architecto ex. Veniam, beatae doloremque! Iste explicabo architecto distinctio aliquid esse vitae, dolorum quia rem corrupti quidem neque.'

                    />
                    <CajaInfExpecifica
                        name='Lorem, ipsum dolor sit amet consectetur adipisicing elit. '
                        text='Facilis ut sequi, doloremque repudiandae soluta quidem illum quaerat accusantium ipsa similique molestiae exercitationem minima porro accusamus distinctio odio, architecto ex. Veniam, beatae doloremque! Iste explicabo architecto distinctio aliquid esse vitae, dolorum quia rem corrupti quidem neque.'

                    />
                    <CajaInfExpecifica
                        name='Lorem, ipsum dolor sit amet consectetur adipisicing elit. '
                        text='Facilis ut sequi, doloremque repudiandae soluta quidem illum quaerat accusantium ipsa similique molestiae exercitationem minima porro accusamus distinctio odio, architecto ex. Veniam, beatae doloremque! Iste explicabo architecto distinctio aliquid esse vitae, dolorum quia rem corrupti quidem neque.'

                    />
                </div>
            </div>

            <br />

            <Carrusel />

            <br />
            
            <div className="card" style={{
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
                    name='Lorem ipsum dolor sit'
                    generalities='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                    requirements='*Lorem ipsum dolor sit amet<br/>*Lorem ipsum dolor sit amet'
                    price='1000$'
                    schedules='Martes 10:00 a 12:00 y Jueves 10:0 a 12:00'
                />
            </div>

        </div>

    )
}

export default Carrers