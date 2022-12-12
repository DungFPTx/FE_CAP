const Index = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="grid wide">
            <div className="row">
              <div className="col p-6 m-12">
                <form
                  method="post"
                  encType="multipart/form-data"
                  className="checkout-form-validate">
                  <h2 className="form-validate-title">Login</h2>
                  <div className="row no-gutters">
                    <div className="col p-12 m-12">
                      <label className="form-validate-name">
                        Username or email address *
                      </label>
                      <input type="text" className="form-validate-input" />
                    </div>
                    <div className="col p-12 m-12">
                      <label className="form-validate-name">Password *</label>
                      <input type="text" className="form-validate-input" />
                    </div>
                    <div className="account-page-renember-me">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember" className="form-validate-name">
                        {" "}
                        Remember me
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="form-validate-submit-btn">
                    Login
                  </button>
                  <span className="lost-password">Lost your password?</span>
                </form>
              </div>
              <div className="col p-6 m-12">
                <form
                  method="post"
                  encType="multipart/form-data"
                  className="checkout-form-validate">
                  <h2 className="form-validate-title">Register</h2>
                  <div className="row no-gutters">
                    <div className="col p-12 m-12">
                      <label className="form-validate-name">
                        Username or email address *
                      </label>
                      <input type="text" className="form-validate-input" />
                    </div>
                    <div className="col p-12 m-12">
                      <label className="form-validate-name">
                        Email address *
                      </label>
                      <input type="text" className="form-validate-input" />
                    </div>
                    <div className="col p-12 m-12">
                      <label className="form-validate-name">Password *</label>
                      <input type="text" className="form-validate-input" />
                    </div>
                  </div>
                  <div className="checkout-cart-order-des">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our
                    <span>privacy policy.</span>
                  </div>
                  <button type="submit" className="form-validate-submit-btn">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
