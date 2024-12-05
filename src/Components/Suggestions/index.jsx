import React, { useState, useEffect } from "react";
import axios from "axios";

const RelatedArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/related")
      .then((response) => {
        const fetchedArticles = response.data.slice(0, 4).map((article) => ({
          title: article.title,
          description: article.description,
          date: new Date(article.publishedDate).toLocaleDateString(),
          imageUrl: article.mainImageUrl,
        }));

        setArticles(fetchedArticles);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching related articles:", err);
        setError("İlgili makaleler yüklenirken hata oluştu.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>İlgili makaleler yükleniyor...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="w-full h-auto bg-[#EDF2F7] p-4 md:p-8 space-y-6">
      <h2 className="text-[20px] font-bold leading-[32px] tracking-[2px] text-[#005D99] md:text-[24px] md:w-auto">
        US Elections 2024
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white p-4 flex flex-col items-start space-y-4 rounded-lg shadow-md"
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-[180px] object-cover rounded-md sm:h-[200px]"
            />
            <p className="text-[12px] text-[#A0A5AA]">{article.date}</p>
            <div className="space-y-2">
              <p className="font-serif font-bold text-[18px] leading-[24px] text-[#000000] sm:text-[20px]">
                {article.title}
              </p>
              <p className="text-[14px] text-[#6C757D]">
                {article.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
