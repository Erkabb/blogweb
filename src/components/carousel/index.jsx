import React, { useContext, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Articles from "../maincontent/articles";
import { EmblaContext } from "./main-blog";

export function EmblaCarousel({ currentIdx }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const { articles } = useContext(EmblaContext);
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="embla " ref={emblaRef}>
      <div
        className="embla__container flex h-full transition-all duration-150"
        style={{ transform: `translateX(-${currentIdx * 100}%)` }}
      >
        <div className="embla__slide  rounded-lg">
          {articles.map((article) => (
            <Articles article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
