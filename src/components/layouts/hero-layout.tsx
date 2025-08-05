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
    <div 
      className="flex flex-col min-h-[90vw] sm:min-h-0 sm:h-[650px] lg:h-[750px] xl:h-[850px] justify-center bg-[#F0F0F0] items-center px-[3%] relative"
    >
      {imgUrl && (
        <Image
          src={`https://r810983k-1337.euw.devtunnels.ms${imgUrl}`}
          alt="Hero Text"
          width={1812}
          height={172}
          className="w-full sm:pb-0"
        />
      )}
      <div className="w-full flex flex-col items-end justify-end">
        <div className="w-[45%] pt-20 pr-[9%] flex flex-col items-start justify-start">
          <p className="text-[16px] hidden sm:block">{data?.homePage.hero.decritpion}</p>
          <Button variant={"default"} className="h-[59px] sm:h-auto mt-5 hidden sm:block py-4">
            {data?.homePage.hero.action.label}
          </Button>
        </div>
      </div>
      {foregroundUrl && (
        <Image
          src={`https://r810983k-1337.euw.devtunnels.ms${foregroundUrl}`}
          alt="Hero Image"
          width={1056}
          height={824}
          className="absolute w-[80vw] bottom-[-6.7vw] 3xl:w-[50vw] 2xl:bottom-[-4.52vw] 2xl:w-[55vw] xl:bottom-[-5.75vw] sm:bottom-[-5.8vw] sm:w-[70vw] left-0"
        />
      )}
    </div>
  );
};

export default HeroLayout;
