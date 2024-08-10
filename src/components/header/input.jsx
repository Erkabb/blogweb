import { CiSearch } from "react-icons/ci";

const Input = () => {
  return (
    <div className="flex items-center gap-2">
      <CiSearch />
      <input type="text" required value="Search" className="rounded-md text-gray-200" />
    </div>
  );
};
export default Input;
