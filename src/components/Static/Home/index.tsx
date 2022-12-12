import {useState} from "react";

const HomeStatic1 = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div onClick={() => setShow(false)} className="row no-gutters">
          <div className="col p-12 m-12">
            <div className="body-background-baner">
              <img src="src/assets/img/banner-26.jpg" alt="" />
              <span className="body-background-baner-link" />
              <div className="body-background-baner-content">
                <div className="row">
                  <div className="col p-5">
                    <h2 className="baner-content-name">
                      Plus-Size Style for Every Season
                    </h2>
                    <p className="baner-content-des">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Neque nobis cum officia accusamus rerum error
                    </p>
                    <br />
                    <br />
                    <h2>CLICK TO HIDE THIS BANNER</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const HomeStatic2 = () => {
  return (
    <>
      <nav className="model-filter">
        <div className="model-filter-name">
          <h3>Filter Products</h3>
          <label htmlFor="menu-model-filter" className="model-filter-close">
            <i className="fa-solid fa-x fz-2rem" />
          </label>
        </div>
        <div className="body-filter-products">
          <h4 className="body-filter-products-name">Product Categories</h4>
          <ul className="body-filter-products-list">
            <li className="body-filter-products-item">
              <span className="body-filter-products-item-link">
                <label>Men</label>
              </span>
              <i className="fa-solid fa-minus" />
              <ul className="filter-products-sub-list">
                <li className="filter-products-sub-list">
                  <span className="body-filter-products-item-link">
                    <label>panst</label>
                  </span>
                </li>
              </ul>
            </li>
            <li className="body-filter-products-item">
              <span className="body-filter-products-item-link">
                <label>Men</label>
              </span>
              <i className="fa-solid fa-minus" />
              <ul className="filter-products-sub-list">
                <li className="filter-products-sub-list">
                  <span className="body-filter-products-item-link">
                    <label>panst</label>
                  </span>
                </li>
              </ul>
            </li>
            <li className="body-filter-products-item">
              <span className="body-filter-products-item-link">
                <label className="active">Men</label>{" "}
              </span>
            </li>
            <li className="body-filter-products-item">
              <span className="body-filter-products-item-link">
                <label>Men</label>{" "}
              </span>
            </li>
            <li className="body-filter-products-item">
              <span className="body-filter-products-item-link">
                <label>Men</label>{" "}
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
                <label className="active">panst</label>
              </span>
              <div className="body-filter-products-result">(7)</div>
            </li>
          </ul>
        </div>
        <div className="body-filter-status">
          <h4 className="body-filter-products-name">Products Status</h4>
          <ul className="body-filter-products-list">
            <li className="body-filter-products-item">
              <span className="body-filter-products-item-link">
                <label className="active">panst</label>
              </span>
            </li>
            <li className="body-filter-products-item">
              <span className="body-filter-products-item-link">
                <label className="active">panst</label>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export {HomeStatic1, HomeStatic2};
