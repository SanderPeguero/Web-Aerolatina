import React from 'react';

const TablaInf = (props) => {

    return (

        <>
            <div className=''
                style={{
                    backgroundColor: '#000000',
                    color: '#fff',
                    display: 'block',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem',
                    width: 'auto'
                }}
            >
                <h3
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}
                >
                    Información General
                </h3>

                <div style={{ padding: '1rem', justifyContent: 'center' }}>
                    {props.p1}
                </div>

                <div style={{ padding: '1rem', justifyContent: 'center' }}>
                    {props.p2}
                </div>

                <div style={{ padding: '1rem', justifyContent: 'center' }}>
                    {props.p3}
                </div>

                <div style={{ padding: '1rem', justifyContent: 'center' }}>
                    {props.p4}
                </div>

                <div style={{ padding: '1rem', justifyContent: 'center' }}>
                    {props.p5}
                </div>

            </div>

        </>
    )
}


export default TablaInf