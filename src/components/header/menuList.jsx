import Link from "next/link";

const Menu = () => {
  return (
    <ul className="flex gap-5 max-sm:hidden">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};
export default Menu;
