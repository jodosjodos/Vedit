import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="text-white flex flex-row  justify-around items-center py-12">
        <Link
          to="/"
          className=" font-semibold text-4xl hover:text-[#CD3EFF] hover:cursor-pointer"
        >
          VEdit
        </Link>
        <div className="flex flex-row gap-24 font-bold ">
          <Link
            to="/feed"
            className=" hover:text-[#CD3EFF] hover:cursor-pointer"
          >
            Feed
          </Link>
          <Link to="/" className=" hover:text-[#CD3EFF] hover:cursor-pointer">
            Post
          </Link>
          <Link
            to="/Connections"
            className=" hover:text-[#CD3EFF] hover:cursor-pointer"
          >
            Connections
          </Link>
        </div>
        <div className="flex flex-row  gap-8 items-center">
          <div>
            <IoNotifications size={32} />
          </div>
          <img
            src="./assets/images/userProfile.png"
            alt="user profile"
            className="hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
