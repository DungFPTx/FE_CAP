import Description from "./Description";
import Addition from "./Addition";
import Review from "./Review";
import ProductCardRecently from "../Reuse/ProductCardRecently";
import getParams from "../../utils/hook/getParam";
import {useNormalEffect} from "../../utils/hook/useUpdateEffect";
import clsx from "clsx";

const Index = () => {
  const [setSearchParams, [part]] = getParams("part");

  useNormalEffect(() => {
    if (!part) {
      setSearchParams({part: "description"});
    }
  }, [part]);

  return (
    <>
      <div className="container">
        <div className="grid wide">
          <div className="row">
            <div className="col p-12">
              <div className="pro-woocommerce">
                <ul className="pro-woocommerce-list">
                  <li className="pro-woocommerce-item">
                    <span className="pro-woocommerce-item-link">Home</span>/
                  </li>
                  <li className="pro-woocommerce-item">
                    <span className="pro-woocommerce-item-link">Women</span>/
                  </li>
                  <li className="pro-woocommerce-item">
                    <span className="pro-woocommerce-item-link">Pants</span>/
                  </li>
                  <li className="pro-woocommerce-item">
                    <h5> Basic Colored Sweatpants With Elastic Hems</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col p-12 m-12">
              <div className="pro-product-detail">
                <div className="row no-gutters">
                  <div className="col p-5 m-12">
                    <div className="pro-product-detail-img">
                      <div
                        className="pro-product-detail-img-main"
                        style={{
                          backgroundImage:
                            "url(https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg)",
                        }}
                      />

                      <div className="pro-product-detail-img-sub">
                        <div
                          className="detail-img-sub-img"
                          style={{
                            backgroundImage:
                              "url(https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg)",
                          }}
                          data-img-sub="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg"
                        />
                        <div
                          className="detail-img-sub-img active"
                          style={{
                            backgroundImage:
                              "url(https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic2-500x750.jpeg)",
                          }}
                          data-img-sub="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic2-500x750.jpeg"
                        />
                        <div
                          className="detail-img-sub-img"
                          style={{
                            backgroundImage:
                              "url(https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic3-500x750.jpeg)",
                          }}
                          data-img-sub="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic3-500x750.jpeg"
                        />
                        <div
                          className="detail-img-sub-img"
                          style={{
                            backgroundImage:
                              "url(https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic4-500x750.jpeg)",
                          }}
                          data-img-sub="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic4-500x750.jpeg"
                        />
                        {/*<div*/}
                        {/*  className="detail-img-sub-img"*/}
                        {/*  style={{*/}
                        {/*    backgroundImage:*/}
                        {/*      "url(https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic5-500x750.jpeg)",*/}
                        {/*  }}*/}
                        {/*  data-img-sub="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic5-500x750.jpeg"*/}
                        {/*/>*/}
                      </div>
                    </div>
                  </div>
                  <div className="col p-7">
                    <div className="pro-product-detail-info">
                      <h2 className="pro-product-detail-info-name">
                        Basic Colored Sweatpants With Elastic Hems
                      </h2>
                      <div className="pro-product-detail-info-evaluate">
                        <div className="detail-info-evaluate-star">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                        <div className="detail-info-evaluate-reviews">
                          2 reviews
                        </div>
                      </div>
                      <div className="pro-product-detail-info-price">
                        <span className="detail-info-price-old">$25.00</span>
                        <span className="detail-info-price-new">$10.00</span>
                      </div>
                      <div className="pro-product-detail-info-des">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </div>
                      <form
                        action="#"
                        className="pro-product-detail-info-validate"
                        method="post"
                        encType="multipart/form-data">
                        <div className="pro-product-detail-info-color">
                          Color:
                          <ul className="detail-info-color-list">
                            <li
                              className="detail-info-color-item "
                              data-color="red"
                              style={{backgroundColor: "red"}}></li>
                            <li
                              className="detail-info-color-item "
                              data-color="green"
                              style={{backgroundColor: "green"}}></li>
                            <li
                              className="detail-info-color-item "
                              data-color="yellow"
                              style={{backgroundColor: "yellow"}}></li>
                            <li
                              className="detail-info-color-item active"
                              data-color="gray"
                              style={{backgroundColor: "gray"}}></li>
                          </ul>
                        </div>
                        <div className="pro-product-detail-info-size">
                          Size:
                          <ul className="detail-info-size-list">
                            <li className="detail-info-size-item active">
                              XXS
                            </li>
                            <li className="detail-info-size-item">XXS</li>
                            <li className="detail-info-size-item">XXS</li>
                            <li className="detail-info-size-item">XXS</li>
                            <li className="detail-info-size-item">XXS</li>
                            <li className="detail-info-size-item">XXS</li>
                            <li className="detail-info-size-item">XXS</li>
                          </ul>
                        </div>
                        <div className="pro-product-detail-info-count-add hide-on-mobile">
                          <div className="detail-info-count-add-count">
                            <i className="fa-solid fa-minus " />
                            <span>2</span>
                            <i className="fa-solid fa-plus " />
                          </div>
                          <button
                            className="detail-info-count-add-btn"
                            type="submit">
                            Add to cart
                          </button>
                        </div>
                      </form>
                      <span className="pro-product-detail-info-add-wishlist">
                        <i className="fa-regular fa-heart" />
                        <div className="content">Add to Wishlist</div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col p-2 hide-on-pc hide-on-mobile">
              <h2 className="pro-recent-views-tilte">Recent Views</h2>
              <div className="pro-recent-views">
                <div className="pro-recent-views-product">
                  <div
                    className="pro-recent-views-product-img"
                    style={{
                      backgroundImage:
                        "url(https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg)",
                    }}
                  />
                  <div className="pro-recent-views-product-content">
                    <div className="recent-views-product-name">
                      Ripped Wide-Leg ’90s Jeans
                    </div>
                    <div className="recent-views-product-price">
                      <div className="recent-views-product-price-old">
                        $25.00
                      </div>
                      <div className="recent-views-product-price-new">
                        $12.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pro-recent-views-product">
                  <div
                    className="pro-recent-views-product-img"
                    style={{
                      backgroundImage:
                        "url(https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg)",
                    }}
                  />
                  <div className="pro-recent-views-product-content">
                    <div className="recent-views-product-name">
                      Ripped Wide-Leg ’90s Jeans
                    </div>
                    <div className="recent-views-product-price">
                      <div className="recent-views-product-price-old">
                        $25.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pro-recent-views-product">
                  <div
                    className="pro-recent-views-product-img"
                    style={{
                      backgroundImage:
                        "url(https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg)",
                    }}
                  />
                  <div className="pro-recent-views-product-content">
                    <div className="recent-views-product-name">
                      Ripped Wide-Leg ’90s Jeans
                    </div>
                    <div className="recent-views-product-price">
                      <div className="recent-views-product-price-old">
                        $25.00
                      </div>
                      <div className="recent-views-product-price-new">
                        $12.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col p-12 m-12">
              <div className="pro-product-detail-tabs">
                <div
                  className={clsx("pro-product-detail-tab-item", {
                    active: part === "description",
                  })}
                  onClick={() => setSearchParams({part: "description"})}>
                  Description
                </div>
                <div
                  className={clsx("pro-product-detail-tab-item", {
                    active: part === "addition",
                  })}
                  onClick={() => setSearchParams({part: "addition"})}>
                  Additional information
                </div>
                <div
                  className={clsx("pro-product-detail-tab-item", {
                    active: part === "review",
                  })}
                  onClick={() => setSearchParams({part: "review"})}>
                  Review( <span>2</span> )
                </div>
              </div>
              <div className="pro-product-detail-tab-content">
                {part === "description" && <Description />}
                {part === "addition" && <Addition />}
                {part === "review" && <Review />}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col p-12 m-12">
              <div className="body-view-products">
                <h2 className="body-view-products-name">
                  Recently Viewed Products
                </h2>
              </div>
            </div>
            <div className="col p-12 m-12">
              <div className="row">
                <ProductCardRecently />
                <ProductCardRecently />
                <ProductCardRecently />
                <ProductCardRecently />
                <ProductCardRecently />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
