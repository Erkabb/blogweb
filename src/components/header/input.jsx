import { CiSearch } from "react-icons/ci";

const Input = () => {
  return (
    <div className="flex items-center">
      <CiSearch />
      <input type="text" className="border-none rounded-md" />
    </div>
  );
};
export default Input;
