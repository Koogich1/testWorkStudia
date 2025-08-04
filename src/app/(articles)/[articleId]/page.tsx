"use client";

import { ArticleByIdData, GET_ARTICLE_BY_ID } from "@/graphql/getArticleById";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import React from "react";
import client from "@/lib/apolloClient";

const Page = () => {
  const { articleId } = useParams();
  const { data, loading, error } = useQuery<ArticleByIdData, any>(
    GET_ARTICLE_BY_ID,
    {
      variables: {
        status: "PUBLISHED",
        documentId: articleId,
      },
      client,
    }
  );

  if (loading) return <div className="pt-50 text-white">Загрузка...</div>;
  if (error)
    return <div className="pt-50 text-white">Ошибка: {error.message}</div>;

  if (!data?.article)
    return <div className="pt-50 text-white">Статья не найдена.</div>;

  return (
    <div className="pt-22 bg-black text-white">
      <div className="flex justify-between">
        {data?.article.Hero.title}
      </div>
    </div>
  );
};

export default Page;
