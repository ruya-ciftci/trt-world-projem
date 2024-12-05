import React from "react";

function Country({ category, title }) {
  return (
    <div className="space-y-[8px]">
      <div className="text-[#0089CC] font-[500] text-[12px] leading-[16px] tracking-[1px] py-3">
        {category}
      </div>
      <div className="text-[#000000] font-[700] text-[16px] leading-[24px]">
        {title}
      </div>
    </div>
  );
}

export default function Index() {
  const news = [
    { category: "AFRICA", title: "Hundreds of prisoners escape Uganda prison" },
    {
      category: "LIFE",
      title: "Over 30M people infected with Covid-19 – latest updates",
    },
    {
      category: "ASIA",
      title: "Robot helps India's virus patients speak to loved ones",
    },
    {
      category: "AMERICAS",
      title: "Hurricane Sally drenches US Gulf coast, trapping hundreds",
    },
    {
      category: "BUSINESS",
      title: "New Zealand economy sees record recession amid virus pandemic",
    },
    {
      category: "BUSINESS",
      title: "New Zealand economy sees record recession amid virus pandemic",
    },
  ];

  return (
    <div className="w-[296px]">
      <div className="space-y-[16px]">
        {news.map((item, index) => (
          <React.Fragment key={index}>
            <Country category={item.category} title={item.title} />
            {index !== news.length - 1 && (
              <div className="w-[296px] h-[1px] bg-[#E1E6EB] mt-[16px]"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
