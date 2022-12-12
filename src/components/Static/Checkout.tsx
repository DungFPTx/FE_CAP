const CheckoutStatic1 = () => {
  return (
    <>
      <div className="checkout-cart-order-des">
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our
        <span>privacy policy.</span>
      </div>
      <div className="checkout-cart-order-policy">
        <input type="checkbox" id="checkout-cart-order-policy" checked />
        <label htmlFor="checkout-cart-order-policy">
          I have read and agree to the website <span>terms and conditions</span>
        </label>
      </div>
      <button className="checkout-cart-order-btn" type="submit">
        PLace order
      </button>
    </>
  );
};

export {CheckoutStatic1};
