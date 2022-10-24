import "./CardComp.css";
import productDesktop from "./assets/image-product-desktop.jpg";
import productMobile from "./assets/image-product-mobile.jpg";
import cartIcon from "./assets/icon-cart.svg";
import { useState, useEffect } from "react";

function CardComp() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 375px)").matches
    );

    useEffect(() => {
        window
            .matchMedia("(min-width: 375px)")
            .addEventListener("change", (e) => setMatches(e.matches));
    }, []);

    return (
        <div className="CardComp">
            <img src={matches ? productDesktop : productMobile} alt="Product" />
            <div className="productInfo">
                <div className="productType">P E R F U M E</div>
                <div className="productName">
                    Gabrielle Essence Eau De Parfum
                </div>
                <p className="desc">
                    A floral, solar and voluptuous interpretation composed by
                    Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </p>
                <div className="prices">
                    <div className="productPrice">$149.99</div>
                    <div className="originalPrice">$169.99</div>
                </div>
                <div className="addToCartButton">
                    <img src={cartIcon} alt="cIcon" />
                    Add to Cart
                </div>
            </div>
        </div>
    );
}

export default CardComp;
