import React from "react";

const Article = ({ article }) => {
  return (
    <div>
      <Link href={"/carousel/" + article.id}>
        <div className="border p-4 gap-4 rounded-[16px] w-[1280px]">
          <div className="">
            <img
              src={
                article.social_image ? article.social_image : "/default.avif"
              }
              className="rounded-[6px] w-full"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Article;
