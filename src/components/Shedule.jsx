import React from "react";
import Footer from "../components/footer";
import Header from "../components/navbar";
import './Shedule.css'
const Shedule = () => {
    const backgroundImageUrl = 'https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/ARTIFICIAL-INTELLIGENCE.jpg';

    return ( 



        <>
        
        
        <Header />
 
   
        <div
        className="slider-area position-relative"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundRepeat: 'no-repeat',
          color: 'white',
          backgroundSize: 'cover',
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-9 col-sm-10">
              <div className="hero__caption2">
                <h1 className='registration'>Program</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
<br /><br /><br />
    <section class="schedule-table-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="schedule-table-tab">
                        <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                                <a class="nav-link hovr-bg" data-toggle="tab" href="#tabs-2" role="tab" >Marketing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link hovr-bg" data-toggle="tab" href="#tabs-2" role="tab" >Business</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link hovr-bg" data-toggle="tab" href="#tabs-3" role="tab" >Technology</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link hovr-bg" data-toggle="tab" href="#tabs-4" role="tab" >Experience</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link hovr-bg" data-toggle="tab" href="#tabs-5" role="tab" >Event</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                <div class="schedule-table-content">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>
                                                    <strong>Day 1</strong>
                                                    <span>May 09, 2019</span>
                                                </th>
                                                <th>
                                                    <strong>Day 2</strong>
                                                    <span>May 11, 2019</span>
                                                </th>
                                                <th>
                                                    <strong>Day 3</strong>
                                                    <span>May 12, 2019</span>
                                                </th>
                                                <th>
                                                    <strong>Day 4</strong>
                                                    <span>May 14, 2019</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="event-time">10:00</td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="event-time">11:00</td>
                                                <td class="hovr-bg">
                                                    <h5>Talking To Life</h5>
                                                    <p><span>By</span> John Smith</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Social Website</h5>
                                                    <p><span>By</span> Delia Mullins</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Introduce Technology</h5>
                                                    <p><span>By</span> Bryan Clark</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Marketing Design</h5>
                                                    <p><span>By</span> Ida Manning</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="event-time">13:30</td>
                                                <td class="hovr-bg">
                                                    <h5>Meet Up Marketing</h5>
                                                    <p><span>By</span> Mc Cage</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Conect People</h5>
                                                    <p><span>By</span> James Colon</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Maximize CEO</h5>
                                                    <p><span>By</span> Elmer Dunn</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Reinventing Experiences</h5>
                                                    <p><span>By</span> Martha Fuller</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="event-time">18:00</td>
                                                <td class="hovr-bg">
                                                    <h5>Technology Future</h5>
                                                    <p><span>By</span> Thomas Munoz</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Reinventing Experiences</h5>
                                                    <p><span>By</span> Mattie Hanson</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Camping</h5>
                                                    <p><span>By</span> Rachel Arnold</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Social Website</h5>
                                                    <p><span>By</span> Leonard Daniels</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-2" role="tabpanel">
                                <div class="schedule-table-content">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>
                                                    <strong>Day 1</strong>
                                                    <span>May 09, 2019</span>
                                                </th>
                                                <th>
                                                    <strong>Day 2</strong>
                                                    <span>May 11, 2019</span>
                                                </th>
                                                <th>
                                                    <strong>Day 3</strong>
                                                    <span>May 12, 2019</span>
                                                </th>
                                                <th>
                                                    <strong>Day 4</strong>
                                                    <span>May 14, 2019</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="event-time">15:00</td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="event-time">16:00</td>
                                                <td class="hovr-bg">
                                                    <h5>Talking To Life</h5>
                                                    <p><span>By</span> John Smith</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Social Website</h5>
                                                    <p><span>By</span> Delia Mullins</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Introduce Technology</h5>
                                                    <p><span>By</span> Bryan Clark</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Marketing Design</h5>
                                                    <p><span>By</span> Ida Manning</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="event-time">17:30</td>
                                                <td class="hovr-bg">
                                                    <h5>Meet Up Marketing</h5>
                                                    <p><span>By</span> Mc Cage</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Conect People</h5>
                                                    <p><span>By</span> James Colon</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Maximize CEO</h5>
                                                    <p><span>By</span> Elmer Dunn</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Reinventing Experiences</h5>
                                                    <p><span>By</span> Martha Fuller</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="event-time">18:00</td>
                                                <td class="hovr-bg">
                                                    <h5>Technology Future</h5>
                                                    <p><span>By</span> Thomas Munoz</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Reinventing Experiences</h5>
                                                    <p><span>By</span> Mattie Hanson</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Camping</h5>
                                                    <p><span>By</span> Rachel Arnold</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Social Website</h5>
                                                    <p><span>By</span> Leonard Daniels</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-3" role="tabpanel">
                                <div class="schedule-table-content">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>
                                                    <strong>Day 1</strong>
                                                    <span>May 09, 2019</span>
                                                </th>
                                                <th>
                                                    <strong>Day 2</strong>
                                                    <span>May 11, 2019</span>
                                                </th>
                                                <th>
                                                    <strong>Day 3</strong>
                                                    <span>May 12, 2019</span>
                                                </th>
                                                <th>
                                                    <strong>Day 4</strong>
                                                    <span>May 14, 2019</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="event-time">16:00</td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="event-time">17:00</td>
                                                <td class="hovr-bg">
                                                    <h5>Talking To Life</h5>
                                                    <p><span>By</span> John Smith</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Social Website</h5>
                                                    <p><span>By</span> Delia Mullins</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Introduce Technology</h5>
                                                    <p><span>By</span> Bryan Clark</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Marketing Design</h5>
                                                    <p><span>By</span> Ida Manning</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="event-time">18:30</td>
                                                <td class="hovr-bg">
                                                    <h5>Meet Up Marketing</h5>
                                                    <p><span>By</span> Mc Cage</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Conect People</h5>
                                                    <p><span>By</span> James Colon</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Maximize CEO</h5>
                                                    <p><span>By</span> Elmer Dunn</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Reinventing Experiences</h5>
                                                    <p><span>By</span> Martha Fuller</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="event-time">19:00</td>
                                                <td class="hovr-bg">
                                                    <h5>Technology Future</h5>
                                                    <p><span>By</span> Thomas Munoz</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Reinventing Experiences</h5>
                                                    <p><span>By</span> Mattie Hanson</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Camping</h5>
                                                    <p><span>By</span> Rachel Arnold</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Social Website</h5>
                                                    <p><span>By</span> Leonard Daniels</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-4" role="tabpanel">
                                <div class="schedule-table-content">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>
                                                    <strong>Day 1</strong>
                                                    <span>May 09, 2019</span>
                                                </th>
                                                <th>
                                                    <strong>Day 2</strong>
                                                    <span>May 11, 2019</span>
                                                </th>
                                                <th>
                                                    <strong>Day 3</strong>
                                                    <span>May 12, 2019</span>
                                                </th>
                                                <th>
                                                    <strong>Day 4</strong>
                                                    <span>May 14, 2019</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="event-time">09:00</td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="event-time">10:00</td>
                                                <td class="hovr-bg">
                                                    <h5>Talking To Life</h5>
                                                    <p><span>By</span> John Smith</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Social Website</h5>
                                                    <p><span>By</span> Delia Mullins</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Introduce Technology</h5>
                                                    <p><span>By</span> Bryan Clark</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Marketing Design</h5>
                                                    <p><span>By</span> Ida Manning</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="event-time">13:30</td>
                                                <td class="hovr-bg">
                                                    <h5>Meet Up Marketing</h5>
                                                    <p><span>By</span> Mc Cage</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Conect People</h5>
                                                    <p><span>By</span> James Colon</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Maximize CEO</h5>
                                                    <p><span>By</span> Elmer Dunn</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Reinventing Experiences</h5>
                                                    <p><span>By</span> Martha Fuller</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="event-time">14:00</td>
                                                <td class="hovr-bg">
                                                    <h5>Technology Future</h5>
                                                    <p><span>By</span> Thomas Munoz</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Reinventing Experiences</h5>
                                                    <p><span>By</span> Mattie Hanson</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Camping</h5>
                                                    <p><span>By</span> Rachel Arnold</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Social Website</h5>
                                                    <p><span>By</span> Leonard Daniels</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-5" role="tabpanel">
                                <div class="schedule-table-content">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>
                                                    <strong>Day 1</strong>
                                                    <span>May 09, 2019</span>
                                                </th>
                                                <th>
                                                    <strong>Day 2</strong>
                                                    <span>May 11, 2019</span>
                                                </th>
                                                <th>
                                                    <strong>Day 3</strong>
                                                    <span>May 12, 2019</span>
                                                </th>
                                                <th>
                                                    <strong>Day 4</strong>
                                                    <span>May 14, 2019</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="event-time">20:00</td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                                <td class="break hovr-bg">
                                                    <h5>Coffee Break</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="event-time">22:00</td>
                                                <td class="hovr-bg">
                                                    <h5>Talking To Life</h5>
                                                    <p><span>By</span> John Smith</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Social Website</h5>
                                                    <p><span>By</span> Delia Mullins</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Introduce Technology</h5>
                                                    <p><span>By</span> Bryan Clark</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Marketing Design</h5>
                                                    <p><span>By</span> Ida Manning</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="event-time">23:30</td>
                                                <td class="hovr-bg">
                                                    <h5>Meet Up Marketing</h5>
                                                    <p><span>By</span> Mc Cage</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Conect People</h5>
                                                    <p><span>By</span> James Colon</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Maximize CEO</h5>
                                                    <p><span>By</span> Elmer Dunn</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Reinventing Experiences</h5>
                                                    <p><span>By</span> Martha Fuller</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="event-time">24:00</td>
                                                <td class="hovr-bg">
                                                    <h5>Technology Future</h5>
                                                    <p><span>By</span> Thomas Munoz</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Reinventing Experiences</h5>
                                                    <p><span>By</span> Mattie Hanson</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Camping</h5>
                                                    <p><span>By</span> Rachel Arnold</p>
                                                </td>
                                                <td class="hovr-bg">
                                                    <h5>Social Website</h5>
                                                    <p><span>By</span> Leonard Daniels</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
  
    <Footer />
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/jquery.countdown.min.js"></script>
    <script src="js/jquery.slicknav.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/main.js"></script>








        
        
        </>
    )};

export default Shedule;