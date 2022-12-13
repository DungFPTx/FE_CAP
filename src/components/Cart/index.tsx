import CartItem from "./CartItem";

const Index = () => {
  return (
    <>
      <div className="containerxx">
        <div className="grid wide">
          <div className="row">
            <div className="col p-9 m-12">
              <div className="cart-has-products">
                <div className="cart-has-products-title">
                  <ul className="has-products-title-list">
                    <li className="has-products-title-item">Products</li>
                    <li className="has-products-title-item hide-on-mobile">
                      Price
                    </li>
                    <li className="has-products-title-item">Quantity</li>
                    <li className="has-products-title-item">Subtotal</li>
                  </ul>
                </div>
                <div className="cart-has-products-pro">
                  <CartItem />
                  <CartItem />
                </div>
              </div>
              <div className="products-in-cart-coupon">
                <div className="products-in-cart-coupon-input">
                  <input type="text" placeholder="Coupon Code" />
                  <button type="submit">Apply a coupon</button>
                </div>
                <button className="products-in-cart-coupon-update">
                  Update cart
                </button>
              </div>
            </div>
            <div className="col p-3 m-12">
              <div className="cart-products-cart_total">
                <h2 className="cart_total-name">Cart totals</h2>
                <div className="cart_total-subtotal">
                  <p className="name">Subtotal:</p>
                  <p className="money">$19.00</p>
                </div>
                <div className="cart_total-shipping">
                  <p className="total-shipping-name">Shipping</p>
                  <div className="total-shipping-info">
                    <label htmlFor="flat-rate" className="flat-rate">
                      Flate rate: <span className="money">$15.00</span>
                      <input name="type" type="radio" id="flat-rate" />
                    </label>
                    <label htmlFor="local-pickup" className="local-pickup">
                      Local pickup
                      <input name="type" type="radio" id="local-pickup" />
                    </label>
                  </div>
                </div>
                <div className="cart_total-allTotal">
                  <p className="total-allTotal-name">Total</p>
                  <div className="all-money">$19.00</div>
                </div>
                <button className="cart-total-checkout-btn">
                  Proceed to check out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
