import "./CardComp.css";
import productDesktop from "./assets/image-product-desktop.jpg";
import cartIcon from "./assets/icon-cart.svg";

function CardComp() {
    return (
        <div className="CardComp">
            <img src={productDesktop} alt="Product" />
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
                    <img src={cartIcon} />
                    Add to Cart
                </div>
            </div>
        </div>
    );
}

export default CardComp;
