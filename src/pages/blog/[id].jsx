import React, { useEffect, useState } from "react"; 
import { useRouter } from "next/router";



const ArticleDetail = () => {
  const {query} = useRouter();
  console.log("qr", query.id);
  const [articleDetail, setArticleDetail] = useState(null);

  const getArticlebyId = async (id) => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    setArticleDetail(data);
  };
  useEffect(() => {
    getArticlebyId(query.id);
  }, []);
  return (
    <div className="w-[846px] m-auto flex flex-col gap-10 py-10">
    <div className="flex flex-col ">
      {/* <img
        className="w-10 h-10 rounded-full"
        src={articleDetail?.user.profile_image}
        alt=""
      /> */}
      <div className="flex flex-col gap-5 ">
      <h1 className="text-2xl text-center">
          <strong>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </strong>
        </h1>
        <div className="w-[303px] h-[36px] flex gap-5 items-center">
            <img src="https://s3-alpha-sig.figma.com/img/bf47/0a91/7fcc05b14bc2fd8af4f1a55d22542875?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WBGnBAXGrKlTdUEwMiOjo12YgEoddbIxbV92sqNi9OTc4nT6OWGWYzBfsh1MiVzWqY97ftRvTN7zLTb1EBHkCzTLup0FnMED5ruDigatGSym34oj6K6bsGAIb3XyTlzoN4cfwuY5LKKsiWX853ThfTvFhx0m33Ld2l7LoPieXL3~cVzuz7xsyDoQPTfTmdlS4JLdQZn7lEAYY9Ca0bfFeTSsKTf-1wvHdQ62BT~1dGzHvwJohyweUbJj4wG7WLfOhD6wzd0WYAF7I07jGq17oAX3ary9XFvAZ-pspsdFktb5ckZ~I8VN~STRjDUb-tqf9i2whX0e70nzqTQritJbdA__" alt="" className="w-[36px] h-[36px] rounded-full" />
            <div className="w-[250px]">
          <p className="text=[16px] text-gray-400">Ernie Smiths</p>
          <p className="text=[16px] text-gray-400">August 20, 2022</p>
       </div> </div>
      </div>
    </div>
    <div
      className="blog-detail flex flex-col gap-10"
      dangerouslySetInnerHTML={{ __html: articleDetail?.body_html }}
    ></div>
  </div>
  );
};
export default ArticleDetail;
