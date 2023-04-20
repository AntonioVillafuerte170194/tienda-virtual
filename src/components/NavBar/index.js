import React from 'react';
import './navBar.css';
import sale from "../logos/favicon_yard_sale.svg";
import menu from "../icons/icon_menu.svg";
import cart from "../icons/icon_shopping_cart.svg";

const App = () => {
	return (
    <nav>
        <img src={menu} alt="menu" class="menu"/>
        <div class="navbar-left">
            <img src={sale} alt="logo" class="logo"/>
            <ul>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
            </ul>
        </div>
        <div class="navbar-right">
            <ul>
                <li class="navbar-email">example@example.com</li>
                <li class="navbar-shopping-cart">
                    <img src={cart} alt="shopping-cart"/>
                    <div>2</div>
                </li>
            </ul>
        </div>
    </nav>
	);
}

export default App;