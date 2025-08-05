import React from "react";
import Image from "next/image";
import { ArticleByIdData } from "@/graphql/getArticleById";

interface ArticleHeroProps {
    article: ArticleByIdData['article'];
}
export const ArticleHeroLayout = ({article}: ArticleHeroProps) => {
  return (
    <div className="flex items-center text-white justify-center h-[38.41vw] px-[3%]">
      <Image
        src={`https://r810983k-1337.euw.devtunnels.ms${article?.Hero.background.url}`}
        alt={article.Hero.background.name}
        className="w-full object-cover absolute top-21.5 z-[0] h-[38.41vw]"
        width={1920}
        height={782}
      />
      <div className="flex w-full justify-between items-center">
        <h1 className="flex justify-between z-[10] font-[700] text-[2.6vw] w-[53%]">
          {article?.Hero.title}
        </h1>
        <p className="w-[28%] mr-36 text-[0.9vw] z-10 font-[400]">
          {article.Hero.description}
        </p>
      </div>
    </div>
  );
};
