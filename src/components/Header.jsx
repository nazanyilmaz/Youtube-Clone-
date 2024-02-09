import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoVideocamSharp } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    navigate(`/results?search_query=${text}`);
  };
  return (
    <div className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-[10px]">
        <img
          className="w-[100px]"
          src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
          alt="youtube-logo"
        />
        <h1 className="hidden md:block text-2xl hover:text-gray-400 transition duration-300">
          Youtube
        </h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-[rgb(123,123,123)] rounded-[20px] overflow-hidden"
      >
        <input
          type="search"
          className="px-3 py-1 bg-black text-white outline-none"
        />
        <button className="border-l px-2 text-xl">
          <IoIosSearch />
        </button>
      </form>
      <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400 transition duration-300" />
        <IoVideocamSharp className="hover:text-gray-400 transition duration-300" />
      </div>
    </div>
  );
};

export default Header;
