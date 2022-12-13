import {HomeStatic1, HomeStatic2} from "../Static/Home";
import ProductCard from "./ProductCard";
import ProductCardRecently from "../Reuse/ProductCardRecently";

const Index = () => {
  return (
    <>
      <HomeStatic2 />
      {/* Phần nội dung chính */}
      <div className="containerxx">
        <div className="grid wide">
          <div className="row">
            {/* Phần filter */}
            <div className="col p-3 hide-on-mobile">
              <div className="body-filter">
                {" "}
                <div className="body-filter-products">
                  <h4 className="body-filter-products-name">
                    Product Categories
                  </h4>
                  <ul className="body-filter-products-list">
                    <li className="body-filter-products-item">
                      <span className="body-filter-products-item-link">
                        <label>Men</label>
                      </span>
                    </li>
                    <li className="body-filter-products-item">
                      <span className="body-filter-products-item-link">
                        <label>Women</label>
                      </span>
                    </li>
                    <li className="body-filter-products-item">
                      <span className="body-filter-products-item-link">
                        <label className="active">Bags</label>{" "}
                      </span>
                    </li>
                    <li className="body-filter-products-item">
                      <span className="body-filter-products-item-link">
                        <label>Sweatshirts & Hoodies</label>{" "}
                      </span>
                    </li>
                    <li className="body-filter-products-item">
                      <span className="body-filter-products-item-link">
                        <label>Pants</label>{" "}
                      </span>
                    </li>
                    <li className="body-filter-products-item">
                      <span className="body-filter-products-item-link">
                        <label>Dresses</label>{" "}
                      </span>
                    </li>{" "}
                    <li className="body-filter-products-item">
                      <span className="body-filter-products-item-link">
                        <label>Jackets & Coats</label>{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="body-filter-price">
                  <h4 className="body-filter-products-name">Filer by price</h4>
                  <div className="body-filter-price-sort align__item-center">
                    <select>
                      <option>$0 - $500</option>
                      <option>$500 - $1000</option>
                      <option>$1000 - $1500</option>
                      <option>Price from lowest to highest</option>
                      <option>Price from highest to lowest</option>
                    </select>
                    <button type="submit" className="body-filter-price-btn">
                      FILTER
                    </button>
                  </div>
                </div>
                <div className="body-filer-color">
                  <h4 className="body-filter-products-name">Filer by Color</h4>
                  <ul className="body-filer-color-list">
                    <li className="body-filer-color-item">
                      <div className="body-filer-color-item-content">
                        <span
                          className="body-filer-color-type"
                          style={{backgroundColor: "red"}}>
                          <i className="fa-solid fa-check" />
                        </span>
                        <span className="body-filer-color-link">Bio Red</span>
                      </div>
                      <div className="body-filer-color-item-result">(7)</div>
                    </li>
                    <li className="body-filer-color-item">
                      <div className="body-filer-color-item-content">
                        <span
                          className="body-filer-color-type active"
                          style={{backgroundColor: "green"}}>
                          <i className="fa-solid fa-check" />
                        </span>
                        <span className="body-filer-color-link">Bio green</span>
                      </div>
                      <div className="body-filer-color-item-result">(7)</div>
                    </li>
                    <li className="body-filer-color-item">
                      <div className="body-filer-color-item-content">
                        <span
                          className="body-filer-color-type"
                          style={{backgroundColor: "yellow"}}>
                          <i className="fa-solid fa-check" />
                        </span>
                        <span className="body-filer-color-link">Bio yelow</span>
                      </div>
                      <div className="body-filer-color-item-result">(7)</div>
                    </li>
                  </ul>
                </div>
                <div className="body-filter-size">
                  <h4 className="body-filter-products-name">Filer by Size</h4>
                  <ul className="body-filter-products-list">
                    <li className="body-filter-products-item">
                      <span className="body-filter-products-item-link">
                        <label className="active">S</label>
                      </span>
                      <div className="body-filter-products-result">(7)</div>
                    </li>{" "}
                    <li className="body-filter-products-item">
                      <span className="body-filter-products-item-link">
                        <label className="active">M</label>
                      </span>
                      <div className="body-filter-products-result">(7)</div>
                    </li>{" "}
                    <li className="body-filter-products-item">
                      <span className="body-filter-products-item-link">
                        <label className="active">L</label>
                      </span>
                      <div className="body-filter-products-result">(7)</div>
                    </li>{" "}
                    <li className="body-filter-products-item">
                      <span className="body-filter-products-item-link">
                        <label className="active">XL</label>
                      </span>
                      <div className="body-filter-products-result">(7)</div>
                    </li>{" "}
                    <li className="body-filter-products-item">
                      <span className="body-filter-products-item-link">
                        <label className="active">XXL</label>
                      </span>
                      <div className="body-filter-products-result">(7)</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Kết thúc phần filter */}
            <div className="col p-9">
              <HomeStatic1 />
              <div className="row no-gutters align__item-center add-little-fix1">
                <div className="col p-6 hide-on-mobile">
                  <div className="body-background-filter">
                    <p className="background-filter-show fz-1-6rem">
                      Showing 17–32 of 72 results
                    </p>
                  </div>
                </div>
                <div className="col p-6 m-6 hide-on-pc">
                  <label
                    htmlFor="menu-model-filter"
                    className="body-background-filter-setting">
                    <i className="fa-solid fa-filter" /> Filter
                  </label>
                </div>
                <div className="col p-6 m-6">
                  <div className="background-filter-sort-showing fz-1-6rem">
                    <p className="hide-on-mobile reduct-little-size-font">
                      Show:
                    </p>
                    <div className="filter-sort-showing-select hide-on-mobile">
                      <select>
                        <option>4 Items</option>
                        <option>8 Items</option>
                        <option>12 Items</option>
                      </select>
                    </div>
                    <div className="filter-sort-showing-sort">
                      <select className="filter-sort-showing-sort">
                        <option>Sort by popularity</option>
                        <option>Sort by discount</option>
                        <option>Sort by price ⇩</option>
                        <option>Sort by price ⇧</option>
                        <option>Sort by star ⇩</option>
                        <option>Sort by star ⇧</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
              <div className="row">
                <div className="col p-12 m-12">
                  <div className="body-background-pagination">
                    <ul className="pagination-list">
                      <li className="pagination-page">
                        <i className="fa-solid fa-left-long" />
                      </li>
                      <li className="pagination-page active">1</li>
                      <li className="pagination-page">2</li>
                      <li className="pagination-page">3</li>
                      <li className="pagination-page">4</li>
                      <li className="pagination-page">
                        <i className="fa-solid fa-right-long" />
                      </li>
                    </ul>
                  </div>
                </div>
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
