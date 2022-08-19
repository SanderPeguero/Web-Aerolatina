import Carousel from 'react-bootstrap/Carousel';
import './Carrusel.module.css'
import CajaInf from '../../../src/Components/Home/CajaInf/CajaInf'

function Carrusel() {
    return (
        <Carousel className="Container">

            <Carousel.Item>
                <div class="d-flex h-100 align-items-center justify-content-center">
                    <CajaInf

                        imagen=''
                        alt=''
                        name='primero'
                        text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit incidunt ad deleniti eos vitae porro sequi alias, deserunt nobis voluptatem, soluta minima, molestias tempora a illo odio eveniet eligendi aspernatur fugiat eius. Numquam ea omnis, sapiente tempora temporibus dicta similique! Ipsum repellendus quas obcaecati id quae. Hic est aliquid sequi aspernatur, ducimus inventore dolor, ut quod error, mollitia accusamus veritatis facere facilis. Magnam doloremque animi aspernatur soluta omnis explicabo asperiores nostrum a nemo quis harum, suscipit magni vel aliquid eaque ipsum repudiandae? Voluptas praesentium doloremque sit atque sed veniam alias in voluptatibus, quod voluptatem, neque rem cumque quo quaerat culpa?'
                    />

                    {/*
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                */}
                </div>

            </Carousel.Item>

            <Carousel.Item>
                <div class="d-flex h-100 align-items-center justify-content-center">
                    <CajaInf
                        imagen=''
                        alt=''
                        name='segundo'
                        text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit incidunt ad deleniti eos vitae porro sequi alias, deserunt nobis voluptatem, soluta minima, molestias tempora a illo odio eveniet eligendi aspernatur fugiat eius. Numquam ea omnis, sapiente tempora temporibus dicta similique! Ipsum repellendus quas obcaecati id quae. Hic est aliquid sequi aspernatur, ducimus inventore dolor, ut quod error, mollitia accusamus veritatis facere facilis. Magnam doloremque animi aspernatur soluta omnis explicabo asperiores nostrum a nemo quis harum, suscipit magni vel aliquid eaque ipsum repudiandae? Voluptas praesentium doloremque sit atque sed veniam alias in voluptatibus, quod voluptatem, neque rem cumque quo quaerat culpa?'
                    />

                    {/*
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                */}
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div class="d-flex h-100 align-items-center justify-content-center">
                    <CajaInf
                        imagen=''
                        alt=''
                        name='tercero'
                        text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit incidunt ad deleniti eos vitae porro sequi alias, deserunt nobis voluptatem, soluta minima, molestias tempora a illo odio eveniet eligendi aspernatur fugiat eius. Numquam ea omnis, sapiente tempora temporibus dicta similique! Ipsum repellendus quas obcaecati id quae. Hic est aliquid sequi aspernatur, ducimus inventore dolor, ut quod error, mollitia accusamus veritatis facere facilis. Magnam doloremque animi aspernatur soluta omnis explicabo asperiores nostrum a nemo quis harum, suscipit magni vel aliquid eaque ipsum repudiandae? Voluptas praesentium doloremque sit atque sed veniam alias in voluptatibus, quod voluptatem, neque rem cumque quo quaerat culpa?'
                    />

                    {/*
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                */}
                </div>
            </Carousel.Item>

        </Carousel>
    );
}

export default Carrusel;