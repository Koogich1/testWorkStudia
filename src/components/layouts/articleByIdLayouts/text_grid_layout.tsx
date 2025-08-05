import { ArticleByIdData } from '@/graphql/getArticleById'
import Image from 'next/image'
import React from 'react'

interface ArticleGridProps {
    article: ArticleByIdData['article'];
}
const TextGridLayout = ({article}: ArticleGridProps) => {
  return (
    /** TODO, НЕ ЗАБЫТЬ ЗАМЕНИТЬ МОК ДАННЫЕ */
    <div className='px-[3%] pb-20 text-white'>
        <div className='py-10 border-b border-[#5B5C5D]'>
            <ul className='flex gap-5 items-center text-[16px]'>
                <li>Projects</li>
                <div className='bg-[#5B5C5D] h-4 w-[1px]' />
                <li>Architectural projects</li>
                <div className='bg-[#5B5C5D] h-4 w-[1px]' />
                <li className='opacity-50'>Sustainable Design</li>
            </ul>
        </div>
        <div className='flex flex-col gap-10 pt-25'>
            {article.content.map((item, index) => {
                switch (item.__typename) {
                    case "ComponentUiGridImage":
                    case "ComponentUiGridText":
                        return (
                            <div key={index} className='flex justify-center gap-10'>
                               <div className='w-1/3'>
                                 {item.__typename === "ComponentUiGridImage" && item.image && (
                                    <Image
                                        src={`https://r810983k-1337.euw.devtunnels.ms${item.image.url}`}
                                        alt={item.image.name}
                                        width={920}
                                        height={540}
                                        className=''
                                    />
                                )}
                               </div>
                                {item.__typename === "ComponentUiGridText" && item.text && (
                                    <div className='w-1/3 '>
                                        <h3>{item.text}</h3>
                                    </div>
                                )}
                            </div>
                        );
                    case "ComponentUiGridTextUnderImage":
                        return (
                            <div className='flex gap-10'>
                                {item.image && (
                                    <Image
                                        src={`https://r810983k-1337.euw.devtunnels.ms${item.image.url}`}
                                        alt={item.image.name}
                                        width={920}
                                        height={540}
                                        className='w-2/3'
                                    />
                                )}
                                {item.text && (
                                    <div className='w-1/3'>
                                        <h3>{item.text}</h3>
                                    </div>
                                )}
                            </div>
                        );
                    case "ComponentUiGridTextOverImage":
                        return (
                            <div className='flex gap-10'>
                                {item.image && (
                                    <Image
                                        src={`https://r810983k-1337.euw.devtunnels.ms${item.image.url}`}
                                        alt={item.image.name}
                                        width={920}
                                        height={540}
                                        className='w-2/3'
                                    />
                                )}
                                {item.text && (
                                    <div className='w-1/3'>
                                        <h3>{item.text}</h3>
                                    </div>
                                )}
                            </div>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    </div>
  )
}

export default TextGridLayout
