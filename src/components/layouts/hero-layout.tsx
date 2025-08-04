"use client";

import React from "react";

import { GET_HERO_PAGE_QUERIES, HeroPageQueryData } from "@/graphql/getHeroPageQueries";
import { useQuery } from "@apollo/client";
import client from "@/lib/apolloClient";

import Image from "next/image";
import Button from "@ui/button/button";


const HeroLayout = () => {
  const { data, loading, error } = useQuery<HeroPageQueryData, any>(
    GET_HERO_PAGE_QUERIES,
    {
      variables: { status: "PUBLISHED" },
      client,
    }
  );

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div className="py-30">Ошибка: {error.message}</div>;

  const imgUrl = data?.homePage?.hero?.background?.url || "";
  const foregroundUrl = data?.homePage?.hero?.foreground?.url || "";

  return (
    <div className="flex flex-col h-[850px] bg- justify-center bg-[#F0F0F0] items-center px-[3%] relative">
      {imgUrl && (
        <Image
          src={`https://r810983k-1337.euw.devtunnels.ms${imgUrl}`}
          alt="Hero Text"
          width={1000}
          height={400}
          className="w-full"
        />
      )}
      <div className="w-full flex flex-col items-end justify-end">
        <div className="w-[45%] pt-20 pr-[9%] flex flex-col items-start justify-start">
          <p className="text-[1vw]">{data?.homePage.hero.decritpion}</p>
          <Button variant={"default"} className="h-[59px] mt-5">
            {data?.homePage.hero.action.label}
          </Button>
        </div>
      </div>
      {foregroundUrl && (
        <Image
          src={`https://r810983k-1337.euw.devtunnels.ms${foregroundUrl}`}
          alt="Hero Image"
          width={1920}
          height={1080}
          className="absolute w-[56.5%] left-0 bottom-[-95px]"
        />
      )}
    </div>
  );
};

export default HeroLayout;
