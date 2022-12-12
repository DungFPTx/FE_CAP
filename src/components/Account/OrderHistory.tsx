const OrderHistory = () => {
  return (
    <>
      <div className="info-content-item active">
        {/* nếu không có order thì dùng */}
        <div className="info-content-order-no-pro">
          <span className="info-content-btn-order">Browse products</span>
          <div className="info-content-order-des">
            No order has been made yet
          </div>
        </div>
        {/* Nếu có order thì dùng */}
        <div className="info-content-order-has-pro">
          <div className="info-content-order-has-pro-item">
            <div className="cart-has-products-title">
              <ul className="has-products-title-list">
                <li className="has-products-title-item">Products</li>
                <li className="has-products-title-item hide-on-mobile">
                  Price
                </li>
                <li className="has-products-title-item">Date Time</li>
                <li className="has-products-title-item">Address</li>
              </ul>
            </div>
            <div className="cart-has-products-pro">
              <div className="has-products-pro-item">
                <span className="has-products-pro-item-del">
                  <i className="fa-solid fa-x" />
                </span>
                <div className="has-products-pro-item-img-name">
                  <img
                    src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg"
                    className="hide-on-mobile"
                    alt=""
                  />
                  <div className="pro_item-name-type">
                    <h4 className="name">
                      Basic Colored Sweatpants With Elastic Hems Basic Colored
                      Sweatpants With Elastic Hems Basic Colored Sweatpants With
                      Elastic Hems
                    </h4>
                    <p className="type hide-on-mobile">
                      Color: <span className="color">Black </span>- Size:{" "}
                      <span className="size">M </span>- Amount:{" "}
                      <span className="amount">2</span>
                    </p>
                  </div>
                </div>
                <div className="has-products-pro-item-price">
                  <div className="pro-item-price hide-on-mobile">$19.00</div>
                  <div className="pro-item-datetime ">12/09/2022</div>
                  <div className="pro-item-address ">Lost angerles</div>
                </div>
              </div>
              <div className="has-products-pro-item">
                <span className="has-products-pro-item-del">
                  <i className="fa-solid fa-x" />
                </span>
                <div className="has-products-pro-item-img-name">
                  <img
                    src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg"
                    className="hide-on-mobile"
                    alt=""
                  />
                  <div className="pro_item-name-type">
                    <h4 className="name">
                      Basic Colored Sweatpants With Elastic Hems
                    </h4>
                    <p className="type hide-on-mobile">
                      Color: <span className="color">Black </span>- Size:{" "}
                      <span className="size">M </span>- Amount:{" "}
                      <span className="amount">2</span>
                    </p>
                  </div>
                </div>
                <div className="has-products-pro-item-price">
                  <div className="pro-item-price hide-on-mobile">$19.00</div>
                  <div className="pro-item-datetime ">12/09/2022</div>
                  <div className="pro-item-address ">Lost angerles</div>
                </div>
              </div>
              <div className="has-products-pro-item">
                <span className="has-products-pro-item-del">
                  <i className="fa-solid fa-x" />
                </span>
                <div className="has-products-pro-item-img-name">
                  <img
                    src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg"
                    className="hide-on-mobile"
                    alt=""
                  />
                  <div className="pro_item-name-type">
                    <h4 className="name">
                      Basic Colored Sweatpants With Elastic Hems
                    </h4>
                    <p className="type hide-on-mobile">
                      Color: <span className="color">Black </span>- Size:{" "}
                      <span className="size">M </span>- Amount:{" "}
                      <span className="amount">2</span>
                    </p>
                  </div>
                </div>
                <div className="has-products-pro-item-price">
                  <div className="pro-item-price hide-on-mobile">$19.00</div>
                  <div className="pro-item-datetime ">12/09/2022</div>
                  <div className="pro-item-address ">Lost angerles</div>
                </div>
              </div>
              <div className="has-products-pro-item">
                <span className="has-products-pro-item-del">
                  <i className="fa-solid fa-x" />
                </span>
                <div className="has-products-pro-item-img-name">
                  <img
                    src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg"
                    className="hide-on-mobile"
                    alt=""
                  />
                  <div className="pro_item-name-type">
                    <h4 className="name">
                      Basic Colored Sweatpants With Elastic Hems
                    </h4>
                    <p className="type hide-on-mobile">
                      Color: <span className="color">Black </span>- Size:{" "}
                      <span className="size">M </span>- Amount:{" "}
                      <span className="amount">2</span>
                    </p>
                  </div>
                </div>
                <div className="has-products-pro-item-price">
                  <div className="pro-item-price hide-on-mobile">$19.00</div>
                  <div className="pro-item-datetime ">12/09/2022</div>
                  <div className="pro-item-address ">Lost angerles</div>
                </div>
              </div>
              <div className="has-products-pro-item">
                <span className="has-products-pro-item-del">
                  <i className="fa-solid fa-x" />
                </span>
                <div className="has-products-pro-item-img-name">
                  <img
                    src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg"
                    className="hide-on-mobile"
                    alt=""
                  />
                  <div className="pro_item-name-type">
                    <h4 className="name">
                      Basic Colored Sweatpants With Elastic Hems
                    </h4>
                    <p className="type hide-on-mobile">
                      Color: <span className="color">Black </span>- Size:{" "}
                      <span className="size">M </span>- Amount:{" "}
                      <span className="amount">2</span>
                    </p>
                  </div>
                </div>
                <div className="has-products-pro-item-price">
                  <div className="pro-item-price hide-on-mobile">$19.00</div>
                  <div className="pro-item-datetime ">12/09/2022</div>
                  <div className="pro-item-address ">Lost angerles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
