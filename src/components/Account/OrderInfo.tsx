// noinspection DuplicatedCode

const OrderInfo = () => {
  return (
    <>
      <div className="info-content-item active">
        <form
          method="post"
          encType="multipart/form-data"
          className="checkout-form-validate">
          <h2 className="form-validate-title">Address</h2>
          <div className="row no-gutters">
            <div className="col p-12 m-12">
              <label className="form-validate-name">First name *</label>
              <input type="text" className="form-validate-input" />
            </div>
            <div className="col p-12 m-12">
              <label className="form-validate-name">Last name *</label>
              <input type="text" className="form-validate-input" />
            </div>
            <div className="col p-12 m-12">
              <label className="form-validate-name">
                Company name (optional)
              </label>
              <input type="text" className="form-validate-input" />
            </div>
            <div className="col p-12 m-12">
              <label className="form-validate-name">Country / Region *</label>
              <select>
                <option>Viet Nam</option>
                <option>Thai land</option>
                <option>China</option>
              </select>
            </div>
            <div className="col p-12 m-12">
              <label className="form-validate-name">Street address *</label>
              <input type="text" className="form-validate-input" />
            </div>
            <div className="col p-12 m-12">
              <label className="form-validate-name">Town / City *</label>
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
              <label className="form-validate-name">Email address *</label>
              <input type="text" className="form-validate-input" />
            </div>
            <div className="col p-12 m-12">
              <div className="create-account">
                <input type="checkbox" id="create-account" />
                <label htmlFor="create-account" className="form-validate-name">
                  {" "}
                  Create an account?
                </label>
                <div className="create-account-input">
                  <div className="row no-gutters">
                    <div className="col p-12 m-12">
                      <label className="form-validate-name">
                        Account username *
                      </label>
                      <input type="text" className="form-validate-input" />
                    </div>
                    <div className="col p-12 m-12">
                      <label className="form-validate-name">
                        Create Account password *
                      </label>
                      <input type="password" className="form-validate-input" />
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
                      <label className="form-validate-name">First name *</label>
                      <input type="text" className="form-validate-input" />
                    </div>
                    <div className="col p-12 m-12">
                      <label className="form-validate-name">Last name *</label>
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col p-12 m-12">
              <label className="form-validate-name">
                Order notes (optional)
              </label>
              <textarea className="form-validate-input" defaultValue={""} />
            </div>
          </div>
          <button type="submit" className="form-validate-submit-btn">
            Update Address
          </button>
        </form>
      </div>
    </>
  );
};

export default OrderInfo;
