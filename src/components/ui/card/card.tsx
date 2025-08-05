import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  imgUrl?: string;
  Src: string;
  children?: React.ReactNode;
}

export const Card = ({ imgUrl, Src, children }: CardProps) => {
  return (
    <Link href={Src} className="card p-2 block hover:scale-[102%] hover:shadow-lg transition-all ">
      {imgUrl && (
        <Image
          src={`https://r810983k-1337.euw.devtunnels.ms${imgUrl}`}
          alt={imgUrl}
          width={560}
          height={320}
          className="card-img mb-2 object-cover w-full h-[320px]"
        />
      )}
      {children}
    </Link>
  );
};

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="card-header">{children}</div>
);

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="card-title text-lg font-mediumt text-[32px]">{children}</h2>
);

export const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <p className="card-description text-[16px] font-light pt-6">
    {children}
  </p>
);
