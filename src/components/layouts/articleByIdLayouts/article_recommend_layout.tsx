import React from "react";
import {
  MainPageArticleData,
  GET_ARTICLES,
} from "@/graphql/getArticlesMainPage";
import { useQuery } from "@apollo/client";
import client from "@/lib/apolloClient";
import { Card, CardDescription, CardHeader, CardTitle } from "@ui/card/card";

interface ArticleRecommendProps {
  choseArticleId: string;
}

export const ArticleRecommendLayout = ({
  choseArticleId,
}: ArticleRecommendProps) => {
  const { data, loading, error } = useQuery<
    MainPageArticleData,
    { filters: any; status: string }
  >(GET_ARTICLES, {
    variables: {
      filters: {},
      status: "PUBLISHED",
    },
    client,
  });

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div className="py-30">Ошибка: {error.message}</div>;

  const articles = data?.articles?.filter(
    (article) => article.documentId !== choseArticleId
  );

  return (
    <div className="pt-25 text-white pb-50">
      <h3 className="px-[3%] text-[32px] font-[700]">We also recommend</h3>
      <div className="flex flex-col">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 px-[3%] pt-13 gap-y-9">
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
