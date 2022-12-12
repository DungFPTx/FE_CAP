const CartItem = () => {
  return (
    <>
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
            <h4 className="name">Basic Colored Sweatpants With Elastic Hems</h4>
            <p className="type hide-on-mobile">
              Color: <span className="color">Black</span> Size:{" "}
              <span className="size">M</span>
            </p>
          </div>
        </div>
        <div className="has-products-pro-item-price">
          <div className="pro-item-price hide-on-mobile">$19.00</div>
          <div className="pro-item-quantity">
            <i className="fa-solid fa-minus" />
            <span>1</span>
            <i className="fa-solid fa-plus" />
          </div>
          <div className="pro-item-subtotal">$19.00</div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
