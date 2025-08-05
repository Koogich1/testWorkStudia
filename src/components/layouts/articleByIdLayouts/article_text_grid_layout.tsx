import {
  ArticleByIdData,
  isGridImage,
  isGridText,
  isGridTextOverImage,
  isGridTextUnderImage,
} from "@/graphql/getArticleById";
import Image from "next/image";
import React from "react";

interface ArticleGridProps {
  article: ArticleByIdData["article"];
}
const TextGridLayout = ({ article }: ArticleGridProps) => {
  return (
    /** TODO, НЕ ЗАБЫТЬ ЗАМЕНИТЬ МОК ДАННЫЕ */

    <div className="px-[3%] text-white lg:pt-0 text-[14px] md:text-[16px]">
      <div className="py-10 border-b border-[#5B5C5D]">
        <ul className="flex gap-5 items-center text-[16px]">
          <li>Projects</li>
          <div className="bg-[#5B5C5D] h-4 w-[1px]" />
          <li>Architectural projects</li>
          <div className="bg-[#5B5C5D] h-4 w-[1px]" />
          <li className="opacity-50">Sustainable Design</li>
        </ul>
      </div>

      <div className="pt-30 space-y-30 border-b border-[#5B5C5D]">
        {(() => {
          const elements = [];
          for (let i = 0; i < article.content.length; i++) {
            const item = article.content[i];
            if (isGridImage(item)) {
              const nextItem = article.content[i + 1];
              if (nextItem && isGridText(nextItem)) {
                elements.push(
                  <div key={i} className="flex flex-col sm:flex-row justify-center gap-10 w-full">
                    <div className="w-full sm:w-[33%] sm:h-[350px] md:h-auto lg:w-[55%] 2xl:w-[60%]">
                      <Image
                        src={`https://r810983k-1337.euw.devtunnels.ms${item.image.url}`}
                        alt={item.image.name}
                        width={920}
                        height={540}
                        className="w-full object-cover h-full"
                      />
                    </div>
                    <div className="sm:w-[67%] lg:w-[45%] 2xl:w-2/5 lg:px-5 2xl:px-6">
                      {(() => {
                        const cleanText = nextItem.text
                          .split("")
                          .filter((char) => char !== "#")
                          .join("");
                        const heading = cleanText.slice(0, 20);
                        const p1 = cleanText.slice(20, 330);
                        const p2 = cleanText.slice(330);

                        return (
                          <div className="flex flex-col 2xl:space-y-8 space-y-5">
                            <h3 className="text-[30px] 2xl:text-[32px]">{heading}</h3>
                            <p className="text-[14px] 2xl:text-[16px]">{p1}</p>
                            <p className="text-[14px] 2xltext-[16px]">{p2}</p>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                );
                i++;
              } else {
                elements.push(
                  <div key={i} className="flex justify-center gap-10 w-full">
                    <div className="w-3/5">
                      <Image
                        src={`https://r810983k-1337.euw.devtunnels.ms${item.image.url}`}
                        alt={item.image.name}
                        width={920}
                        height={540}
                        className="w-full"
                      />
                    </div>
                  </div>
                );
              }
            } else if (isGridText(item)) {
              elements.push(
                <div key={i} className="flex justify-center gap-10 w-full">
                  <div className="w-2/5">
                    <h3>{item.text}</h3>
                  </div>
                </div>
              );
            } else if (isGridTextUnderImage(item)) {
              const nextItem = article.content[i + 1];
              if (nextItem && isGridTextUnderImage(nextItem)) {
                elements.push(
                  <div key={i} className="flex flex-col sm:flex-row justify-center gap-23 w-full">
                    <div className="flex flex-col gap-10 md:w-full sm:w-[38%] sm:border-b sm:border-[#5B5C5D]">
                      {item.image && (
                        <Image
                          src={`https://r810983k-1337.euw.devtunnels.ms${item.image.url}`}
                          alt={item.image.name}
                          width={920}
                          height={540}
                          className="w-full"
                        />
                      )}
                      {item.text && (
                        <div className="w-full">
                          <h3>{item.text}</h3>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-10 sm:w-[62%]">
                      {nextItem.image && (
                        <Image
                          src={`https://r810983k-1337.euw.devtunnels.ms${nextItem.image.url}`}
                          alt={nextItem.image.name}
                          width={920}
                          height={540}
                          className="w-full"
                          style={{
                            boxShadow:
                              "inset 120px 120px 120px rgba(239, 68, 68, 0.6)",
                          }}
                        />
                      )}
                      {nextItem.text && (
                        <div className="w-full sm:w-[70%]">
                          <h3>{nextItem.text}</h3>
                        </div>
                      )}
                    </div>
                  </div>
                );
                i++;
              } else {
                elements.push(
                  <div key={i} className="flex flex-col gap-10 w-1/2">
                    {item.image && (
                      <Image
                        src={`https://r810983k-1337.euw.devtunnels.ms${item.image.url}`}
                        alt={item.image.name}
                        width={920}
                        height={540}
                        className="w-full"
                      />
                    )}
                    {item.text && (
                      <div className="w-full">
                        <h3>{item.text}</h3>
                      </div>
                    )}
                  </div>
                );
              }
            } else if (isGridTextOverImage(item)) {
              elements.push(
                <div key={i} className="flex flex-col gap-10 relative">
                  <div
                    className="absolute inset-0 sm:shadow-inset-bottom-100"
                  ></div>
                  {item.image && (
                    <Image
                      src={`https://r810983k-1337.euw.devtunnels.ms${item.image.url}`}
                      alt={item.image.name}
                      width={920}
                      height={540}
                      className="w-full"
                    />
                  )}
                  {item.text && (
                    <div className="sm:absolute sm:bottom-10 sm:left-10 sm:w-1/3">
                      <h3>
                        {(() => {
                          const cleanText = item.text
                            .split("")
                            .filter((char) => char !== "#")
                            .join("");
                          const heading = cleanText.slice(0, 16);
                          const p1 = cleanText.slice(16);

                          return (
                            <div className="flex flex-col space-y-8">
                              <h3 className="text-[32px]">{heading}</h3>
                              <p className="text-[14px] md:text-[16px]">{p1}</p>
                            </div>
                          );
                        })()}
                      </h3>
                    </div>
                  )}
                </div>
              );
            } else {
              elements.push(null);
            }
          }
          return elements;
        })()}
      </div>
    </div>
  );
};

export default TextGridLayout;
