import ImageContent from "@/components/maincontent";
import React, { useEffect, useState } from "react";

export default function Home() {
  // const getArticle = async () => {
  //   const response = await fetch("http://dev.to/spi/srticles");
  //   const data = await response.json();
  //   console.log("data", data);
  // };
  // useEffect(() => {
  //   getArticle();
  // });

  // return (
  //   <div>
  //     <button onClick={count + 1}>Click here {count}</button>
  //   </div>
  // );

  return (
    <div>
      <ImageContent />
    </div>
  );
}
