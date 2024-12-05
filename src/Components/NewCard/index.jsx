import React from "react";

export default function NewsCard({ article }) {
  return (
    <div
      key={article.id}
      className="max-w-[296px] w-full flex flex-col items-start *:w-full"
    >
      <img
        src={article.mainImageUrl}
        alt={article.title}
        className="h-[196px] object-cover"
      />
      <h3 className=" text-[#000000] font-[700] text-[20px] leading-[28px] font-noto-serif line-clamp-4">
        {article.title}
      </h3>
      <p className=" text-[#63676C] font-[400] text-[14px] leading-[20px] font-noto-serif line-clamp-6">
        {article.description}
      </p>
    </div>
  );
}
