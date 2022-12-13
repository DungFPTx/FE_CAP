import Description from "./Description";
import Addition from "./Addition";
import Review from "./Review";
import ProductCardRecently from "../Reuse/ProductCardRecently";
import getParams from "../../utils/hook/getParam";
import {useNormalEffect} from "../../utils/hook/useUpdateEffect";
import clsx from "clsx";
import ImageShow from "./Parts/ImageShow";
import SelectSize from "./Parts/SelectSize";
import useMapState from "../../utils/hook/useMapState";
import SelectColor from "./Parts/SelectColor";
import SelectAmount from "./Parts/SelectAmount";

const DETAIL_PROP = new Map<string, any>([
  ["color", "red"],
  ["size", "S"],
  ["amount", 1],
]);

const Index = () => {
  const [setSearchParams, [part]] = getParams("part");
  const [detailProp, actionDetailProp] = useMapState<string, string>(
    DETAIL_PROP,
  );

  useNormalEffect(() => {
    if (!part) {
      setSearchParams({part: "description"});
    }
  }, [part]);

  console.log(detailProp);

  return (
    <>
      <div className="containerxx">
        <div className="grid wide">
          <div className="row">
            <div className="col p-12">
              <div className="pro-woocommerce">
                <ul className="pro-woocommerce-list">
                  <li className="pro-woocommerce-item">
                    <span className="pro-woocommerce-item-link">Home </span>/
                  </li>
                  <li className="pro-woocommerce-item">
                    <span className="pro-woocommerce-item-link">Products </span>
                    /
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
                  <ImageShow />
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
                        <SelectColor setColorFunc={actionDetailProp.set} />
                        <SelectSize setSizeFunc={actionDetailProp.set} />
                        <div className="pro-product-detail-info-count-add hide-on-mobile">
                          <SelectAmount setAmountFunc={actionDetailProp.set} />
                          <button
                            className="detail-info-count-add-btn"
                            type="submit">
                            Add to cart
                          </button>
                        </div>
                      </form>
                      <h2 className="content-stock">Stock: 60</h2>
                      <span className="pro-product-detail-info-add-wishlist">
                        <i className="fa-regular fa-heart" />
                        <div className="content">Add to Wishlist</div>
                      </span>
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
                  Review(<span>2</span>)
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
