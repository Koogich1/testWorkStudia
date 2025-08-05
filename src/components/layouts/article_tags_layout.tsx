import { MainPageTagsData, GET_TAGS } from "@/graphql/getArticlesMainPage";

import { useQuery } from "@apollo/client";
import client from "@/lib/apolloClient";
import Button from "@ui/button/button";
import React from "react";
import { cn } from "@/lib/utils";

const tagDisplayNames: Record<string, string> = {
  "arch": "Architectural Design",
  "дома и квартиры": "Residential Interiors",
  "коммерация": "Commercial Interior",
};

export const ArticleTagsLayout = ({
  onSelectTag,
  selectedTag
}: {
  onSelectTag: (tag: string | null) => void;
  selectedTag: string
}) => {
  const { data, loading, error } = useQuery<MainPageTagsData, any>(GET_TAGS, {
    variables: { status: "PUBLISHED" },
    client,
  });

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div className="py-30">Ошибка: {error.message}</div>;

  const tags = data?.tags;

  return (
    <div className="w-full overflow-x-hidden">
      <ul className="flex gap-2 items-center py-8 border-y border-[#5B5C5D] px-[3%] relative whitespace-nowrap md:overflow-x-visible md:whitespace-normal">
        <li className="">
          <Button variant={"tabs"} onClick={() => onSelectTag(null)}  className={cn(
                "all" === selectedTag ? "border-white" : "border-transparent"
              )}>
            All
          </Button>
        </li>
        <div className="border-[#5B5C5D] border-x h-[35px] w-[1px]" />
        {tags?.map((tag, index) => (
          <li key={index} className="flex gap-2 items-center">
            {index !== 0 && tags.length && (
              <div className="border-[#5B5C5D] border-x h-[35px] w-[1px]" />
            )}
            <Button
              variant={"tabs"}
              onClick={() => onSelectTag(tag.system_title)}
              className={cn(
                tag.system_title === selectedTag ? "border-white" : "border-transparent"
              )}
            >
              {tagDisplayNames[tag.system_title] || tag.system_title}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
