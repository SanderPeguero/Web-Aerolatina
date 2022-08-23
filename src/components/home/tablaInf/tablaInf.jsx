import React from 'react';

const TablaInf = (props) => {

    return (

        <div className='card-group'>

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
                <div className='card-title' 
                    style={{
                        fontWeight: 'bold'
                    }}
                >
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
                <div className='card-title' 
                    style={{
                        fontWeight: 'bold'
                    }}
                >
                    Generalities
                </div>

                <div className='card-body'>
                    {props.generalities}
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

                <div className='card-title' 
                    style={{
                        fontWeight: 'bold'
                    }}
                >
                    Requirements
                </div>

                <div className='card-body'>
                    {props.requirements}
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

                <div className='card-title'
                    style={{
                        fontWeight: 'bold'
                    }}
                >
                    Price
                </div>

                <div className='card-body'>
                    {props.price}
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

                <div className='card-title'
                    style={{
                        fontWeight: 'bold'
                    }}
                >
                    Schedules
                </div>

                <div className='card-body'>
                    {props.schedules}
                </div>

            </div>

        </div>
    )
}


export default TablaInf