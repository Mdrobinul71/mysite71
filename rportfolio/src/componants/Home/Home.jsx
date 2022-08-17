import React from "react";
import "./Home.css";
import { NavLink } from 'react-router-dom';
import pic1 from "../Images/boy2.png";
import Resume from "./Resume.pdf"
import pic2 from "../Images/dgfhg.jpg"
import {BiCodeAlt} from 'react-icons/bi';
import {BiGridAlt} from 'react-icons/bi';
import { DiAndroid } from "react-icons/di";
import pic3 from "../Images/pexels-andrea-piacquadio-920382.jpg";
import pic4 from "../Images/pexels-photo-3182792.jpeg";



const Home = () => {
  return (
    <div>
      <div className="container-fluied">
        <div className="row">
          <div className="col-12 ms-4">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12  order-2 order-lg-0 d-flex justify-content-center flex-column">
                <h1>
                  Grow Your <strong className="text-primary">Bussiness</strong> with us
                </h1>
                <h2 className="my-3 text-success">We are the team of talanted developer</h2>
                <div className="my-3">
                  <NavLink to="/service" className="btn btn-primary">
                    Get Started
                  </NavLink>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 my-3 col-sm-12  order-1 order-lg-2">
                <img
                  src={pic1}
                  className="rounded"
                  width="70%"
                  height="300px"
                  alt={pic1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="about py-5 " id="about">
        <div className="container-lg py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <h1 className="my-3 py-4 pk">About Me</h1>
                <hr className="w-50 mx-auto bg-primary" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="about-text">
                <h3 className="co">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, eligendi!
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos praesentium aliquam commodi molestias qui?
                  Perferendis expedita rerum cupiditate sunt labore!
                </p>
              </div>

              <div className="row text-center">
                <div className="col-sm-4">
                  <div className="fact-items">
                    <h4>100</h4>
                    <p>Project completed</p>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="fact-items">
                    <h4>95</h4>
                    <p>Happy clients</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="fact-items">
                    <h4>90</h4>
                    <p>Positive reviews</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <a href={Resume} download>
                  <button className="btn btn-primary">Download CV</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <h3>HTML</h3>
              <div className="progress">
                <div className="progress-bar  pr"></div>
              </div>

              <h3>CSS</h3>
              <div className="progress">
                <div className="progress-bar  pr2"></div>
              </div>
              <h3>JAVASCRIPT</h3>
              <div className="progress">
                <div className="progress-bar pr"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="services my-2">
        <div className="container-lg">
        <h2 className="text-center text-danger py-3 ">What i do</h2>
        <hr className="w-50  mx-auto" />
          
          <div className="row p-4 ">
            <div className="col-lg-12 text-center mx-auto">
              <div className="row ">

                <div className="col-md-6 col-lg-4">
                  <div className="shadow p-4 rounded">
                  <BiCodeAlt className="fk" />
                  <h3 className="py-3">Web Develment</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, sapiente!</p>
                </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="shadow p-4 rounded">
                  <DiAndroid className="fk" />
                  <h3 className="py-3">App Develement</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, sapiente!</p>
                </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="shadow p-4 rounded">
                  < BiGridAlt className="fk" />
                  <h3 className="py-3">Graphice Design</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, sapiente!</p>
                </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio my-5">
        <div className="container justify-content-center">
        <h2 className="text-center fw-bold text-info">Latest work</h2>
        <hr className="w-50 mx-auto" />
          <div className="row">
            <div className="col-lg-10 g-3 mx-auto">
              <div className="row">


              <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card shadow h-100">
      <img src={pic3} className="card-img-top" alt="pic3" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow h-100">
    <img src={pic4} className="card-img-top" alt="pic4" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow h-100">
    <img src={pic3} className="card-img-top" alt="pic3" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow h-100">
    <img src={pic3} className="card-img-top" alt="pic3" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card shadow h-100">
    <img src={pic4} className="card-img-top" alt="pic4" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow h-100">
    <img src={pic3} class="card-img-top" alt="pic3" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

</div>
  </div>
        </div>
      </div>
      </div>
    </section>


      <section className="py-5 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="text-center">
                <h4>Do u have any project</h4>
                <h2>WE are creative group of peoples who design minimal and functional website</h2>
                <a className="btn btn-info" href="/contact">Hire me</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial py-5">
        <div className="container">
          <h2 className="text-center">Testimonial</h2>
          <hr className="w-50 mx-auto" />
        </div>

        <div id="demo" className="carousel slide" data-bs-ride="carousel">


  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active bg-danger m-2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1" className="bg-danger m-2" ></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2" className="bg-danger m-2" ></button>
  </div>

 
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="row justify-content-center d-flex">
            <div className="col-lg-8  col-xl-7 m-4 bg-white shadow-sm shadow-lg p-3  rounded text-center">
              <img className="rounded-circle" src={pic2} width="200px" alt={pic2} />
              <div>
                <h3>Robin js</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
    </div>
    <div className="carousel-item">
    <div className="row justify-content-center d-flex">
            <div className="col-lg-8  col-xl-7 m-4 bg-white shadow-sm shadow-lg p-3  rounded text-center">
              <img className="rounded-circle" src={pic2} width="200px" alt={pic2} />
              <div>
                <h3>Robin js</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
    </div>
    <div className="carousel-item">
    <div className="row justify-content-center d-flex">
            <div className="col-lg-8  col-xl-7 m-4 bg-white shadow-sm shadow-lg p-3  rounded text-center">
              <img className="rounded-circle" src={pic2} width="200px" alt={pic2} />
              <div>
                <h3>Robin js</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
      </section>
      
    </div>
  );
};

export default Home;
