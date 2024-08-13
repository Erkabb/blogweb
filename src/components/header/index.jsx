import { useContext } from "react";
import Menu from "./menuList";

import { CiSearch } from "react-icons/ci";
import { SearchContext } from "@/provider/search-provider";

const menuList = [
  { label: "Home", link: "/" },
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
];

const Header = () => {
  const { setSearchValue } = useContext(SearchContext);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="w-full h-10 flex justify-evenly items-center text-gray-400 ">
      <img src="/images/logo.png" alt="" className="image" />
      <Menu menuList={menuList} />
      <div className="flex items-center gap-2 max-sm:hidden">
        <CiSearch />
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          className="rounded-md text-gray-200"
        />
      </div>
    </div>
  );
};
export default Header;
