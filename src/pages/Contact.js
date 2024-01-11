import '../css/contact.css';
import React from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import { Carousel } from 'react-bootstrap';

const Contact = () => {
    const backgroundImageUrl = 'https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/ARTIFICIAL-INTELLIGENCE.jpg';
    return (
        <div>
          <Navbar/>
            <br />
            <br />
            <div className="slider-area position-relative"
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
                <h1 className='registration'>Contact</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
         
            <div className="container-fluid px-5 my-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center para">
                        <p className='TITRE'>Contact us :</p>
                    </div>
                    <div className="col-xl-10">
                        <div className="card border-0 rounded-3 shadow-lg overflow-hidden">
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-sm-6 d-none d-sm-block bg-image">
                                        <img src="images/ai.jpg" alt="Contact" height="560px" />
                                    </div>
                                    <div className="col-sm-6 p-4 formulaire">
                                        <div className="text-center">
                                            <div className="h4 fw-light" style={{ color: "black"}}>All questions about submissions should be emailed to: Pr. Naoual MOUHNI</div>
                                            <p className="mb-4 text-muted"></p>
                                        </div>

                                        <div className="icon-container">
                                            <p className='iconContact'><i className="fas fa-home mr-3"></i><span className='ecrit1'>Adress :</span>
                                            05 lot bouizgaren, Rte de Safi, Marrakech 40000
                                            </p>
                                            <br />
                                            <p className='iconContact'><i className="fas fa-envelope mr-3"></i>
                                                <span className='ecrit2'>Email :</span> iwssai23@sciencesconf.org<br />
                                                </p><br />
                                            <p className='iconContact'><i className="fas fa-phone mr-3"></i><span className='ecrit3'>Phone :</span> +212 695255905</p><br />
                                            <p className='iconContact'><i className="fas fa-at mr-3"></i><span className='ecrit4'>Network :</span>
                                                <div className='iconsContact'>
                                                    <a href="" className="text-dark me-4">
                                                        <i className="fab fa-facebook-f" style={{ color: "blue" }}></i>
                                                    </a>
                                                    <a href="" className="text-dark me-4">
                                                        <i className="fab fa-youtube" style={{ color: "red" }}></i>
                                                    </a>
                                                    <a href="" className="text-dark me-4">
                                                        <i className="fab fa-instagram" style={{ color: "tomato" }}></i>
                                                    </a>
                                                </div>
                                            </p><br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="embed-responsive embed-responsive-16by9 border" style={{height:"60vh"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.609014184722!2d-8.02285522535889!3d31.64455394099782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee9eb5090999%3A0x2dca05e37a64f83b!2sFacult%C3%A9%20des%20Sciences%20et%20Techniques!5e0!3m2!1sfr!2sma!4v1704995474512!5m2!1sfr!2sma" width="600" height="450" style={{border:0, allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>            </div>
            <Footer/>
        </div>
    );
}

export default Contact;
