// import { Routes, Route } from "react-router-dom";
// import './Banner.css';
import './templatemo-hexashop1.css'

import image1 from "../img/left-banner-image.jpg";
import image2 from "../img/baner-right-image-01.jpg";
import image3 from "../img/baner-right-image-02.jpg";
import image4 from "../img/baner-right-image-03.jpg";
import image5 from "../img/baner-right-image-04.jpg";

export default function App() {
  return (
    <div class="main-banner" id="top">
      <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6">
                <div class="left-content">
                  <div class="thumb">
                    <div class="inner-content">
                      <h4>Campeones</h4>
                      <span>El sueño cumplido de todos los Argentinos</span>
                      <div class="main-border-button">
                        <a href="#">Sorprendete!</a>
                      </div>
                    </div>
                    <img src={image1} alt="no" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="right-content">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="right-first-image">
                        <div class="thumb">
                          <div class="inner-content">
                            <h4>Automovilismo</h4>
                            <span>Pasion por las marcas</span>
                          </div>
                          <div class="hover-content">
                            <div class="inner">
                              <h4>Automovilismo</h4>
                              <p>
                                Decora tus paredes con la pasion por los
                                automotores
                              </p>
                              <div class="main-border-button">
                                <a href="#">Ver mas</a>
                              </div>
                            </div>
                          </div>
                          <img src={image2} alt= "no"/>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="right-first-image">
                        <div class="thumb">
                          <div class="inner-content">
                            <h4>Gran Prix</h4>
                            <span>Ineditas tomas</span>
                          </div>
                          <div class="hover-content">
                            <div class="inner">
                              <h4>Gran Prix</h4>
                              <p>
                                La mas alta categoria del automovilistmo y del
                                motociclismo
                              </p>
                              <div class="main-border-button">
                                <a href="#">Ver mas</a>
                              </div>
                            </div>
                          </div>
                          <img src={image3} alt="no" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="right-first-image">
                        <div class="thumb">
                          <div class="inner-content">
                            <h4>Tendencia</h4>
                            <span>Los cuadros mas vendidos</span>
                          </div>
                          <div class="hover-content">
                            <div class="inner">
                              <h4>Tendencia</h4>
                              <p>Hasta el mas minimo detalle</p>
                              <div class="main-border-button">
                                <a href="#">Ver mas</a>
                              </div>
                            </div>
                          </div>
                          <img src={image4} alt="no" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="right-first-image">
                        <div class="thumb">
                          <div class="inner-content">
                            <h4>Regalo perfecto</h4>
                            <span>Obsequia buenos momentos</span>
                          </div>
                          <div class="hover-content">
                            <div class="inner">
                              <h4>Regalo perfecto</h4>
                              <p>
                                Crea el momento perfecto del dia con un detalle
                              </p>
                              <div class="main-border-button">
                                <a href="#">Ver mas</a>
                              </div>
                            </div>
                          </div>
                          <img src={image5} alt="no" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}
