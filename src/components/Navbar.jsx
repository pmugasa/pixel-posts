import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faRightFromBracket,
  faPaperPlane,
  faBoxArchive,
  faCircleUser,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  return (
    <>
      <nav className="bg-primary flex p-2 w-screen">
        <div className=" hidden">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            PixelPost
          </Link>
        </div>

        <ul className="menu menu-horizontal flex justify-center space-x-6  w-full mx-auto ">
          <li>
            <Link to="/received" className="indicator">
              <div className="indicator">
                <span className="indicator-item indicator-end badge badge-xs badge-secondary">
                  {props.receivedParcels.length}
                </span>
                <FontAwesomeIcon icon={faInbox} size="lg" />
                <span className="hidden lg:block">Recieved</span>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/new-parcel">
              <div className="indicator">
                <span className="indicator-item indicator-end badge badge-xs badge-secondary">
                  {props.packedItems.length}
                </span>
                <FontAwesomeIcon icon={faBoxArchive} size="lg" />
                <span className="hidden lg:block">New Parcel</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/ready-to-send">
              <FontAwesomeIcon icon={faPaperPlane} size="lg" />
              <span className="hidden lg:block">Ready To Send</span>
            </Link>
          </li>
          <li>
            <Link to="/shipping-rates">
              <FontAwesomeIcon icon={faCalculator} size="lg" />
              <span className="hidden lg:block">Shipping Rates</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FontAwesomeIcon icon={faCircleUser} size="lg" />
              <span className="hidden lg:block">Profile</span>
            </Link>
          </li>
          <li onClick={() => console.log("logged out")}>
            <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
            <span className="hidden lg:block">Logout</span>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
