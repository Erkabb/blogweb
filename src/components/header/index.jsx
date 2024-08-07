import Input from "./input";
import Menu from "./menuList";
import Link from "next/link";

const menuList = [
  { label: "Home", link: "/" },
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
];

const Header = () => {
  return (
    <section className="">
      <div className="w-full h-10 flex justify-evenly items-center text-gray-400 ">
        <img src="/images/logo.png" alt="" className="image" />
        <Menu menuList={menuList} />
        <Input />
      </div>
    </section>
  );
};
export default Header;
