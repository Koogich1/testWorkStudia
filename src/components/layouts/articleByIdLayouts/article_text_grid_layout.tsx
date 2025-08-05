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

    <div className="px-[3%] pb-20 text-white">
      <div className="py-10 border-b border-[#5B5C5D]">
        <ul className="flex gap-5 items-center text-[16px]">
          <li>Projects</li>
          <div className="bg-[#5B5C5D] h-4 w-[1px]" />
          <li>Architectural projects</li>
          <div className="bg-[#5B5C5D] h-4 w-[1px]" />
          <li className="opacity-50">Sustainable Design</li>
        </ul>
      </div>
      <div className="pt-30 space-y-30">
        {(() => {
          const elements = [];
          for (let i = 0; i < article.content.length; i++) {
            const item = article.content[i];

            if (isGridImage(item)) {
              const nextItem = article.content[i + 1];
              if (nextItem && isGridText(nextItem)) {
                elements.push(
                  <div key={i} className="flex justify-center gap-10 w-full">
                    <div className="w-[60%]">
                      <Image
                        src={`https://r810983k-1337.euw.devtunnels.ms${item.image.url}`}
                        alt={item.image.name}
                        width={920}
                        height={540}
                        className="w-full"
                      />
                    </div>
                    <div className="w-2/5 px-6">
                      {(() => {
                        const cleanText = nextItem.text
                          .split("")
                          .filter((char) => char !== "#")
                          .join("");
                        const heading = cleanText.slice(0, 20);
                        const p1 = cleanText.slice(20, 330);
                        const p2 = cleanText.slice(330);

                        return (
                          <div className="flex flex-col space-y-8">
                            <h3 className="text-[1.7vw]">{heading}</h3>
                            <p className="text-[0.9vw]">{p1}</p>
                            <p className="text-[0.9vw]">{p2}</p>
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
                  <div key={i} className="flex justify-center gap-23 w-full">
                    <div className="flex flex-col gap-10 w-[38%] border-b border-[#5B5C5D]">
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
                    <div className="flex flex-col gap-10 w-[62%]">
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
                        <div className="w-[70%]">
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
                <div key={i} className="flex gap-10 relative">
                  <div
                    className="absolute inset-0"
                    style={{
                      boxShadow: "inset 0 -100px 50px -20px rgba(0, 0, 0, 1)",
                    }}
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
                    <div className="absolute bottom-10 left-10 w-1/3">
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
                              <h3 className="text-[1.7vw]">{heading}</h3>
                              <p className="text-[0.9vw]">{p1}</p>
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
