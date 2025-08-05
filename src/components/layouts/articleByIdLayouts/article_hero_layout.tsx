import React from "react";
import Image from "next/image";
import { ArticleByIdData } from "@/graphql/getArticleById";

interface ArticleHeroProps {
    article: ArticleByIdData['article'];
}
export const ArticleHeroLayout = ({article}: ArticleHeroProps) => {
  return (
    <div className="flex items-center flex-col lg:flex-row text-white justify-center h-[42vw] lg:h-[38.41vw] px-[3%]">
      <Image
        src={`https://r810983k-1337.euw.devtunnels.ms${article?.Hero.background.url}`}
        alt={article.Hero.background.name}
        className="w-full object-cover lg:absolute top-21.5 z-[0] h-[38.41vw]"
        width={1920}
        height={782}
      />
      <div className="flex w-full justify-center text-center lg:text-start lg:justify-between items-center pb-6">
        <h1 className="justify-between z-[10] absolute lg:static hidden md:block font-[700] text-[48px] w-[53%] top-[13vw]">
          {article?.Hero.title}
        </h1>
        <p className="lg:w-[40%] pt-10 lg:pt-0 text-start lg:mr-24 xl:w-[30%] 2xl:w-[28%] xl:mr-36 text-[16px] z-10 font-[400]">
          {article.Hero.description}
        </p>
      </div>
    </div>
  );
};
