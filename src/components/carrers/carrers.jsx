import CajaInfExpecifica from "../home/CajaInf/CajaInfEspecifica.jsx"
import Carrusel from "./carrusel/carrusel.jsx"

const Carrers = () => {
    return (

        <div style={{ background: 'gray' }}>

            <div style={{ display: 'flex', justifyContent: 'center', fontSize: '5rem' }}>
                Carrers
            </div>

            <Carrusel />
            {/*
                <br />
            
                <CajaInfExpecifica
                    name='Private Pilot'
                    generalidares=''
                    requisitos=''
                    precio=''
                    horarios=''
                />
            */}

        </div>

    )
}

export default Carrers