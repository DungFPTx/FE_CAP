import HeaderStatic4, {
  HeaderStatic1,
  HeaderStatic2,
  HeaderStatic3,
} from "../Static/Header";
import CartFloat from "../Hide/CartFloat";
import SearchBar from "../Hide/SearchBar";
import LeftMenu from "../Hide/LeftMenu";
import useToggle from "../../utils/hook/useToggle";
import {Link} from "react-router-dom";
import LogoWeb from "../../assets/img/logo.png";

const Index = () => {
  const [searchShow, searchShowToggle, _] = useToggle(false);

  const soloesadasd = () => {
    alert("xczxczx");
  };

  return (
    <>
      <HeaderStatic1 />
      <header className="header">
        <HeaderStatic2 />
        {/* Phần navbar trên thanh header*/}
        <nav className="header-navbar">
          <div
            className="grid wide"
            style={{display: "flex", justifyContent: "space-between"}}>
            {/*icon Bar, logo , navbar */}
            <div className="header-navbar-nav display__flex">
              <label
                htmlFor="menu-model"
                className="header-navbar-nav-icon fz-2rem line-height-3rem">
                <i className="fa-solid fa-bars header-navbar-iconnav cur-pointer" />
              </label>
              <div className="header-navbar-img">
                <img src={LogoWeb} alt="logo" />
              </div>
              <ul className="header-navbar-list">
                <li className="header-navbar-item">
                  <Link to="/" className="header-navbar-item-link">
                    HOME
                  </Link>
                </li>
                <li className="header-navbar-item">
                  <span className="header-navbar-item-link">SHOP</span>{" "}
                </li>
                <li className="header-navbar-item">
                  <span className="header-navbar-item-link">WOMEN</span>
                </li>
                <li className="header-navbar-item">
                  <span className="header-navbar-item-link">MEN</span>
                </li>
                <li className="header-navbar-item">
                  <span className="header-navbar-item-link">OUTERWEAR</span>
                </li>
                <li className="header-navbar-item">
                  <span className="header-navbar-item-link">BLOG</span>
                </li>
                <li className="header-navbar-item">
                  <span className="header-navbar-item-link">CONTACT</span>
                </li>
              </ul>
            </div>
            {/* phần thông tin icon user */}
            <div className="header-navbar-user">
              <span className="header-navbar-icon-user fz-2rem line-height-3rem hide-on-mobile">
                <Link
                  to="/account"
                  className="fa-regular fa-user line-height-3rem fz-2rem cur-pointer"
                />
              </span>
              <div
                onClick={searchShowToggle}
                className="header-navbar-icon-search">
                <i className="fa-solid fa-magnifying-glass hide-on-mobile cur-pointer" />
              </div>
              <Link
                to="/account?part=Wishlist"
                className="header-navbar-wislist hide-on-mobile">
                <i className="fa-regular fa-heart cur-pointer" />
                <span className="wislist-count">5</span>
              </Link>
              <CartFloat />
            </div>
            {/* Kết thúc phần thông tin icon user */}
          </div>
          {/*  */}
        </nav>
        {/* Kết thúc Phần navbar trên thanh header*/}
        <HeaderStatic3 />
      </header>
      {searchShow && <SearchBar />}
      {/* Kết thúc phần header */}
      {/* bắt đầu phần navbar mobile */}
      <HeaderStatic4 />
      {/* Kết thúc phần navbar mobile */}
      {/* Thanh menu phụ kế trái */}
      <LeftMenu />
      {/* Kết thúc thanh menu phụ */}
    </>
  );
};

export default Index;
