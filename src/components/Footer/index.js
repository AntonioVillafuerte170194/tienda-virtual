import React from 'react';
import './footer.css';
import logo from "../img/white-logo.png";

const App = () => {
	return (
        <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="first-item">
                        <div class="logo">
                            <img src={logo} alt="hexashop ecommerce templatemo"/>
                        </div>
                        <ul>
                            <li><a href="#">San Salvador de Jujuy, Jujuy, Argentina</a></li>
                            <li><a href="#">diego.villafuerte@company.com</a></li>
                            <li><a href="#">0388-4918517</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <h4>Categorias</h4>
                    <ul>
                        <li><a href="#">Empresas</a></li>
                        <li><a href="#">Campaña Política</a></li>
                        <li><a href="#">Soluciones</a></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h4>Links</h4>
                    <ul>
                        <li><a href="#">Homepage</a></li>
                        <li><a href="#">Sobre Nosotros</a></li>
                        <li><a href="#">Ayuda</a></li>
                        <li><a href="#">Contactenos</a></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h4>Help &amp; Information</h4>
                    <ul>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">FAQ's</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Tracking ID</a></li>
                    </ul>
                </div>
                <div class="col-lg-12">
                    <div class="under-footer">
                        <p>Copyright © 2023 Ariel Web Development All Rights Reserved.</p> 
                        
                        <p>Design: <a href="https://ariel-web-developer.web.app" target="_parent" title="free css templates">Ariel Villafuerte</a></p>

                        <p>Distributed By: <a href="https://diego.com" target="_blank" title="free & premium responsive templates">Diego Villafuerte</a></p>
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
	);
}

export default App;