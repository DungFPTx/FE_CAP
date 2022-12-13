import OrderHistory from "./OrderHistory";
import Dashboard from "./Dashboard";
import OrderInfo from "./OrderInfo";
import UserInfo from "./UserInfo";
import Wishlist from "./Wishlist";
import {useNormalEffect} from "../../utils/hook/useUpdateEffect";
import getParams from "../../utils/hook/getParam";
import clsx from "clsx";

const PARTS = ["Dashboard", "Orders", "Address", "Account details", "Wishlist"];

const Index = () => {
  const [setSearchParams, [part]] = getParams("part");

  useNormalEffect(() => {
    if (!part) {
      setSearchParams({part: PARTS[0]});
    }
  }, [part]);

  return (
    <>
      <div className="containerxx">
        <div className="grid wide">
          <div className="row">
            <div className="col p-3 m-12">
              <div className="info-navbar">
                <ul className="info-navbar-list">
                  <li className="info-navbar-item-info">
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt="user img"
                      className="info-navbar-img"
                    />
                    <div className="info-navbar-title">
                      <div className="wellcome">Wellcome back,</div>
                      <div className="UserName">Felix</div>
                    </div>
                  </li>
                  {PARTS.map((p, i) => {
                    return (
                      <li
                        key={i}
                        className={clsx("info-navbar-item", {
                          active: part === p,
                        })}
                        onClick={() => setSearchParams({part: p})}>
                        {p}
                      </li>
                    );
                  })}
                  {/**/}
                  <li className="info-navbar-item">Logout</li>
                </ul>
              </div>
            </div>
            <div className="col p-9 m-12">
              <div className="info-content">
                {PARTS[0] === part && <Dashboard />}
                {PARTS[1] === part && <OrderHistory />}
                {PARTS[2] === part && <OrderInfo />}
                {PARTS[3] === part && <UserInfo />}
                {PARTS[4] === part && <Wishlist />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
