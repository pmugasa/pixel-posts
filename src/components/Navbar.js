import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faHourglassHalf,
  faPaperPlane,
  faBoxArchive,
  faCircleUser,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className=" md:w-full bg-primary md:flex">
        <div className=" hidden xl:block">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            PixelPost
          </Link>
        </div>
        <div className="md:flex-none md:ml-auto">
          <ul className="flex  space-x-6 justify-evenly menu menu-horizontal p-2">
            <li>
              <Link to="/" className="">
                <FontAwesomeIcon icon={faHouseChimney} size="lg" />
                <span className="hidden sm:block">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/received" className="">
                <FontAwesomeIcon icon={faBoxArchive} size="lg" />
                <span className="hidden sm:block">Recieved</span>
              </Link>
            </li>

            <li>
              <Link to="/in-review">
                <FontAwesomeIcon icon={faHourglassHalf} size="lg" />
                <span className="hidden sm:block">In Review</span>
              </Link>
            </li>
            <li>
              <Link to="/ready-to-send">
                <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                <span className="hidden sm:block">Ready To Send</span>
              </Link>
            </li>
            <li>
              <Link to="/shipping-rates">
                <FontAwesomeIcon icon={faCalculator} size="lg" />
                <span className="hidden sm:block">Shipping Rates</span>
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
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
