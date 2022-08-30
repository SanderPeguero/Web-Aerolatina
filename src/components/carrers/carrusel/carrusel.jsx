import Carousel from 'react-bootstrap/Carousel';
import CajaInf from '../../home/CajaInf/CajaInf'

import imagen from '../../../images/OIP.jpeg'

function Carrusel() {
    return (        
            <Carousel style={{ background: '#00a4f7', borderRadius: '2rem', padding: '2rem', height: '40rem', width:'83rem'}}>

                <Carousel.Item>
                    <div class="d-flex h-100 align-items-center justify-content-center">
                        <CajaInf
                            imagen={imagen}
                            alt='Private Pilot Image'
                            name='Private Pilot'
                            text='Become a Pilot and fly for Hobby or fly your own plane. A Private Pilot is an individual who holds a Private Pilot`s license (PPL), If you want to be a private pilot, you must take our training course both in flight and in related theoretical subjects. `Can anyone become a private pilot?` The answer to this is `almost anyone`. If you can learn to drive a car, the chances are that you can learn to fly an airplane. To become a Private Pilot you need to take 90 hours of theoretical classes (audiovisual method) and 35 hours (minimum) of PRACTICAL training.'
                        />
                    </div>

                </Carousel.Item>

                <Carousel.Item>
                    <div class="d-flex h-100 align-items-center justify-content-center">
                        <CajaInf
                            imagen={imagen}
                            alt='Commercial Pilot Image'
                            name='Comertial Pilot'
                            text='Make aviation a profession and fly commercial airlines.Being a Commercial Pilot is a privilege that gives the pilot a greater range of job opportunities. This differs from the Private Pilot license in that with this license you have a remuneration for your trade, in addition to being more complete because it includes the ratings that you cannot obtain with the private pilot license.'
                        />
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div class="d-flex h-100 align-items-center justify-content-center">
                        <CajaInf
                            imagen={imagen}
                            alt='Image of instrument classifier'
                            name='Intruments Rating'
                            text='Fly in conditions of low or no visibility and reach your destination without getting disoriented.Instrument Flight is used to navigate in conditions of low or no visibility with the terrain. Known by its acronym IFR (Instrument Flight Rules) it is a rating that every pilot must obtain in order to operate in low visibility conditions such as: Fog or clouds, Rains that make vision difficult, High altitudes.'
                        />
                    </div>
                </Carousel.Item>
                
                <Carousel.Item>
                    <div class="d-flex h-100 align-items-center justify-content-center">
                        <CajaInf
                            imagen={imagen}
                            alt='Instructor image'
                            name='Instructor'
                            text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit incidunt ad deleniti eos vitae porro sequi alias, deserunt nobis voluptatem, soluta minima, molestias tempora a illo odio eveniet eligendi aspernatur fugiat eius. Numquam ea omnis, sapiente tempora temporibus dicta similique! Ipsum repellendus quas obcaecati id quae. Hic est aliquid sequi aspernatur, ducimus inventore dolor, ut quod error, mollitia accusamus veritatis facere facilis. Magnam doloremque animi aspernatur soluta omnis explicabo asperiores nostrum a nemo quis harum, suscipit magni vel aliquid eaque ipsum repudiandae? Voluptas praesentium doloremque sit atque sed veniam alias in voluptatibus, quod voluptatem, neque rem cumque quo quaerat culpa?'
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="d-flex h-100 align-items-center justify-content-center">
                        <CajaInf
                            imagen={imagen}
                            alt='Image of the mechanic'
                            name='Mechanic'
                            text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit incidunt ad deleniti eos vitae porro sequi alias, deserunt nobis voluptatem, soluta minima, molestias tempora a illo odio eveniet eligendi aspernatur fugiat eius. Numquam ea omnis, sapiente tempora temporibus dicta similique! Ipsum repellendus quas obcaecati id quae. Hic est aliquid sequi aspernatur, ducimus inventore dolor, ut quod error, mollitia accusamus veritatis facere facilis. Magnam doloremque animi aspernatur soluta omnis explicabo asperiores nostrum a nemo quis harum, suscipit magni vel aliquid eaque ipsum repudiandae? Voluptas praesentium doloremque sit atque sed veniam alias in voluptatibus, quod voluptatem, neque rem cumque quo quaerat culpa?'
                        />
                    </div>
                </Carousel.Item>

            </Carousel>
    )
}

export default Carrusel;