import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Encuentranos en las redes sociales:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <i className='bi bi-facebook'/>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='bi bi-twitter'/>
          </a>
          <a href='https://www.instagram.com/aerolatina_/' className='me-4 text-reset'>
            <i className='bi bi-instagram'/>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='bi bi-youtube'/>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Aerolatina
              </h6>
              <p>
                Somos una academia de vuelo ubicada en Santiado, Republica Dominicana que ha formado a cientos de pilotos desde el año 1987
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='pilotpass' className='text-reset'>
                  Pilot Pass
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Rentas
                </a>
              </p>
              <p>
                <a href='/pilotos' className='text-reset'>
                  Pilot Log
                </a>
              </p>
              {/* <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p> */}
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i class="bi bi-envelope-fill">
                </i>
                {" aerolatina@hotmail.com"}
              </p>
              <p>
                <i class="bi bi-telephone-fill"></i>
                {" +1 (809) 233-8200"}
              </p>
              <p>
                <i class="bi bi-geo-alt-fill">
                    Edf. Aviacion General, AIC , 51000, República Dominicana
                </i>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright Academia Aeronautica Latina
        {/* <a className='text-reset fw-bold' href='https://mdbootstrap.com/'> */}
        {/* </a> */}
      </div>
    </MDBFooter>
  );
}