import Header from "@/components/header";
import Allposts from "@/components/maincontent/allposts";
import Blogs from "./blogs";

export default function Bloghome() {
  return (
    <main>
      {" "}
      <h1 className="ml-[270px] my-10 text-2xl">
        <strong>All Blog Posts</strong>
      </h1>
      <Blogs />
      <Allposts />
    </main>
  );
}
