import {Link} from "react-router-dom";

const CartFloat = () => {
  return (
    <>
      <span className="header-navbar-cart">
        <div className="navbar-cart-price fz-1-2rem">$ 0.00</div>
        <div className="header-navbar-cart-icon">
          <i className="fa-solid fa-bag-shopping" />
          <span className="cart-icon-count">6</span>
          <div className="header-navbar-cart-drop hide-on-mobile">
            <div className="navbar-cart-empty display__none">
              <div className="navbar-cart-empty-img">
                <img src="src/assets/img/cart-empty.png" alt="empty cart" />
              </div>
              <h4>No products in cart</h4>
            </div>
            <div className="navbar-cart-not-empty">
              <div className="cart-not-empty-all-products">
                <div className="cart-not-empty-product">
                  <div
                    className="not-empty-products-img"
                    style={{
                      backgroundImage:
                        "url(https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg)",
                    }}
                  />
                  <div className="not-empty-products-info">
                    <span className="not-empty-products-name">
                      Basic Colored Sweatpants With Elastic Hems
                    </span>
                    <div className="not-empty-products-amount-price">
                      <span className="amount">1</span> x{" "}
                      <span className="price">$89.00</span>
                    </div>
                    <div className="not-empty-products-color-size">
                      <span className="color">
                        color: <span>Pink</span>
                      </span>
                      <span className="size">
                        Size: <span>S</span>
                      </span>
                    </div>
                  </div>
                  <span className="not-empty-products-del">
                    <i className="fa-solid fa-x" />
                  </span>
                </div>
                <div className="cart-not-empty-product">
                  <div
                    className="not-empty-products-img"
                    style={{
                      backgroundImage:
                        "url(https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg)",
                    }}
                  />
                  <div className="not-empty-products-info">
                    <span className="not-empty-products-name">
                      Basic Colored Sweatpants With Elastic Hems
                    </span>
                    <div className="not-empty-products-amount-price">
                      <span className="amount">1</span> x{" "}
                      <span className="price">$89.00</span>
                    </div>
                    <div className="not-empty-products-color-size">
                      <span className="color">
                        color: <span>Pink</span>
                      </span>
                      <span className="size">
                        Size: <span>S</span>
                      </span>
                    </div>
                  </div>
                  <span className="not-empty-products-del">
                    <i className="fa-solid fa-x" />
                  </span>
                </div>
              </div>
              <div className="cart-not-empty-subtotal">
                <div className="not-empty-total">
                  <p className="not-empty-total-name">Subtotal:</p>
                  <p className="not-empty-total-price">$89.00</p>
                </div>
                <div className="not-empty-items-cart">
                  You have <span className="count">2</span> items in your cart
                </div>
              </div>
              <div className="cart-not-empty-btn">
                <Link to="/cart" className="btn not-empty-btn-ViewCart">
                  ViewCart
                </Link>
                <Link to="/checkout" className="btn not-empty-btn-CheckOut">
                  CheckOut
                </Link>
              </div>
            </div>
          </div>
        </div>
      </span>
    </>
  );
};

export default CartFloat;
