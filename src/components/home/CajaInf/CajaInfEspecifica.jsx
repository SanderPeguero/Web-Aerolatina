import React from 'react';
import styles from './CajaInf.module.css'

const CajaInfExpecifica = (props) => {

    return (

        <div className='card-group' >

            <div className='card'
                style={{
                    backgroundColor: '#000000',
                    color: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem'
                }}
            >
                <div className='card-title'>
                    Name
                </div>

                <div className='card-body'>
                    {props.name}
                </div>

            </div>

            <div className='card'
                style={{
                    backgroundColor: '#000000',
                    color: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem'
                }}
            >
                <div className='card-title'>
                    Generalities
                </div>

                <div className='card-body'>
                    {props.generalidades}
                </div>

            </div>

            <div className='card'
                style={{
                    backgroundColor: '#000000',
                    color: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem'
                }}
            >

                <div className='card-title'>
                    Requirements
                </div>

                <div className='card-body'>
                    {props.requisitos}
                </div>

            </div>

            <div className='card'
                style={{
                    backgroundColor: '#000000',
                    color: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem'
                }}
            >

                <div className='card-title'>
                    Price
                </div>

                <div className='card-body'>
                    {props.precio}
                </div>

            </div>

            <div className='card'
                style={{
                    backgroundColor: '#000000',
                    color: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem'
                }}
            >

                <div className='card-title'>
                    Schedules
                </div>

                <div className='card-body'>
                    {props.horarios}
                </div>

            </div>

        </div>

    )
}

export default CajaInfExpecifica