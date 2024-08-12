import Input from "./input";
import Menu from "./menuList";

const menuList = [
  { label: "Home", link: "/" },
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
];

const Header = () => {
  return (
    <div className="w-full h-10 flex justify-evenly items-center text-gray-400 ">
      <img src="/images/logo.png" alt="" className="image" />
      <Menu menuList={menuList} />
      <Input />
    </div>
  );
};
export default Header;
