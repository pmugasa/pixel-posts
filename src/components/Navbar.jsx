import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faInbox,
  faPaperPlane,
  faBoxArchive,
  faCircleUser,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  return (
    <>
      <nav className="flex flex-row px-1 bg-primary">
        <div className="hidden sm:block p-2">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            PixelPost
          </Link>
        </div>
        <div className="sm:flex-none sm:ml-auto sm:pr-4">
          <ul className="flex  space-x-6 justify-evenly menu menu-horizontal p-2 sm:space-x-8">
            <li>
              <Link to="/" className="">
                <FontAwesomeIcon icon={faHouseChimney} size="lg" />
                <span className="hidden lg:block">Home</span>
              </Link>
            </li>
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

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle ">
                <FontAwesomeIcon icon={faCircleUser} size="2x" />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
