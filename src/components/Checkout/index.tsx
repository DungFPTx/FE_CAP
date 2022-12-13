import {CheckoutStatic1} from "../Static/Checkout";

const Index = () => {
  return (
    <>
      <div>
        <div className="containerxx">
          <div className="grid wide">
            <div className="row">
              <form
                method="post"
                encType="multipart/form-data"
                className="checkout-form-validate">
                <div className="row">
                  <div className="col p-8 m-12">
                    <h2 className="form-validate-title">Billing details</h2>
                    <div className="row no-gutters">
                      <div className="col p-12 m-12">
                        <label className="form-validate-name">
                          First name *
                        </label>
                        <input type="text" className="form-validate-input" />
                      </div>
                      <div className="col p-12 m-12">
                        <label className="form-validate-name">
                          Last name *
                        </label>
                        <input type="text" className="form-validate-input" />
                      </div>
                      <div className="col p-12 m-12">
                        <label className="form-validate-name">
                          Company name (optional)
                        </label>
                        <input type="text" className="form-validate-input" />
                      </div>
                      <div className="col p-12 m-12">
                        <label className="form-validate-name">
                          Country / Region *
                        </label>
                        <select>
                          <option>Viet Nam</option>
                          <option>Thai land</option>
                          <option>China</option>
                        </select>
                      </div>
                      <div className="col p-12 m-12">
                        <label className="form-validate-name">
                          Street address *
                        </label>
                        <input type="text" className="form-validate-input" />
                      </div>
                      <div className="col p-12 m-12">
                        <label className="form-validate-name">
                          Town / City *
                        </label>
                        <input type="text" className="form-validate-input" />
                      </div>
                      <div className="col p-12 m-12">
                        <label className="form-validate-name">State</label>
                        <select>
                          <option>Viet Nam</option>
                          <option>Thai land</option>
                          <option>China</option>
                        </select>
                      </div>
                      <div className="col p-12 m-12">
                        <label className="form-validate-name">ZIP Code *</label>
                        <input type="text" className="form-validate-input" />
                      </div>
                      <div className="col p-12 m-12">
                        <label className="form-validate-name">Phone *</label>
                        <input type="text" className="form-validate-input" />
                      </div>
                      <div className="col p-12 m-12">
                        <label className="form-validate-name">
                          Email address *
                        </label>
                        <input type="text" className="form-validate-input" />
                      </div>
                      <div className="col p-12 m-12">
                        <div className="create-account">
                          <input type="checkbox" id="create-account" />
                          <label
                            htmlFor="create-account"
                            className="form-validate-name">
                            {" "}
                            Create an account?
                          </label>
                          <div className="create-account-input">
                            <div className="row no-gutters">
                              <div className="col p-12 m-12">
                                <label className="form-validate-name">
                                  Account username *
                                </label>
                                <input
                                  type="text"
                                  className="form-validate-input"
                                />
                              </div>
                              <div className="col p-12 m-12">
                                <label className="form-validate-name">
                                  Create Account password *
                                </label>
                                <input
                                  type="password"
                                  className="form-validate-input"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col p-12 m-12">
                        <div className="diferent-address">
                          <input type="checkbox" id="diferent-address" />
                          <label
                            htmlFor="diferent-address"
                            className="form-validate-name">
                            {" "}
                            Ship to a different address?
                          </label>
                          <div className="diferent-address-input">
                            <div className="row no-gutters">
                              <div className="col p-12 m-12">
                                <label className="form-validate-name">
                                  First name *
                                </label>
                                <input
                                  type="text"
                                  className="form-validate-input"
                                />
                              </div>
                              <div className="col p-12 m-12">
                                <label className="form-validate-name">
                                  Last name *
                                </label>
                                <input
                                  type="text"
                                  className="form-validate-input"
                                />
                              </div>
                              <div className="col p-12 m-12">
                                <label className="form-validate-name">
                                  Company name (optional)
                                </label>
                                <input
                                  type="text"
                                  className="form-validate-input"
                                />
                              </div>
                              <div className="col p-12 m-12">
                                <label className="form-validate-name">
                                  Country / Region *
                                </label>
                                <select>
                                  <option>Viet Nam</option>
                                  <option>Thai land</option>
                                  <option>China</option>
                                </select>
                              </div>
                              <div className="col p-12 m-12">
                                <label className="form-validate-name">
                                  Street address *
                                </label>
                                <input
                                  type="text"
                                  className="form-validate-input"
                                />
                              </div>
                              <div className="col p-12 m-12">
                                <label className="form-validate-name">
                                  Town / City *
                                </label>
                                <input
                                  type="text"
                                  className="form-validate-input"
                                />
                              </div>
                              <div className="col p-12 m-12">
                                <label className="form-validate-name">
                                  State
                                </label>
                                <select>
                                  <option>Viet Nam</option>
                                  <option>Thai land</option>
                                  <option>China</option>
                                </select>
                              </div>
                              <div className="col p-12 m-12">
                                <label className="form-validate-name">
                                  ZIP Code *
                                </label>
                                <input
                                  type="text"
                                  className="form-validate-input"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col p-12 m-12">
                        <label className="form-validate-name">
                          Order notes (optional)
                        </label>
                        <textarea
                          className="form-validate-input"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col p-4 m-12">
                    <div className="checkout-cart-order">
                      <h3 className="checkout-cart-order-name">Your order</h3>
                      <div className="checkout-cart-order-pro-subtotal">
                        <div className="product">Product</div>
                        <div className="Subtotal">Subtotal</div>
                      </div>
                      <div className="checkout-cart-order-type">
                        <div className="product_type">
                          <div className="product_type-name">
                            Basic High-Neck Puff Jacket X <strong>1</strong>
                          </div>
                        </div>
                        <div className="product_total">$24.00</div>
                      </div>
                      <div className="checkout-cart-order-shipping">
                        <div className="shipping-name">Subtotal</div>
                        <div className="shipping-type">
                          <label htmlFor="flat-rate" className="flat-rate">
                            Flate rate: <span className="money">$15.00</span>
                            <input name="type" type="radio" id="flat-rate" />
                          </label>
                          <label
                            htmlFor="local-pickup"
                            className="local-pickup">
                            Local pickup
                            <input name="type" type="radio" id="local-pickup" />
                          </label>
                        </div>
                      </div>
                      <div className="checkout-cart-order-total">
                        <p className="total-allTotal-name">Total</p>
                        <div className="all-money">$19.00</div>
                      </div>
                      <div className="checkout-cart-order-transfer">
                        <div className="transfer-type">
                          <input
                            type="radio"
                            name="transfer"
                            id="transfer-bank"
                          />
                          <label htmlFor="transfer-bank">
                            Direct bank transfer
                          </label>
                          <p className="transfer-des">
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                            Your order will not be shipped until the funds have
                            cleared in our account.
                          </p>
                        </div>
                        <div className="transfer-type">
                          <input
                            type="radio"
                            name="transfer"
                            id="transfer-payments"
                          />
                          <label htmlFor="transfer-payments">
                            Check payments
                          </label>
                          <p className="transfer-des">
                            Please send a check to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </p>
                        </div>
                        <div className="transfer-type">
                          <input
                            type="radio"
                            name="transfer"
                            id="transfer-delivery"
                          />
                          <label htmlFor="transfer-delivery">
                            Cash on delivery
                          </label>
                          <p className="transfer-des">
                            Pay with cash upon delivery.
                          </p>
                        </div>
                      </div>
                      <CheckoutStatic1 />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
