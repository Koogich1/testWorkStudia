"use client";

import { ArticleHeroLayout } from "@/components/layouts/articleByIdLayouts/article_hero_layout";
import TextGridLayout from "@/components/layouts/articleByIdLayouts/article_text_grid_layout";
import React from "react";
import client from "@/lib/apolloClient";
import { ArticleByIdData, GET_ARTICLE_BY_ID } from "@/graphql/getArticleById";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { ArticleRecommendLayout } from "@/components/layouts/articleByIdLayouts/article_recommend_layout";

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
    <main className='pt-21 bg-[#181818] min-h-[90vh]'>
      <ArticleHeroLayout article={data.article} />
      <TextGridLayout article={data.article} />
      <ArticleRecommendLayout choseArticleId={articleId as string} />
    </main>
  );
};

export default Page;
