import SearchContext from "@/provider/search-provider";
import { useContext } from "react";
import { CiSearch } from "react-icons/ci";

const Input = () => {
  const { setSearchValue } = useContext(SearchContext);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="flex items-center gap-2 max-sm:hidden">
      <CiSearch />
      <input
        type="text"
        required
        value="Search"
        onChange={handleChange}
        className="rounded-md text-gray-200"
      />
    </div>
  );
};
export default Input;
