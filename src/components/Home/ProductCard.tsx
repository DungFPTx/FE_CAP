const ProductCard = () => {
  return (
    <>
      <div className="col p-3 m-6">
        <div className="body-background-products">
          <div
            className="background-products-img"
            style={{
              backgroundImage:
                "url(https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg)",
            }}></div>
          <div className="background-products-info">
            <div className="products-info-start fz-1-6rem">
              <i className="fa-solid fa-star" /> 1 review
            </div>
            <div className="products-info-name fz-1-6rem">
              <span className="products-info-link">
                Basic High-Neck Puff Jacket
              </span>
            </div>
            <div className="products-info-price">
              <div className="products-info-price-new fz-1-6rem">$89.00</div>
              <del className="products-info-price-old">$100.00</del>
            </div>
          </div>
          <div className="background-products-shopping">
            <div className="products-shopping-item active fz-1-6rem">
              <i className="fa-solid fa-heart" />
            </div>
            <div className="products-shopping-item fz-1-6rem">
              <i className="fa-solid fa-bag-shopping" />
            </div>
          </div>
          <div className="products-shopping-discount fz-1-6rem">-17%</div>
          <div className="products-shopping-flashsale fz-1-6rem">
            <i className="fa-solid fa-bolt" />
            Sale
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
