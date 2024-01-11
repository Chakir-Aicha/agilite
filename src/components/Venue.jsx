import React from 'react';
import Footer from "../components/footer";
import Header from "../components/navbar";

const Venue = () => {
    const lat = 31.68338067878764;
    const lon = -7.99383458895613;

    const backgroundImageUrl = 'https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/ARTIFICIAL-INTELLIGENCE.jpg';

    return (
        <>
   <Header />

<br/>
<br/>
<div
        className="slider-area position-relative"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundRepeat: 'no-repeat',
          color: 'white',
          backgroundSize: 'cover',
          height: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-9 col-sm-10">
              <div className="hero__caption2">
                <h1 className='registration'>Venue</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      <br /><br /><br /><br />
      <p style={{ textAlign: 'center' }}>
      <span style={{ fontSize: 'medium' }}>
      <span className="LrzXr">
      <img style={{width:'80%'}}  title="venue" src="https://iwssai23.sciencesconf.org/data/pages/Venue.png" alt="venue" /><br />
    </span>
  </span>
</p>

<br />
<p style={{marginLeft:'600px'}}><span style={{fontSize: 'large'}}><strong style={{textAlign: 'center'}}>Marrakesh, Morocco</strong></span></p>
<br />

<p style={{textAlign: 'center'}}><strong>&nbsp;<img style={{width:'80%'}} title="kech" src="https://iwssai23.sciencesconf.org/data/pages/KechSite_1.png" alt="kech" /></strong></p>




            <Footer />

        </>
    );
};

export default Venue;
