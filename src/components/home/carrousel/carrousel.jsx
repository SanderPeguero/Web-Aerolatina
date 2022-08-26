import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

import image from '../../../images/HI1070.png'

export default function App() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselInner>

        <MDBCarouselItem className='active' style={{ height: '60rem'}}>
          <MDBCarouselElement style={{ height: '60rem'}} src='https://images.unsplash.com/photo-1494264274944-1ba7d9b73135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80' alt='...' />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem style={{ height: '60rem'}}>
          <MDBCarouselElement  style={{ height: '60rem'}} src='https://images.unsplash.com/photo-1585004873570-03667cd262de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2268&q=80' alt='...' />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        {/* <MDBCarouselItem style={{ height: '60rem'}}>
          <MDBCarouselElement src={image} alt='...' />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem> */}

        <MDBCarouselItem style={{ height: '60rem'}}>
          <MDBCarouselElement style={{ height: '60rem'}} src='https://images.unsplash.com/photo-1586063029643-fd87377743ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' alt='...' />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

      </MDBCarouselInner>
    </MDBCarousel>
  );
}