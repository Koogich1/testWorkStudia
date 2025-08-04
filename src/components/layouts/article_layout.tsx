"use client";

import {
  MainPageArticleData,
  GET_ARTICLES,
} from "@/graphql/getArticlesMainPage";
import { useQuery } from "@apollo/client";
import client from "@/lib/apolloClient";
import React from "react";
import Button from "@ui/button/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@ui/card/card";
import { ArticleTagsLayout } from "./article_tags_layout";
import { useState } from "react";

const ArticleLayout = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>();

  const { data, loading, error } = useQuery<
    MainPageArticleData,
    { filters: any, status: string }
  >(GET_ARTICLES, {
    variables: {
      filters: {
        ...(selectedTag && {
          tags: {
            system_title: { eq: selectedTag },
          },
        }),
      },
      status: "PUBLISHED",
    },
    client,
  });
  if (loading) return <div>Загрузка...</div>;
  if (error) return <div className="py-30">Ошибка: {error.message}</div>;

  const articles = data?.articles;

  return (
    <div className="bg-black pt-25 text-white pb-50">
      <div className="flex flex-col">
        <ArticleTagsLayout onSelectTag={setSelectedTag} selectedTag={selectedTag ? selectedTag : "all"}/>
        <div className="grid grid-cols-3 px-[3%] pt-13 gap-y-9">
          {articles?.map((article, index) => (
            <Card
              imgUrl={article.Hero.background.url}
              Src={article.documentId}
              key={index}
            >
              <CardHeader>
                <CardTitle>{article.Hero.title}</CardTitle>
                <CardDescription>{article.Hero.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleLayout;
