import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Trending from "./trending-con";
import Allposts from "./allposts";

const trendingNews = [
  {
    newsImg:
      "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UaeMflZthJbLWO4fYsZntkBYw9rNFb8XF0N4QTPygrA3NbQfKmVjyBT43L3NtwomjDqKhDlbJsWPGVzqtTk5s6DxBUnmxS2tPR0TDzyvSgvZ1fkL50fgU6mMH7T5EwrGRw6Dy0QfsT9WBJP4yOTbIJbhTsFYa0BICBUSoyNpC4Pip5ixKd3VSAFGx2lpcXFE7cSIb-jnp0Ll47nkLb-6uL42hJqR6VlnMbXyA-GNs~QJtijBPezcUQgBTP0JHXdvbLy~A-ivgcbi~pyD7fur5BETw0~rwRnhIvSMo1NH0kk1FUuZoq8O-HywzprAItNw-840kN~WPHoGZep-5Kv-Mg__",
  },
  {
    newsImg:
      "https://s3-alpha-sig.figma.com/img/8d5b/3c3e/9c1f18bc8db1dc4de14eac308e1e1594?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Up1UjbIb8UkXAq13uy78wMlhPVFbXOBtxkEIfKTniv-9cK9wD1BCKy~u17SvM58CE7s2cyadOzcpJNluFWGYEgL1VhWvSMDEz9zhq1ARs3jNRG6wqT4oUSgeKRUKdcdnNM76EDRc2y3dVarljF6QkndkIyPDXiqo3aJAyP~qkDcQdCwffrMWwkGpnE0T0EFmapOwv0KOyWG97FRZhzeHFp5uoJXKzcTe6-u89TnVacBd84IsyOM6fb~8M8ZKHsnB48WKAlCQe5wKGkjnn-6xo4VrB-waO~rDoDGYcS5TXhVIjGLzKNjeEOQ8tIOFRe8yYwB9HgCyDMrIVsAB~rjztw__",
  },
  {
    newsImg:
      "https://s3-alpha-sig.figma.com/img/a7b0/86f2/c97b173ebc05fa8f9660788e8e0971b9?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Njs2WSAzJvjO4l~ReEcgG2yyIX0xnySl5E0ktv6ifS9xscjtDSHD0B~a-BRX5X4v5rXYonNYU46EvBNMMzOl0v1V2hclCr9ziqpR4~x53BKLgf7UU4u1MGBTAiyKeAUdabAad4CGvMtg3in~F22YZlpp~cB9blH149gB~d4LgTY7aspjxVGXOGQhWsrltfC~px154a2REOPEMYIKL3mTHHzWYxHxeqFq-Ld4mKU7XpWHfyOmR0-NppyJ1UrDwpCDOq1NrMGdSyTsFv1DldKhzVP3VLXe6x39EVtGH4FAJ2UewRL3zp7Do4otFexSwLpRKJd-cHC8fe7VX2a9vraj4g__",
  },
  {
    newsImg:
      "https://s3-alpha-sig.figma.com/img/21a4/f878/0943144e7126909a96868bd7542caf21?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nu8hSaH2GoGH4o4HLrTwAuuZzx0UGaW8V2p1OmrFZ49mMTUHJvL~P0RQ~XFKxfKhBn9DFf3a1eX6sIHpxjBQy3N2oMxkNQDUK6tFgtO3irT3ITBd5abXnf1yBSCQ6xD8qdIgfDOoGYIjCoZ1~yl81dGmI6O0S4KAUK2QXKC1rdqSt8xx8MT~75LRHrI-LLo6Q3Hx59wU~lqabCADiQqYRdZwRFwoZVdep4mhTdy8yT6b72Mm~j1oUbLBpEPC-2nDVfzrYF-pTkh21ORtlh0o78yjCqLZlGfsoCyZd7or75R3c0NW-SWU~TVJH3tBZ2dqOL8yEuw7sNvmS48h-oCAQQ__",
  },
];

const ImageContent = () => {
  return (
    <section className="flex flex-col items-center gap-20">
      <div>
        <div className="mt-10 relative flex justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p895KkdD7DfcCulv8AGa6shbfkAQ13LytdYV4Wsw0PQ-FL22qhaG4o-eKbtZx7eC5DRPpiBpCGUpjA693ZOyVqMT2J470CF5oPujcq9NlJ3lWfW-JUAgxgQbjWqUjceO~P6LG5zQBnAXLsDlYyLfGZGXpGRAWM~PjK7cuD7ZeIWAB~9B25Ya0Qi6N8hGL5AmXlwT33Lqr3vmpMzULNrBhPpc~DCGFZ0rpAhc~vU7mdu7gEWoRMdWX1LA0jTsS3k~eM1KcmqcWGuHD0rhQ-KTBspRHuS7cVmwTdluAQNY5C0Tf2yC8pqCOm2771pFOW-2NiyECQSKSclX-GQ9714nJw__"
            alt=""
            className="contentimg bg-blend-darken"
          />
          <div className="absolute w-[598px] h-[252px] rounded-md bg-white z-10 bottom-8 left-10 flex flex-col justify-evenly pl-10">
            <button className="w-24 h-7 bg-blue-600 rounded-md text-white">
              Technology
            </button>
            <h1 className="text-black text-4xl">
              Grid system for better Design User Interface
            </h1>
            <span className="text-gray-400 ">August 20, 2022</span>
          </div>
        </div>
        <div className="flex justify-end p-2 w-[1280px] m-auto">
          <button>
            <IoIosArrowBack
              size={30}
              className="border solid border-white rounded-sm mr-2"
            />
          </button>
          <button>
            <IoIosArrowForward
              size={30}
              className="border solid border-white rounded-sm "
            />
          </button>
        </div>
        <h1 className="mt-20 flex justify-content text-2xl w-[1280px]">
          <strong>Trending</strong>
        </h1>
        <div className="flex gap-10 my-5 justify-center">
          {trendingNews.map((trendingNews) => (
            <Trending newsImg={trendingNews.newsImg} />
          ))}{" "}
        </div>

        <h1 className="mt-20 flex justify-content text-2xl mb-7 w-[1280px]">
          <strong>All Blog Posts</strong>
        </h1>
        <div className="w-[1280px] flex justify-between mb-5">
          <ul className="text-sm list flex gap-5 ">
            <li className="text-black hover:text-green-500">All</li>
            <li className="text-black hover:text-green-500">Design</li>
            <li className="text-black hover:text-green-500">Travel</li>
            <li className="text-black hover:text-green-500">Fashion</li>
            <li className="text-black hover:text-green-500">Technology</li>
            <li className="text-black hover:text-green-500">Branding</li>
          </ul>

          <p className="text-sm text-black hover:text-green-500">View all</p>
        </div>
        <Allposts />
      </div>
    </section>
  );
};
export default ImageContent;
