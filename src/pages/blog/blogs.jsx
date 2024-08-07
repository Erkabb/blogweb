import Allposts from "@/components/maincontent/allposts";
import Posts from "@/components/maincontent/posts";
import React from "react";
import Bloghome from ".";
import Blogpage from "./blogpage";

const allblog = [
  {
    imgpost:
      "https://s3-alpha-sig.figma.com/img/3087/05a3/0ba138a3797a763d4510333166532abb?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FbAZzrUxALXF5UVCXFHmF9p1BNTAKiC8mEjasUk-nQ1vK8Icu8wd~CLYmvPmEVG02KsKx5B1tMKjkKJfUzoMNhUX84fs7cDoVu9R7pvPvvgbUCVHocg2r3T3b5qjb-5wnto6hovCRc7IwQDlJVf81At6Pj-zHTxVHjvXmB7Kb3aqqgl47kC2n8aThGx0RWAUFjpHC7o3w4ayygTq4recyMdZyirH6SyYHy4HMHcloZpDFCkuQExqiFoJQlcx9nwhvqd~fi9M7CZf-G~4K~z4Ejzu8VjKYJti~9pubB-V3rqcXvHii~8YlIJJfx3h9fO9f7Af3b78vOtvl~ZAIbRlSQ__",
  },
  {
    imgpost:
      "https://s3-alpha-sig.figma.com/img/9cba/0115/47643788a57b79a4aa1d6c6db76208a5?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oA77WUscbW1tjfvUkCKFKPcKd-wDLTiEs1NcNOSNy4sZoTkuQ2gd46m5pqRIyPURUzpQjzoX-s9cvJy4Uv~0DhI~l2eqrGP9cKAE8fdZid66~y0gG5z5njXO11roF81rePuJbMiHnGLxyT8-gJVK4vEcCLEwJPvLa4gHd8xwQGRFthUwfmWmMvAaoU~UYci8BBZdrzk7H~gTSAI78sbAJzoCGy5kNUh5Afao3hZxY42H07ckZFLLTR6AeCajn-f1AHH70AKtEJTl7PVLhBSB3ieg3cvhPmXMw1f3b~5Il~lTDw3EW-18bY1jvbukCEW2s3dIugeHLyjCvhHGdDxoGw__",
  },
  {
    imgpost:
      "https://s3-alpha-sig.figma.com/img/dbae/ead3/16e4297057a78fcd78323914d00b0bf8?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=drS~q33SfPUvUg1BD76yTWUvbCevxnvk4JuGAIg8VDFgxV-pojUGqQc4WpThwW0mBu3T7zEtyG7JkduX9qU2oewXozDH7bqxYWtCKe2AKMRoC8uq2KOOLz4wVH3y-x5yhezOSoQYB4cSr3USs6ZqlaepZqcuTG3OqyKRaYsyjCmdnW~Q-rEdQDzC~E4huxFUpaPJOWPVMnCsmpZiyNJugN4CN5buSIvDcaWpbwn-hVM2X5GTE9wmUnHs5~RnEbtsRdP~aDxrkRHdtHuWCk3wKcSRfBdh7Ka214Zm86-eHhpQdZLqxKOtVE46yW3EpDhrcdAfXsaOfcs2fymL~vrgFg__",
  },
];

const journalists = [
  {
    pfp: "https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gq0apu1PD7a7CqOHIhBArl~bIVo-TtIjVdtNPzYI3U13v6LkYU4dudQGRaoBg0M3cX1VzoIe~RhtqAWDoAfVHELubbTG3T8Nx5SFvB7JSmKqsaSH1~Jh3AeFWm3ITqK7nw97fQCvV4VL6rVl-CkkTc0UGld2gkGacsKuuPyC2PbV8qBwrB3LgzsquLj5jJzLbNu9Saex2izoe5SUEe4eXh8jPl2tY3~W~qjNP8~OvaVWMomkGXlADmj3o5DnnWEsclCVrKopeE0IvoYvam81tHy35UCS-6Y62QXHF5Y3tHw6bUUJtAliCS-yOeRQrB9kfTh7dqnNnXb3XnEAh0DByQ__",
    name: "Ernie Smiths",
  },
  {
    pfp: "https://s3-alpha-sig.figma.com/img/bf47/0a91/7fcc05b14bc2fd8af4f1a55d22542875?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WBGnBAXGrKlTdUEwMiOjo12YgEoddbIxbV92sqNi9OTc4nT6OWGWYzBfsh1MiVzWqY97ftRvTN7zLTb1EBHkCzTLup0FnMED5ruDigatGSym34oj6K6bsGAIb3XyTlzoN4cfwuY5LKKsiWX853ThfTvFhx0m33Ld2l7LoPieXL3~cVzuz7xsyDoQPTfTmdlS4JLdQZn7lEAYY9Ca0bfFeTSsKTf-1wvHdQ62BT~1dGzHvwJohyweUbJj4wG7WLfOhD6wzd0WYAF7I07jGq17oAX3ary9XFvAZ-pspsdFktb5ckZ~I8VN~STRjDUb-tqf9i2whX0e70nzqTQritJbdA__",
    name: "",
  },
  {
    pfp: "https://s3-alpha-sig.figma.com/img/40b7/c131/faedfd7f834c47ba118f3895ffc519cd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FnQ9Zaop704ExZ4sxAZWUlxXLfrD3RIfqr5FeUm4eG62GkSd3ZUaSdvX5l9amlzw8umhJP1ii2HD9WSpQXXTPznk0twc3yuMBnG6R3PRleHwJ6QcJzxOGOjEjYQvjCwWgdbs2wk8cTFSPYPT0~3AjDshKWyTFboKLg44AJm5tnrWQFWqM9hPA6fQnwLyfO3daz85J58xXYrEGynEN2~xZLcQJ-0aNzdNoao-iWESZYZ4M2vNfKLSOo8iISJNVCaO2odkXQKtkaIBpZbYX9n0j2RCJTI6UdvC-mo5c9i1RfiwWbGhMP2SXgzp8NX57~4CtB9i2W9d~MT7eZLM-iobCg__",
    name: "",
  },
  {
    pfp: "https://s3-alpha-sig.figma.com/img/f952/fa47/9a54dc57c3bfdd71f8ab78628ef9ac9a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aiKYfhDrGmfJV8k5inXJK4BZVfMpuWmO77aEObJWxttMvkJIegjYuV-3sdtQuyhIOfHBChpoCCdOR9p3vtO5zO4SgPFQKwdFssmlIePvesoogN~AMS63qF4jCXqbMD1ClYaL1PgdMC30yyg9RLh9HPOJnFQ-ZPgoK34GMyNkR8JyQgpw8PJNo4DggwWKse6hwckaWUhiUIyVNPZNPbZl-WZubkcJwkXz7IoMhyIUtoOEzHwk6~tot9AWw1vAjmxmDvNmW~EGR3ySfGC3TWPUamC5r3x8I~2kZkvCvQn9Z1YXvRRNRsUo-cc4Z9EeivRB~kNEJuvm1EdsnS61FlEsIg__",
    name: "",
  },
  {
    pfp: "https://s3-alpha-sig.figma.com/img/db37/dd67/9040be5d5b5b374674cba3ba9bae96c7?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HAyt8jaqt6~7X15iXTJqns4SgngELy3hwAKxSu-wD8rI276E1c7i9VzNqmnqrh0u3xVX7-1esc1dER8F4jjRnPWJDnvnU7rBq7NgohEfxcNJAYpGYfvYtI2byel5vyZWMMcDDTEeJqyByH3Z4kLFboYcSnQx-J8Je-olD3eOeszAr~Ft5dYf0z60VXTpi86E-9zrXINs0tKlaMdEAOLPh0zurg~WppxMOBJXaAUfOIe0z2Ko8FQn9Qb7IDZMsKUgclIN-njfkrCLwGC5hU-QCQuwTozuLuICGg69cXiOpm5GChqwvUCPmGwc6Pus8neKsBvXsO3vSN6f9bLU7VKnTg__",
    name: "",
  },
  {
    pfp: "https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gq0apu1PD7a7CqOHIhBArl~bIVo-TtIjVdtNPzYI3U13v6LkYU4dudQGRaoBg0M3cX1VzoIe~RhtqAWDoAfVHELubbTG3T8Nx5SFvB7JSmKqsaSH1~Jh3AeFWm3ITqK7nw97fQCvV4VL6rVl-CkkTc0UGld2gkGacsKuuPyC2PbV8qBwrB3LgzsquLj5jJzLbNu9Saex2izoe5SUEe4eXh8jPl2tY3~W~qjNP8~OvaVWMomkGXlADmj3o5DnnWEsclCVrKopeE0IvoYvam81tHy35UCS-6Y62QXHF5Y3tHw6bUUJtAliCS-yOeRQrB9kfTh7dqnNnXb3XnEAh0DByQ__",
    name: "",
  },
  {
    pfp: "https://s3-alpha-sig.figma.com/img/f952/fa47/9a54dc57c3bfdd71f8ab78628ef9ac9a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aiKYfhDrGmfJV8k5inXJK4BZVfMpuWmO77aEObJWxttMvkJIegjYuV-3sdtQuyhIOfHBChpoCCdOR9p3vtO5zO4SgPFQKwdFssmlIePvesoogN~AMS63qF4jCXqbMD1ClYaL1PgdMC30yyg9RLh9HPOJnFQ-ZPgoK34GMyNkR8JyQgpw8PJNo4DggwWKse6hwckaWUhiUIyVNPZNPbZl-WZubkcJwkXz7IoMhyIUtoOEzHwk6~tot9AWw1vAjmxmDvNmW~EGR3ySfGC3TWPUamC5r3x8I~2kZkvCvQn9Z1YXvRRNRsUo-cc4Z9EeivRB~kNEJuvm1EdsnS61FlEsIg__",
    name: "",
  },
  {
    pfp: "https://s3-alpha-sig.figma.com/img/db37/dd67/9040be5d5b5b374674cba3ba9bae96c7?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HAyt8jaqt6~7X15iXTJqns4SgngELy3hwAKxSu-wD8rI276E1c7i9VzNqmnqrh0u3xVX7-1esc1dER8F4jjRnPWJDnvnU7rBq7NgohEfxcNJAYpGYfvYtI2byel5vyZWMMcDDTEeJqyByH3Z4kLFboYcSnQx-J8Je-olD3eOeszAr~Ft5dYf0z60VXTpi86E-9zrXINs0tKlaMdEAOLPh0zurg~WppxMOBJXaAUfOIe0z2Ko8FQn9Qb7IDZMsKUgclIN-njfkrCLwGC5hU-QCQuwTozuLuICGg69cXiOpm5GChqwvUCPmGwc6Pus8neKsBvXsO3vSN6f9bLU7VKnTg__",
    name: "",
  },
  {
    pfp: "https://s3-alpha-sig.figma.com/img/f952/fa47/9a54dc57c3bfdd71f8ab78628ef9ac9a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aiKYfhDrGmfJV8k5inXJK4BZVfMpuWmO77aEObJWxttMvkJIegjYuV-3sdtQuyhIOfHBChpoCCdOR9p3vtO5zO4SgPFQKwdFssmlIePvesoogN~AMS63qF4jCXqbMD1ClYaL1PgdMC30yyg9RLh9HPOJnFQ-ZPgoK34GMyNkR8JyQgpw8PJNo4DggwWKse6hwckaWUhiUIyVNPZNPbZl-WZubkcJwkXz7IoMhyIUtoOEzHwk6~tot9AWw1vAjmxmDvNmW~EGR3ySfGC3TWPUamC5r3x8I~2kZkvCvQn9Z1YXvRRNRsUo-cc4Z9EeivRB~kNEJuvm1EdsnS61FlEsIg__",
    name: "",
  },
  {
    pfp: "https://s3-alpha-sig.figma.com/img/40b7/c131/faedfd7f834c47ba118f3895ffc519cd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FnQ9Zaop704ExZ4sxAZWUlxXLfrD3RIfqr5FeUm4eG62GkSd3ZUaSdvX5l9amlzw8umhJP1ii2HD9WSpQXXTPznk0twc3yuMBnG6R3PRleHwJ6QcJzxOGOjEjYQvjCwWgdbs2wk8cTFSPYPT0~3AjDshKWyTFboKLg44AJm5tnrWQFWqM9hPA6fQnwLyfO3daz85J58xXYrEGynEN2~xZLcQJ-0aNzdNoao-iWESZYZ4M2vNfKLSOo8iISJNVCaO2odkXQKtkaIBpZbYX9n0j2RCJTI6UdvC-mo5c9i1RfiwWbGhMP2SXgzp8NX57~4CtB9i2W9d~MT7eZLM-iobCg_",
    name: "",
  },
  {
    pfp: "https://s3-alpha-sig.figma.com/img/bf47/0a91/7fcc05b14bc2fd8af4f1a55d22542875?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WBGnBAXGrKlTdUEwMiOjo12YgEoddbIxbV92sqNi9OTc4nT6OWGWYzBfsh1MiVzWqY97ftRvTN7zLTb1EBHkCzTLup0FnMED5ruDigatGSym34oj6K6bsGAIb3XyTlzoN4cfwuY5LKKsiWX853ThfTvFhx0m33Ld2l7LoPieXL3~cVzuz7xsyDoQPTfTmdlS4JLdQZn7lEAYY9Ca0bfFeTSsKTf-1wvHdQ62BT~1dGzHvwJohyweUbJj4wG7WLfOhD6wzd0WYAF7I07jGq17oAX3ary9XFvAZ-pspsdFktb5ckZ~I8VN~STRjDUb-tqf9i2whX0e70nzqTQritJbdA__",
    name: "",
  },
  {
    pfp: "https://s3-alpha-sig.figma.com/img/f952/fa47/9a54dc57c3bfdd71f8ab78628ef9ac9a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aiKYfhDrGmfJV8k5inXJK4BZVfMpuWmO77aEObJWxttMvkJIegjYuV-3sdtQuyhIOfHBChpoCCdOR9p3vtO5zO4SgPFQKwdFssmlIePvesoogN~AMS63qF4jCXqbMD1ClYaL1PgdMC30yyg9RLh9HPOJnFQ-ZPgoK34GMyNkR8JyQgpw8PJNo4DggwWKse6hwckaWUhiUIyVNPZNPbZl-WZubkcJwkXz7IoMhyIUtoOEzHwk6~tot9AWw1vAjmxmDvNmW~EGR3ySfGC3TWPUamC5r3x8I~2kZkvCvQn9Z1YXvRRNRsUo-cc4Z9EeivRB~kNEJuvm1EdsnS61FlEsIg__",
    name: "",
  },
];

const Blogs = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap gap-10 justify-center  w-[1280px]">
        {allblog.map((allblog) => (
          <Blogpage imgpost={allblog.imgpost} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
