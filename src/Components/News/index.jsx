import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/categoryNews")
      .then((response) => {
        const fetchedArticles = response.data.slice(-8).map((article) => ({
          title: article.title,
          description: article.description,
          mainImageUrl: article.mainImageUrl,
          categories: article.categories.map((category) => category.title),
          path: article.path,
          publishedDate: article.publishedDate,
        }));
        setArticles(fetchedArticles);
        setLoading(false);
      })
      .catch((err) => {
        setError("İlgili makaleler yüklenirken hata oluştu.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full max-w-[984px] space-y-12 ml-0 mx-auto px-4 pb-40">
      {articles.map((article, index) => (
        <React.Fragment key={index}>
          <div
            className={`flex flex-col xl:flex-${
              index === 6 ? "col" : "row"
            } gap-6 items-start`}
            style={{
              height: index === 6 ? "auto" : "240px",
              gap: index === 6 ? "24px" : "",
            }}
          >
            <img
              src={article.mainImageUrl}
              alt={article.title}
              className={`${
                index === 6
                  ? "w-full h-[400px]"
                  : "w-full xl:w-[424px] h-[240px] object-cover"
              }`}
            />
            <div
              className={`${
                index === 6 ? "w-full" : "w-full xl:w-[536px]"
              } flex flex-col gap-4`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-[#0089CC] text-[12px] leading-[16px] tracking-[1px]">
                  {article.categories[1] || article.categories[0]}
                </span>
                <span className="text-[#A0A5AA] text-[12px] leading-[16px] tracking-[1px]">
                  {new Date(article.publishedDate).toLocaleDateString()}
                </span>
              </div>
              <h3
                className={`${
                  index === 6
                    ? "text-[24px] xl:text-[36px] leading-[32px] xl:leading-[44px]"
                    : "text-[16px] xl:text-[20px]"
                } font-serif`}
              >
                {article.title}
              </h3>
              <p className="text-[14px] xl:text-[16px] leading-[20px] xl:leading-[24px] text-[#000000]">
                {article.description}
              </p>
            </div>
          </div>
          {index < articles.length - 1 && (
            <div
              className="w-full h-[1px] bg-[#E1E6EB] mt-[24px]"
              style={{
                gap: "0px",
                opacity: "1",
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default News;
