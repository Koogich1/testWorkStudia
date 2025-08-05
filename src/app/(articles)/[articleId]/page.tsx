"use client";

import { ArticleHeroLayout } from "@/components/layouts/articleByIdLayouts/article_hero_layout";
import TextGridLayout from "@/components/layouts/articleByIdLayouts/text_grid_layout";
import React from "react";
import client from "@/lib/apolloClient";
import { ArticleByIdData, GET_ARTICLE_BY_ID } from "@/graphql/getArticleById";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

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
    <div className='pt-22 bg-black'>
      <ArticleHeroLayout article={data.article} />
      <TextGridLayout article={data.article} />
    </div>
  );
};

export default Page;
